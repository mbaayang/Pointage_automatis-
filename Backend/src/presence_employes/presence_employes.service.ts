import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
import { PresenceEmploye } from './entities/presence_employe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PresenceEmployesService {

constructor(@InjectRepository(PresenceEmploye)
private presenceRepository: Repository<PresenceEmploye>){}

async checkDateExists(date: string): Promise<boolean> {
  const presence = await this.presenceRepository.findOneBy({ date });
  return !!presence;
}

async checkEmailExists(email: string): Promise<boolean> {
  const presence = await this.presenceRepository.findOneBy({ email });
  return !!presence;
}

  async create(createPresenceEmployeDto: CreatePresenceEmployeDto) {
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
    const newPresence = this.presenceRepository.create({
      date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      heure_arrivée: new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds(),
      heure_sortie: "- -",
      etat_retard: message,
      email: createPresenceEmployeDto.email,
      employe: createPresenceEmployeDto.employe 
    });
    
    return await this.presenceRepository.save(newPresence);
  }

  findAll() {
    return this.presenceRepository.find({relations: ['employe']});
  }

  findOne(email: string):Promise<PresenceEmploye> {
    const user = this.presenceRepository.findOne({ where: { email } });
    return user;
  }

  update(id: number, updatePresenceEmployeDto: UpdatePresenceEmployeDto) {
    return this.presenceRepository.update(id, updatePresenceEmployeDto)
  }

  remove(id: number) {
    return `This action removes a #${id} presenceEmploye`;
  }

  async validateUser(
    email: string
  ): Promise<PresenceEmploye | null> {
    const user = await this.presenceRepository.findOne({ where: { email } });
    if (user) {   
          return user;  
    } 
  }

  async login(
    user: PresenceEmploye
  ): Promise<{ id: number; email: string;}> {
    const payload = { email: user.email, sub: user.id };
    const id = user.id;
    const email = user.email;
    return { 
      id: id,
      email: email,
  }
}

}
