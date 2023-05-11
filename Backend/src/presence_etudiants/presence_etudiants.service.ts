import { Injectable } from '@nestjs/common';
import { CreatePresenceEtudiantDto } from './dto/create-presence_etudiant.dto';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PresenceEtudiant } from './entities/presence_etudiant.entity';

@Injectable()
export class PresenceEtudiantsService {

  constructor( @InjectRepository(PresenceEtudiant) private presenceEtudiantRepository : Repository<PresenceEtudiant>) {}

  create(createPresenceEtudiantDto: CreatePresenceEtudiantDto) {
    return 'This action adds a new presenceEtudiant';
  }

  findAll() {
    return this.presenceEtudiantRepository.find({relations: ['etudiant']});
  }

  findOne(id: number) {
    return `This action returns a #${id} presenceEtudiant`;
  }

  update(id: number, updatePresenceEtudiantDto: UpdatePresenceEtudiantDto) {
    return `This action updates a #${id} presenceEtudiant`;
  }

  remove(id: number) {
    return `This action removes a #${id} presenceEtudiant`;
  }
}
