import { CreatePresenceEtudiantDto } from './dto/create-presence_etudiant.dto';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';
import { Repository } from 'typeorm';
import { PresenceEtudiant } from './entities/presence_etudiant.entity';
export declare class PresenceEtudiantsService {
    private presenceEtudiantRepository;
    constructor(presenceEtudiantRepository: Repository<PresenceEtudiant>);
    create(createPresenceEtudiantDto: CreatePresenceEtudiantDto): string;
    findAll(): Promise<PresenceEtudiant[]>;
    findOne(id: number): string;
    update(id: number, updatePresenceEtudiantDto: UpdatePresenceEtudiantDto): string;
    remove(id: number): string;
}
