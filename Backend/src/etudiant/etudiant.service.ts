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

  async create(createEtudiantDto: CreateEtudiantDto): Promise<Etudiant> {
    const etudiant = new Etudiant();
    etudiant.prenom = createEtudiantDto.prenom;
    etudiant.nom = createEtudiantDto.nom;
    etudiant.email = createEtudiantDto.email;
    etudiant.matricule = createEtudiantDto.matricule;
    etudiant.niveau = createEtudiantDto.niveau;
    etudiant.photo = createEtudiantDto.photo;
    etudiant.date_inscription = new Date();
    return await this.etudiantRepository.save(etudiant);
    /* const createEtudiant = this.etudiantRepository.create({
      ...createEtudiantDto,
      date_inscription: new Date()
    });
    return this.etudiantRepository.save(createEtudiant); */
  }

  findAll() {
    return this.etudiantRepository.find();
  }

/*   findOne(id: number) {
    return this.etudiantRepository.findOneBy({id});
  } */

  update(id: number, updateEtudiantDto: UpdateEtudiantDto) {
    return this.etudiantRepository.update(id, updateEtudiantDto);
  }

}
