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
import * as bcrypt from "bcryptjs";

@Injectable()
export class EmployesService {
  constructor(
    @InjectRepository(Employes)
    private employesRepository: Repository<Employes>
  ) {}

  async create(createEmployeDto: CreateEmployeDto): Promise<Employes> {
    const { prenom1, nom1, email1,mot_de_passe, matricule1, role, etat, image, date_inscription} = createEmployeDto;
      // Vérifier si un employé avec la même adresse e-mail existe déjà dans la base de données
      const existingEmploye = await this.employesRepository.findOneBy({ email1 });
      if (existingEmploye) {
        throw new ConflictException('Adresse e-mail déjà prise');
      }
      const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    const employe = new Employes();
    employe.prenom1 = createEmployeDto.prenom1;
    employe.nom1 = createEmployeDto.nom1;
    employe.email1 = createEmployeDto.email1;
    employe.mot_de_passe = hashedPassword;
    employe.matricule1 = createEmployeDto.matricule1;
    employe.role = createEmployeDto.role;
    employe.etat = true;
    employe.image = createEmployeDto.image;
    employe.date_inscription = new Date();
    
    return await this.employesRepository.save(employe);
  }

  async findAll(): Promise<Employes[]> {
    return await this.employesRepository.find({});
  }

  async findOne(id: number) {
    return await this.employesRepository.findOneById(id);
  }

  async update(id: number, updateEmployeDto: UpdateEmployeDto) {
    const updatedEmploye = Employes;

    Object.keys(updateEmployeDto).forEach((key) => {
      updatedEmploye[key] = updateEmployeDto[key];
    });
    return await this.employesRepository.update(id, updateEmployeDto);
  }

  async remove(id: number) {
    await this.employesRepository.delete(id);
  }

  //modification mot de passe
  async updatePassword(
    email1: string,
    updatePassword: UpdatePasswordDto
  ):Promise<any> {
    const user = await this.employesRepository.findOne({ where: { email1 } });
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