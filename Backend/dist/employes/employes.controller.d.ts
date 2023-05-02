import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
export declare class EmployesController {
    private readonly employesService;
    constructor(employesService: EmployesService);
    create(createEmployeDto: CreateEmployeDto): Promise<{
        prenom: string;
        nom: string;
        email: string;
        mot_de_passe: any;
        matricule: string;
        role: string;
        etat: boolean;
    } & import("./entities/employe.entity").Employes>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEmployeDto: UpdateEmployeDto): string;
    remove(id: string): string;
}
