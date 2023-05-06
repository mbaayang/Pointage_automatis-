import { EmployesService } from './employes.service';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
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
    findAll(): Promise<import("./entities/employe.entity").Employes[]>;
    findOne(id: string): Promise<import("./entities/employe.entity").Employes>;
    update(id: string, updateEmployeDto: UpdateEmployeDto): Promise<import("typeorm").UpdateResult>;
    updatePassword(email: string, updatePasswordDto: UpdatePasswordDto): Promise<any | null>;
    remove(id: string): Promise<void>;
}
