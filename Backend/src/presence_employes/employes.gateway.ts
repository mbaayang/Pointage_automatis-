import {ConsoleLogger, Injectable } from "@nestjs/common";
import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "ws";
import { SerialPort } from "serialport";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employes} from "../employes/entities/employe.entity";
import { Etudiant } from "src/etudiant/entities/etudiant.entity";
import { PresenceEmploye } from "./entities/presence_employe.entity";
import { PresenceEtudiant } from "src/presence_etudiants/entities/presence_etudiant.entity";



@WebSocketGateway({ cors: true })
@Injectable()
export class UsersGateway  {
  private readonly serialPort: SerialPort;
  @WebSocketServer()
  public server: Server;
  

  //public socket: Socket;

  constructor(
  @InjectRepository(Employes) private employes: Repository<Employes>,
  @InjectRepository(Etudiant) private etudiant: Repository<Etudiant>,
  @InjectRepository(PresenceEmploye) private presenceEmploye: Repository<PresenceEmploye>,
  @InjectRepository(PresenceEtudiant) private presenceEtudiant: Repository<PresenceEtudiant>,
  ) 
  {
    this.serialPort = new SerialPort({
      path: "/dev/ttyUSB0",
      baudRate: 9600,
      dataBits: 8,
      parity: "none",
      stopBits: 1,
    });
    this.initializeSerialPort();
  }

  private initializeSerialPort() {
    this.serialPort.on('data', (data: Buffer) => {
      const receivedValue = data.toString().trim();
      this.checkTables(receivedValue);
    });
  }
  private async checkTables(matricule: string): Promise<void> {
    const result1 = await this.employes.findOne({ where: { matricule } });
    const result2 = await this.etudiant.findOne({ where: { matricule } });

    // Effectuez des opérations supplémentaires en fonction des résultats obtenus
    if (result1 && result1.etat == false){
      this.server.emit('data', "Compte archivé");
    }
    else if (result1 && result1.etat == true) {
      console.log('La valeur existe dans la table employés');
      console.log(result1);
      this.server.emit('data', result1);
      this.serialPort.write('1');
      const h = new Date().getHours();
      const m = new Date().getMinutes();
      const s = new Date().getSeconds();
      let message = "";
        if( h >= 8 && m >= 30){
          message = "Oui";
        }
        else{
          message = "Non"
        }
      const presenceEmp = {
        date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
        heure_arrivée: new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds(),
        heure_sortie: "- -",
        etat_retard: message,
        email: result1.email,
        employe: result1.id 
      }
      const email = result1.email;
      const date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
      const presenceEmployes = await this.presenceEmploye.findOne({ where: { email, date } });
        if(!presenceEmployes){
          await this.presenceEmploye.save(presenceEmp);
        }
        else{
          const sortie = {
            id:presenceEmployes.id,
            heure_sortie: new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()
          }
          await this.presenceEmploye.update(sortie.id,sortie);
        }
      
    }
    else if(result2 && result2.etat == false){
      this.server.emit('data', "Compte archivé");
    }
    else if(result2 && result2.etat == true) {
      console.log('La valeur existe dans la table etudiants');
      console.log(result2);
      this.server.emit('data', result2);
      this.serialPort.write('1');
      const h = new Date().getHours();
      const m = new Date().getMinutes();
      const s = new Date().getSeconds();
      let message = "";
        if( h >= 8 && m >= 30){
          message = "Oui";
        }
        else{
          message = "Non"
        }
        const presenceEtu = {
          date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
          heure: new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds(),
          etat_presence: "En attente",
          etat_retard: message,
          email: result2.email,
          etudiant: result2.id 
        }
        const email = result2.email;
        const date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
        const presenceEtudiant = await this.presenceEtudiant.findOne({ where: { email, date } });
        if(!presenceEtudiant){
          await this.presenceEtudiant.save(presenceEtu);
        }
        return;
    }
    /* else if(!result1 && !result2){
      this.server.emit('data', "inexistant");
    } */
  }
}


