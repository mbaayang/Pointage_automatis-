import { Injectable } from '@nestjs/common';
import { CreatePresenceEtudiantDto } from './dto/create-presence_etudiant.dto';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';

@Injectable()
export class PresenceEtudiantsService {
  create(createPresenceEtudiantDto: CreatePresenceEtudiantDto) {
    return 'This action adds a new presenceEtudiant';
  }

  findAll() {
    return `This action returns all presenceEtudiants`;
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
