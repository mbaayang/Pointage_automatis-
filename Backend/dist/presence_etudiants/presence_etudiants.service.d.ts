import { Repository } from "typeorm";
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';
import { PresenceEtudiant } from './entities/presence_etudiant.entity';
export declare class PresenceEtudiantsService {
    private presenceEtuRepository;
    constructor(presenceEtuRepository: Repository<PresenceEtudiant>);
    findAll(): Promise<PresenceEtudiant[]>;
    findOne(id: number): string;
    update(id: number, updatePresenceEtudiantDto: UpdatePresenceEtudiantDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
