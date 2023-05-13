import { Etudiant } from 'src/etudiant/entities/etudiant.entity';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
export declare class EtudiantController {
    private readonly etudiantService;
    constructor(etudiantService: EtudiantService);
    create(createEtudiantDto: CreateEtudiantDto, res: any): Promise<any>;
    findAll(): Promise<Etudiant[]>;
    findOne(id: number): Promise<Etudiant>;
    update(id: number, updateEtudiantDto: UpdateEtudiantDto): Promise<import("typeorm").UpdateResult>;
    login(user: Etudiant): Promise<{}>;
}
