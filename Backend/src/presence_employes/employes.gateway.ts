import { ConsoleLogger } from "@nestjs/common";
import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Socket } from "socket.io";
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employes} from "../employes/entities/employe.entity";
import { PresenceEmploye } from "./entities/presence_employe.entity";
import { log } from "console";


@WebSocketGateway({ cors: true })
export class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
  
    matricule = '';
  
    constructor(@InjectRepository(Employes) private presenceEmploye: Repository<Employes>) {}
  
    handleConnection(@ConnectedSocket() socket: Socket) {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds(); 

      var port = new SerialPort({ path:'/dev/ttyUSB0',
        baudRate: 9600,
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
        //flowControl: true
    }); 

        var parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
        parser.on('data', function(data) { 
            console.log(data);
            socket.emit("rfid", data);
            this.matricule = data;
        }) 
        
 
       
    }
  
    handleDisconnect(@ConnectedSocket() client: any) {
      client.leave();
    }
  }