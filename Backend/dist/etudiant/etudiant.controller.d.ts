import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
export declare class EtudiantController {
    private readonly etudiantService;
    constructor(etudiantService: EtudiantService);
    create(photo: any, createEtudiantDto: CreateEtudiantDto): Promise<import("./entities/etudiant.entity").Etudiant>;
    findAll(): Promise<import("./entities/etudiant.entity").Etudiant[]>;
    update(id: number, updateEtudiantDto: UpdateEtudiantDto): Promise<import("typeorm").UpdateResult>;
}