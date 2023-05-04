import { EmployesService } from './employes.service';
import { UpdateEmployeDto } from './dto/update-employe.dto';
export declare class EmployesController {
    private readonly employesService;
    constructor(employesService: EmployesService);
    submitForm(file: any, body: any): Promise<{
        prenom: any;
        nom: any;
        email: any;
        mot_de_passe: any;
        matricule: any;
        role: any;
        photo: any;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEmployeDto: UpdateEmployeDto): string;
    remove(id: string): string;
}
