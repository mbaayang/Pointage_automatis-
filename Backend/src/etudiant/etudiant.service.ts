import { Injectable } from '@nestjs/common';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
import { Etudiant } from './entities/etudiant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EtudiantService {

  constructor(
    @InjectRepository(Etudiant) private etudiantRepository: Repository<Etudiant>
  ){}
    
  async checkEmailExists(email: string): Promise<boolean> {
    const etudiant = await this.etudiantRepository.findOneBy({ email });
    return !!etudiant;
  }

  create(createEtudiantDto: CreateEtudiantDto) {
    const newEtudiant = this.etudiantRepository.create({
      ...createEtudiantDto,
      date_inscription: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    });
    return this.etudiantRepository.save(newEtudiant);
  }

  findAll() {
    return this.etudiantRepository.find();
  }

  findOne(id: number) {
    return this.etudiantRepository.findOneBy({id});
  }

  update(id: number, updateEtudiantDto: UpdateEtudiantDto) {
    return this.etudiantRepository.update(id, updateEtudiantDto);
  }

}
