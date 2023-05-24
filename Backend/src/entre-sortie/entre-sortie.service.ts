import { Injectable } from '@nestjs/common';
import { CreateEntreSortieDto } from './dto/create-entre-sortie.dto';
import { UpdateEntreSortieDto } from './dto/update-entre-sortie.dto';

@Injectable()
export class EntreSortieService {
  create(createEntreSortieDto: CreateEntreSortieDto) {
    return 'This action adds a new entreSortie';
  }

  findAll() {
    return `This action returns all entreSortie`;
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
