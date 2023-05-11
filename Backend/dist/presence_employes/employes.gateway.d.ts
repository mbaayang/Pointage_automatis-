import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
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
    handleDisconnect(client: any): void;
}
