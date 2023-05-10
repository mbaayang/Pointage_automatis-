import { Repository } from "typeorm";
import { CreateEmployeDto } from "./dto/create-employe.dto";
import { UpdateEmployeDto } from "./dto/update-employe.dto";
import { UpdatePasswordDto } from "./dto/updatePassword.dto";
import { Employes } from "./entities/employe.entity";
export declare class EmployesService {
    private employesRepository;
    constructor(employesRepository: Repository<Employes>);
    checkEmailExists(email: string): Promise<boolean>;
    validateUser(matricule: string): Promise<Employes | null>;
    login(user: Employes): Promise<{
        id: number;
        role: string;
        prenom: string;
        nom: string;
        email: string;
        image: string;
    }>;
    create(createEmployeDto: CreateEmployeDto): Promise<Employes>;
    findAll(): Promise<Employes[]>;
    findOne(matricule: string): Promise<Employes>;
    update(id: number, updateEmployeDto: UpdateEmployeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
    updatePassword(email: string, updatePassword: UpdatePasswordDto): Promise<any>;
}
