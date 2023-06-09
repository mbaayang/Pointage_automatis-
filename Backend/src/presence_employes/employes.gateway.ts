import { PresenceEmploye } from 'src/presence_employes/entities/presence_employe.entity';
import { Injectable } from "@nestjs/common";
import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "ws";
import { SerialPort } from "serialport";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employes} from "../employes/entities/employe.entity";
import { Etudiant } from "src/etudiant/entities/etudiant.entity";
import { EntreSortie } from "src/entre-sortie/entities/entre-sortie.entity";
import { PresenceEtudiant } from "src/presence_etudiants/entities/presence_etudiant.entity";
import { log } from 'console';



@WebSocketGateway({ cors: true })
@Injectable()
export class UsersGateway  {
  /* private readonly serialPort: SerialPort;
  @WebSocketServer()
  public server: Server;

  constructor(
  @InjectRepository(Employes) private employes: Repository<Employes>,
  @InjectRepository(Etudiant) private etudiant: Repository<Etudiant>,
  @InjectRepository(PresenceEmploye) private presenceEmploye: Repository<PresenceEmploye>,
  @InjectRepository(PresenceEtudiant) private presenceEtudiant: Repository<PresenceEtudiant>,
  @InjectRepository(EntreSortie) private entreSortie: Repository<EntreSortie>,
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
      console.log(receivedValue);
      
    });
  }
  private async checkTables(matricule: string): Promise<void> {
    const result1 = await this.employes.findOne({ where: { matricule } });
    const result2 = await this.etudiant.findOne({ where: { matricule } });

    // Effectuez des opérations supplémentaires en fonction des résultats obtenus
    if (result1 && result1.etat == false){
      this.server.emit('data', "Compte archivé");
      this.serialPort.write('2');
    }
    else if (result1 && result1.etat == true) {
      console.log('La valeur existe dans la table employés');
      console.log(result1);
      this.server.emit('data', result1);
      this.serialPort.write('1');
      const h = new Date().getHours();
      const m = new Date().getMinutes();
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
        else if(presenceEmployes){
          const h = new Date().getHours();
          const m = new Date().getMinutes();
          if(h < 20){
            const email = presenceEmployes.email;
            const last = await this.entreSortie.findOne({ where: { email }, order: { id: 'DESC' }, });
            console.log(last);
            let nature = "sortie";
            if(last?.nature == "sortie"){
              nature = "entree"
            }
            else{
              nature = "sortie"
            }
            const entresortie = {
              date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
              heure: new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds(),
              nature: nature,
              email: result1.email,
              employe: result1.id
            }
            await this.entreSortie.save(entresortie);
          }
          else if(h >= 20){
            const sortie = {
              id:presenceEmployes.id,
              heure_sortie: new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()
            }
            await this.presenceEmploye.update(sortie.id,sortie);
          }
        }     
    }
    else if(result2 && result2.etat == false){
      this.server.emit('data', "Compte archivé");
      this.serialPort.write('2');
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
  } */
}