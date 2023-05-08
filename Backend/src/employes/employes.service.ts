import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEmployeDto } from "./dto/create-employe.dto";
import { UpdateEmployeDto } from "./dto/update-employe.dto";
import { UpdatePasswordDto } from "./dto/updatePassword.dto";
import { Employes } from "./entities/employe.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class EmployesService {
  constructor(
    @InjectRepository(Employes)
    private employesRepository: Repository<Employes>
  ) {}

  async create(createEmployeDto: CreateEmployeDto): Promise<Employes> {
    const { prenom, nom, email,mot_de_passe, matricule, role, image, etat, date_inscription} = createEmployeDto;
      // Vérifier si un employé avec la même adresse e-mail existe déjà dans la base de données
      const existingEmploye = await this.employesRepository.findOneBy({ email });
      if (existingEmploye) {
        //throw new ConflictException('Adresse e-mail déjà prise');
        throw new UnauthorizedException({
          correct: false,
          message: "Adresse e-mail déjà prise",
        });
      }else{
      const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    const employe = new Employes();
    employe.prenom = createEmployeDto.prenom;
    employe.nom = createEmployeDto.nom;
    employe.email = createEmployeDto.email;
    employe.mot_de_passe = hashedPassword;
    employe.matricule = createEmployeDto.matricule;
    employe.role = createEmployeDto.role;
    employe.image = createEmployeDto.image;
    employe.date_inscription = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    employe.etat = true;
    
    return await this.employesRepository.save(employe);
    }
  }
  /* create(createEmployeDto: CreateEmployeDto) {
    console.log(createEmployeDto);
    const newUser = this.employesRepository.create(createEmployeDto)

    return this.employesRepository.save(newUser);
  } */

  async findAll(): Promise<Employes[]> {
    return await this.employesRepository.find({});
  }

  async findOne(matricule: string) {
    return await this.employesRepository.findOneById(matricule);
  }

  update(id: number, updateEmployeDto: UpdateEmployeDto) {
    return this.employesRepository.update(id, updateEmployeDto);
  }

  async remove(id: number) {
    await this.employesRepository.delete(id);
  }

  //modification mot de passe
  async updatePassword(
    email: string,
    updatePassword: UpdatePasswordDto
  ):Promise<any> {
    const user = await this.employesRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException("User not found");
    }

    const isPasswordValid = await bcrypt.compare(
      updatePassword.mot_de_passe,
      user.mot_de_passe
    );
    if (!isPasswordValid) {
      throw new BadRequestException("Le mot de passe est incorrect");
    }

    const hashedNewPassword = await bcrypt.hash(updatePassword.NewPassword, 10);
    user.mot_de_passe = hashedNewPassword;
    await this.employesRepository.save(user);
    throw new BadRequestException("reussi");

    
  }
}
