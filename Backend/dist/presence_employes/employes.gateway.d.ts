import { ConsoleLogger } from "@nestjs/common";
import { Server } from "ws";
import { Repository } from "typeorm";
import { Employes } from "../employes/entities/employe.entity";
import { Etudiant } from "src/etudiant/entities/etudiant.entity";
import { PresenceEmploye } from "./entities/presence_employe.entity";
import { PresenceEtudiant } from "src/presence_etudiants/entities/presence_etudiant.entity";
export declare class UsersGateway {
    private employes;
    private etudiant;
    private presenceEmploye;
    private presenceEtudiant;
    logger: ConsoleLogger;
    fanOn: any;
    private readonly serialPort;
    server: Server;
    constructor(employes: Repository<Employes>, etudiant: Repository<Etudiant>, presenceEmploye: Repository<PresenceEmploye>, presenceEtudiant: Repository<PresenceEtudiant>);
    private initializeSerialPort;
    private checkTables;
}
