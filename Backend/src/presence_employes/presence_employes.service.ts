import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';
import { PresenceEmploye } from './entities/presence_employe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PresenceEmployesService {

  constructor( @InjectRepository(PresenceEmploye) private presenceEmployeRepository : Repository<PresenceEmploye>) {}

  create(createPresenceEmployeDto: CreatePresenceEmployeDto) {
    return 'This action adds a new presenceEmploye';
  }

  findAll() {
    return this.presenceEmployeRepository.find({relations: ['employe']});
  }

  findOne(id: number) {
    return `This action returns a #${id} presenceEmploye`;
  }

  update(id: number, updatePresenceEmployeDto: UpdatePresenceEmployeDto) {
    return `This action updates a #${id} presenceEmploye`;
  }

  remove(id: number) {
    return `This action removes a #${id} presenceEmploye`;
  }
}
