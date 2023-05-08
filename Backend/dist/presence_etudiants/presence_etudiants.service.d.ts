import { CreatePresenceEtudiantDto } from './dto/create-presence_etudiant.dto';
import { UpdatePresenceEtudiantDto } from './dto/update-presence_etudiant.dto';
export declare class PresenceEtudiantsService {
    create(createPresenceEtudiantDto: CreatePresenceEtudiantDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePresenceEtudiantDto: UpdatePresenceEtudiantDto): string;
    remove(id: number): string;
}
