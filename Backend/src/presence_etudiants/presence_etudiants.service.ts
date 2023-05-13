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

  async checkDateExists(date: string): Promise<boolean> {
    const presence = await this.presenceEtuRepository.findOneBy({ date });
    return !!presence;
  }
  
  async checkEmailExists(email: string): Promise<boolean> {
    const presence = await this.presenceEtuRepository.findOneBy({ email });
    return !!presence;
  }

  async create(createPresenceEtudiantDto: CreatePresenceEtudiantDto) {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    let message = "";
    if( h >= 8 && m > 30){
      message = "Oui";
    }
    else{
      message = "Non"
    }
    const newPresence = this.presenceEtuRepository.create({
      date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      heure: new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds(),
      etat_presence: "En attente",
      etat_retard: message,
      email: createPresenceEtudiantDto.email,
      etudiant: createPresenceEtudiantDto.etudiant 
    });
    
    return await this.presenceEtuRepository.save(newPresence);
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
