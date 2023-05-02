/// <reference types="node" />
import { Repository } from 'typeorm';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { Employes } from './entities/employe.entity';
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
        photo: Buffer;
        etat: boolean;
    } & Employes>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEmployeDto: UpdateEmployeDto): string;
    remove(id: number): string;
}
