import { PresenceEmploye } from 'src/presence_employes/entities/presence_employe.entity';
import { Server } from "ws";
import { Repository } from "typeorm";
import { Employes } from "../employes/entities/employe.entity";
import { Etudiant } from "src/etudiant/entities/etudiant.entity";
import { EntreSortie } from "src/entre-sortie/entities/entre-sortie.entity";
import { PresenceEtudiant } from "src/presence_etudiants/entities/presence_etudiant.entity";
export declare class UsersGateway {
    private employes;
    private etudiant;
    private presenceEmploye;
    private presenceEtudiant;
    private entreSortie;
    private readonly serialPort;
    server: Server;
    constructor(employes: Repository<Employes>, etudiant: Repository<Etudiant>, presenceEmploye: Repository<PresenceEmploye>, presenceEtudiant: Repository<PresenceEtudiant>, entreSortie: Repository<EntreSortie>);
    private initializeSerialPort;
    private checkTables;
}
