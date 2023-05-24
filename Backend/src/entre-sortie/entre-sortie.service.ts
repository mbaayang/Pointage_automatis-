import { Injectable } from '@nestjs/common';
import { CreateEntreSortieDto } from './dto/create-entre-sortie.dto';
import { UpdateEntreSortieDto } from './dto/update-entre-sortie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntreSortie } from './entities/entre-sortie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EntreSortieService {
  constructor(@InjectRepository(EntreSortie)
  private entreSortieRepository: Repository<EntreSortie>) {}
  create(createEntreSortieDto: CreateEntreSortieDto) {
    return 'This action adds a new entreSortie';
  }

  findAll() {
    return this.entreSortieRepository.find({relations: ['employe']});
  }

  findOne(id: number) {
    return `This action returns a #${id} entreSortie`;
  }

  update(id: number, updateEntreSortieDto: UpdateEntreSortieDto) {
    return `This action updates a #${id} entreSortie`;
  }

  remove(id: number) {
    return `This action removes a #${id} entreSortie`;
  }
}
