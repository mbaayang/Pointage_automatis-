import { Repository } from "typeorm";
import { CreateEmployeDto } from "./dto/create-employe.dto";
import { UpdateEmployeDto } from "./dto/update-employe.dto";
import { UpdatePasswordDto } from "./dto/updatePassword.dto";
import { Employes } from "./entities/employe.entity";
export declare class EmployesService {
    private employesRepository;
    constructor(employesRepository: Repository<Employes>);
    create(createEmployeDto: CreateEmployeDto): Promise<{
        prenom: string;
        nom: string;
        email: string;
        mot_de_passe: any;
        matricule: string;
        role: string;
        etat: boolean;
    } & Employes>;
    findAll(): Promise<Employes[]>;
    findOne(id: number): Promise<Employes>;
    update(id_employe: number, updateEmployeDto: UpdateEmployeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
    updatePassword(email: string, updatePassword: UpdatePasswordDto): Promise<any>;
}
