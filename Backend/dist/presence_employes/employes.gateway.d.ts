import { ConsoleLogger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { Repository } from "typeorm";
import { Employes } from "../employes/entities/employe.entity";
export declare class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private climatModel;
    logger: ConsoleLogger;
    fanOn: string;
    socket: Socket;
    constructor(climatModel: Repository<Employes>);
    handleConnection(client: Socket): void;
    handleDisconnect(client: any): void;
}
