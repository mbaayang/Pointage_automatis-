import {Injectable } from "@nestjs/common";
import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import * as socketio from 'socket.io';
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employes} from "../employes/entities/employe.entity";
import { PresenceEmploye } from "./entities/presence_employe.entity";


@WebSocketGateway({ cors: true })
@Injectable()
export class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private port: SerialPort;
  private parser: ReadlineParser;
  
    matricule = '';
  
    constructor(
      @InjectRepository(Employes) private presenceEmploye: Repository<Employes>) {
      this.port = new SerialPort({ 
      path:'/dev/ttyUSB0',
      baudRate: 9600,
      dataBits: 8,
      parity: 'none',
      stopBits: 1,
      autoOpen: false
  }); 
   this.parser = this.port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
    }
  
    handleConnection(client: socketio.Socket, ...args: any[]) {
/*       const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();  */
       
      this.parser.on('data', (data) => { 
          console.log(data);
          client.emit("rfid", data);
          this.matricule = data;
      }) 

    }

    handleDisconnect(@ConnectedSocket() client: any) {
      client.leave();
    }
  }