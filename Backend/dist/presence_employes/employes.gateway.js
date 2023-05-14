"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const ws_1 = require("ws");
const serialport_1 = require("serialport");
const parser_readline_1 = require("@serialport/parser-readline");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employe_entity_1 = require("../employes/entities/employe.entity");
const port = new serialport_1.SerialPort({
    path: "/dev/ttyUSB0",
    baudRate: 9600,
    dataBits: 8,
    parity: "none",
    stopBits: 1,
});
let UsersGateway = class UsersGateway {
    constructor(employes) {
        this.employes = employes;
        this.logger = new common_1.ConsoleLogger();
        this.fanOn = "0";
    }
    handleConnection(client) {
        client.on("porte", (onData) => {
            port.write(this.fanOn);
            this.fanOn = onData;
            console.log(onData);
        });
        var parser = port.pipe(new parser_readline_1.ReadlineParser({ delimiter: '\r\n' }));
        parser.on('data', (data) => {
            console.log(data);
            client.emit("rfid", data);
        });
        this.logger.log(this.fanOn);
    }
    handleDisconnect(client) {
        client.leave();
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_a = typeof ws_1.Server !== "undefined" && ws_1.Server) === "function" ? _a : Object)
], UsersGateway.prototype, "server", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], UsersGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersGateway.prototype, "handleDisconnect", null);
UsersGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employe_entity_1.Employes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersGateway);
exports.UsersGateway = UsersGateway;
//# sourceMappingURL=employes.gateway.js.map