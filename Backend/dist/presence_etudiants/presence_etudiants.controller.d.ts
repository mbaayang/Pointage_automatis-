import { PresenceEtudiantsService } from './presence_etudiants.service';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';
export declare class PresenceEtudiantsController {
    private readonly presenceEtudiantsService;
    constructor(presenceEtudiantsService: PresenceEtudiantsService);
<<<<<<< HEAD
=======
    create(createPresenceEtudiantDto: CreatePresenceEtudiantDto, res: any): Promise<any>;
>>>>>>> ed1cd8e716050db4e8fd5782b2fd73640cf3b4f2
    findAll(): Promise<import("./entities/presence_etudiant.entity").PresenceEtudiant[]>;
    findOne(id: string): string;
    update(id: string, updatePresenceEtudiantDto: UpdatePresenceEtudiantDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
