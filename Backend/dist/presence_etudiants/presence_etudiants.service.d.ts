import { Repository } from "typeorm";
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';
import { PresenceEtudiant } from './entities/presence_etudiant.entity';
export declare class PresenceEtudiantsService {
    private presenceEtuRepository;
    constructor(presenceEtuRepository: Repository<PresenceEtudiant>);
<<<<<<< HEAD
=======
    checkDateExists(date: string): Promise<boolean>;
    checkEmailExists(email: string): Promise<boolean>;
    create(createPresenceEtudiantDto: CreatePresenceEtudiantDto): Promise<PresenceEtudiant>;
>>>>>>> ed1cd8e716050db4e8fd5782b2fd73640cf3b4f2
    findAll(): Promise<PresenceEtudiant[]>;
    findOne(id: number): string;
    update(id: number, updatePresenceEtudiantDto: UpdatePresenceEtudiantDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
