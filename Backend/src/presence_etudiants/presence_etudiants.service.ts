import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePresenceEtudiantDto } from './dto/create-presence_etudiant.dto';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';
import { PresenceEtudiant } from './entities/presence_etudiant.entity';

@Injectable()
export class PresenceEtudiantsService {

  constructor(@InjectRepository(PresenceEtudiant)
  private presenceEtuRepository: Repository<PresenceEtudiant>){}
  

  findAll() {
    return this.presenceEtuRepository.find({relations: ['etudiant']});
  }

  findOne(id: number) {
    return `This action returns a #${id} presenceEtudiant`;
  }

  update(id: number, updatePresenceEtudiantDto: UpdatePresenceEtudiantDto) {
    return this.presenceEtuRepository.update(id, updatePresenceEtudiantDto);
  }

  remove(id: number) {
    return `This action removes a #${id} presenceEtudiant`;
  }
}
