import { ConsoleLogger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
<<<<<<< HEAD
import { Socket } from "socket.io";
import { Server } from "ws";
import { Repository } from "typeorm";
import { Employes } from "../employes/entities/employe.entity";
export declare class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private employes;
    logger: ConsoleLogger;
    fanOn: string;
    server: Server;
    constructor(employes: Repository<Employes>);
    handleConnection(client: Socket): void;
=======
import * as socketio from 'socket.io';
import { Repository } from "typeorm";
import { Employes } from "../employes/entities/employe.entity";
export declare class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private presenceEmploye;
    private port;
    private parser;
    matricule: string;
    constructor(presenceEmploye: Repository<Employes>);
    handleConnection(client: socketio.Socket, ...args: any[]): void;
>>>>>>> e9693c633b446b4ca757f22da9186212c43c0512
    handleDisconnect(client: any): void;
}
