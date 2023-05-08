import {
  Injectable,
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

  async checkEmailExists(email: string): Promise<boolean> {
    const employe = await this.employesRepository.findOneBy({ email });
    return !!employe;
  }

  async create(createEmployeDto: CreateEmployeDto){
    const mot_de_passe = createEmployeDto.mot_de_passe;
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    const newEmploye = this.employesRepository.create({
      prenom: createEmployeDto.prenom,
      nom: createEmployeDto.nom,
      email: createEmployeDto.email,
      mot_de_passe: hashedPassword,
      role: createEmployeDto.role,
      matricule: createEmployeDto.matricule,
      image: createEmployeDto.image,
      date_inscription: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    });
    
    return await this.employesRepository.save(newEmploye);
    
  }
  
  async findAll(): Promise<Employes[]> {
    return await this.employesRepository.find({});
  }

  async findOne(id: number) {
    return await this.employesRepository.findOneById(id);
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
