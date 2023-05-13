import { Repository } from "typeorm";
import { CreatePresenceEtudiantDto } from './dto/create-presence_etudiant.dto';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';
import { PresenceEtudiant } from './entities/presence_etudiant.entity';
export declare class PresenceEtudiantsService {
    private presenceEtuRepository;
    constructor(presenceEtuRepository: Repository<PresenceEtudiant>);
    checkDateExists(date: string): Promise<boolean>;
    checkEmailExists(email: string): Promise<boolean>;
    create(createPresenceEtudiantDto: CreatePresenceEtudiantDto): Promise<PresenceEtudiant>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePresenceEtudiantDto: UpdatePresenceEtudiantDto): string;
    remove(id: number): string;
}
