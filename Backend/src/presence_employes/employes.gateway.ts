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
import { Client } from "socket.io/dist/client";

  const port = new SerialPort({
  path: "/dev/ttyUSB0",
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));
parser.on('data', console.log); 
port.write('');
parser.write('');



@WebSocketGateway({ cors: true })
export class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
  logger = new ConsoleLogger();
  fanOn = "";
  @WebSocketServer()
  //public server: Server;

  public socket: Socket;

  constructor(@InjectRepository(Employes) private climatModel: Repository<Employes>) {}

  handleConnection(@ConnectedSocket() client: Socket) {
    /* const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds(); */

    client.on("rfid", (onData) => {
//      port.write(onData);
      this.fanOn = onData;
      console.log(onData);  
    });
    /* client.on("fanOff", (offData) => {
      this.fanOn = offData;
    }); */

    var parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
        parser.on('data', function(data) { 
            console.log(data);
            client.emit("rfid", data);
            this.matricule = data;
        })


      this.logger.log(this.fanOn);
     
      
      
      
  }

  handleDisconnect(@ConnectedSocket() client: any) {
    client.leave();
  }
}
