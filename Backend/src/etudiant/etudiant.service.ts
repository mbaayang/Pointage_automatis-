import { ConflictException, Injectable } from '@nestjs/common';
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

  async create(createEtudiantDto: CreateEtudiantDto): Promise<Etudiant> {
    const etudiant = new Etudiant();
    etudiant.prenom = createEtudiantDto.prenom;
    etudiant.nom = createEtudiantDto.nom;
    etudiant.email = createEtudiantDto.email;
    etudiant.matricule = createEtudiantDto.matricule;
    etudiant.niveau = createEtudiantDto.niveau;
    etudiant.photo = createEtudiantDto.photo;
    etudiant.date_inscription = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    
    return await this.etudiantRepository.save(etudiant);
    
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
