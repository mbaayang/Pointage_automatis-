import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { Employes } from './entities/employe.entity';
import * as bcrypt from "bcryptjs";

@Injectable()
export class EmployesService {

  constructor(
    @InjectRepository(Employes)
    private employesRepository: Repository<Employes>,
  ) {}

  async create(createEmployeDto: CreateEmployeDto) {
    const { prenom, nom, email, mot_de_passe, matricule, role, etat } = createEmployeDto;

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
      etat
    });

    return user;
  }

  findAll() {
    return `This action returns all employes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employe`;
  }

  update(id: number, updateEmployeDto: UpdateEmployeDto) {
    return `This action updates a #${id} employe`;
  }

  remove(id: number) {
    return `This action removes a #${id} employe`;
  }
}
