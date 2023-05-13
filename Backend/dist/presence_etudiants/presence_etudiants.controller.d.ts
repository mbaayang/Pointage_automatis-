import { PresenceEtudiantsService } from './presence_etudiants.service';
import { CreatePresenceEtudiantDto } from './dto/create-presence_etudiant.dto';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';
export declare class PresenceEtudiantsController {
    private readonly presenceEtudiantsService;
    constructor(presenceEtudiantsService: PresenceEtudiantsService);
<<<<<<< HEAD
    create(createPresenceEtudiantDto: CreatePresenceEtudiantDto, res: any): Promise<any>;
    findAll(): string;
=======
    create(createPresenceEtudiantDto: CreatePresenceEtudiantDto): string;
    findAll(): Promise<import("./entities/presence_etudiant.entity").PresenceEtudiant[]>;
>>>>>>> e9693c633b446b4ca757f22da9186212c43c0512
    findOne(id: string): string;
    update(id: string, updatePresenceEtudiantDto: UpdatePresenceEtudiantDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
