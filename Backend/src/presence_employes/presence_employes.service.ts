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

  

}
