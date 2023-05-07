import { PresenceEtudiantsService } from './presence_etudiants.service';
import { CreatePresenceEtudiantDto } from './dto/create-presence_etudiant.dto';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';
export declare class PresenceEtudiantsController {
    private readonly presenceEtudiantsService;
    constructor(presenceEtudiantsService: PresenceEtudiantsService);
    create(createPresenceEtudiantDto: CreatePresenceEtudiantDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePresenceEtudiantDto: UpdatePresenceEtudiantDto): string;
    remove(id: string): string;
}
