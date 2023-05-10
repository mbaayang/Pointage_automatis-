import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { Repository } from "typeorm";
import { Employes } from "../employes/entities/employe.entity";
export declare class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private presenceEmploye;
    matricule: string;
    constructor(presenceEmploye: Repository<Employes>);
    handleConnection(socket: Socket): void;
    handleDisconnect(client: any): void;
}
