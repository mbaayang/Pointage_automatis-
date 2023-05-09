import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
import { Employes } from './entities/employe.entity';
export declare class EmployesController {
    private readonly employesService;
    constructor(employesService: EmployesService);
    create(createEmployeDto: CreateEmployeDto, res: any): Promise<any>;
    findAll(): Promise<Employes[]>;
    findOne(matricule: string): Promise<Employes>;
    update(id: string, updateEmployeDto: UpdateEmployeDto): Promise<import("typeorm").UpdateResult>;
    updatePassword(email1: string, updatePasswordDto: UpdatePasswordDto): Promise<any | null>;
    remove(id: string): Promise<void>;
    login(user: Employes): Promise<{}>;
}
