import {
  Injectable,
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
import { log } from "console";

@Injectable()
export class EmployesService {
  constructor(
    @InjectRepository(Employes)
    private employesRepository: Repository<Employes>
  ) {}

  async create(createEmployeDto: CreateEmployeDto) {
    const { prenom, nom, email, mot_de_passe, matricule, role, etat } =
      createEmployeDto;

    const mail = await this.employesRepository.findOne({ where: { email } });

    if (mail) {
      throw new UnauthorizedException({ message: "Cet email existe déjà" });
    } 

    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
    //a mettre apres API
     const user = await this.employesRepository.save({
      prenom,
      nom,
      email,
      mot_de_passe: hashedPassword,
      matricule,
      role,
      etat,
    });


    return user;
  }

  async findAll(): Promise<Employes[]> {
    return await this.employesRepository.find({});
  }

  async findOne(id: number) {
    return await this.employesRepository.findOneById(id);
  }

  async update(id_employe: number, updateEmployeDto: UpdateEmployeDto) {
    const updatedEmploye = Employes;
    const email = Employes[3]
    const existeDeja = await this.employesRepository.findOne({ where: { email } });
    if (existeDeja) {
      console.log(email)
      throw new UnauthorizedException({ message: "Cet email existe déjà" });
     
    }
    Object.keys(updateEmployeDto).forEach((key) => {
      updatedEmploye[key] = updateEmployeDto[key];
    });
    return await this.employesRepository.update(id_employe, updateEmployeDto);
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
