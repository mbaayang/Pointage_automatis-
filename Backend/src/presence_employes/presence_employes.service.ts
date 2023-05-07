import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePresenceEmployeDto } from './dto/create-presence_employe.dto';
import { UpdatePresenceEmployeDto } from './dto/update-presence_employe.dto';

@Injectable()
export class PresenceEmployesService {
  create(createPresenceEmployeDto: CreatePresenceEmployeDto) {
    return 'This action adds a new presenceEmploye';
  }

  findAll() {
    return `This action returns all presenceEmployes`;
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
