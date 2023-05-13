import { Repository } from "typeorm";
import { CreatePresenceEtudiantDto } from './dto/create-presence_etudiant.dto';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';
<<<<<<< HEAD
import { PresenceEtudiant } from './entities/presence_etudiant.entity';
export declare class PresenceEtudiantsService {
    private presenceEtuRepository;
    constructor(presenceEtuRepository: Repository<PresenceEtudiant>);
    checkDateExists(date: string): Promise<boolean>;
    checkEmailExists(email: string): Promise<boolean>;
    create(createPresenceEtudiantDto: CreatePresenceEtudiantDto): Promise<PresenceEtudiant>;
    findAll(): string;
=======
import { Repository } from 'typeorm';
import { PresenceEtudiant } from './entities/presence_etudiant.entity';
export declare class PresenceEtudiantsService {
    private presenceEtudiantRepository;
    constructor(presenceEtudiantRepository: Repository<PresenceEtudiant>);
    create(createPresenceEtudiantDto: CreatePresenceEtudiantDto): string;
    findAll(): Promise<PresenceEtudiant[]>;
>>>>>>> e9693c633b446b4ca757f22da9186212c43c0512
    findOne(id: number): string;
    update(id: number, updatePresenceEtudiantDto: UpdatePresenceEtudiantDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
