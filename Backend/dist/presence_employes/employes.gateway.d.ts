import { ConsoleLogger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { Server } from "ws";
import { Repository } from "typeorm";
import { Employes } from "../employes/entities/employe.entity";
export declare class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private employes;
    private port;
    private parser;
    logger: ConsoleLogger;
    fanOn: string;
    server: Server;
    constructor(employes: Repository<Employes>);
    handleConnection(client: Socket): void;
    handleDisconnect(client: any): void;
}
