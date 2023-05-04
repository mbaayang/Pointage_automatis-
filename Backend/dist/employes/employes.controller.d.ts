<<<<<<< HEAD
import { EmployesService } from "./employes.service";
import { CreateEmployeDto } from "./dto/create-employe.dto";
import { UpdateEmployeDto } from "./dto/update-employe.dto";
import { UpdatePasswordDto } from "./dto/updatePassword.dto";
=======
/// <reference types="node" />
import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
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
        photo: Buffer;
        etat: boolean;
    } & import("./entities/employe.entity").Employes>;
    findAll(): Promise<import("./entities/employe.entity").Employes[]>;
    findOne(id: string): Promise<import("./entities/employe.entity").Employes>;
    update(id: string, updateEmployeDto: UpdateEmployeDto): Promise<import("typeorm").UpdateResult>;
    updatePassword(email: string, updatePasswordDto: UpdatePasswordDto): Promise<any | null>;
    remove(id: string): Promise<void>;
}
