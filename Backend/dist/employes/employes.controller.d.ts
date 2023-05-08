import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
export declare class EmployesController {
    private readonly employesService;
    constructor(employesService: EmployesService);
    create(createEmployeDto: CreateEmployeDto, res: any): Promise<any>;
    findAll(): Promise<import("./entities/employe.entity").Employes[]>;
    findOne(matricule: string): Promise<import("./entities/employe.entity").Employes>;
    update(id: string, updateEmployeDto: UpdateEmployeDto): Promise<import("typeorm").UpdateResult>;
    updatePassword(email1: string, updatePasswordDto: UpdatePasswordDto): Promise<any | null>;
    remove(id: string): Promise<void>;
}
