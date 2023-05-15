/* import {ConsoleLogger, Injectable } from "@nestjs/common";
import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Socket } from "socket.io";
import { Server } from "ws";
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employes} from "../employes/entities/employe.entity";
import { PresenceEmploye } from "./entities/presence_employe.entity";
import { log } from "console";
import { Client } from "socket.io/dist/client";

  const port = new SerialPort({
  path: "/dev/ttyUSB0",
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
});


@WebSocketGateway({ cors: true })
@Injectable()
export class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
  logger = new ConsoleLogger();
  fanOn = "0";
  @WebSocketServer()
  public server: Server;
  

  //public socket: Socket;

  constructor(@InjectRepository(Employes) private employes: Repository<Employes>) {}

  handleConnection(@ConnectedSocket() client: Socket) {
    

    client.on("porte",(onData) => {
     port.write(this.fanOn);  
      this.fanOn = onData;
      console.log(onData); 
      
    });

    var parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
        parser.on('data',(data) => { 
            console.log(data);
            client.emit("rfid", data);
            //this.matricule = data;
            
        })


      this.logger.log(this.fanOn);
     
      
      
      
  }

  handleDisconnect(@ConnectedSocket() client: any) {
    client.leave();
  }
}
 */