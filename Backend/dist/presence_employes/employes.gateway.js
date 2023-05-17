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
const ws_1 = require("ws");
const serialport_1 = require("serialport");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employe_entity_1 = require("../employes/entities/employe.entity");
const etudiant_entity_1 = require("../etudiant/entities/etudiant.entity");
const presence_employe_entity_1 = require("./entities/presence_employe.entity");
const presence_etudiant_entity_1 = require("../presence_etudiants/entities/presence_etudiant.entity");
let UsersGateway = class UsersGateway {
    constructor(employes, etudiant, presenceEmploye, presenceEtudiant) {
        this.employes = employes;
        this.etudiant = etudiant;
        this.presenceEmploye = presenceEmploye;
        this.presenceEtudiant = presenceEtudiant;
        this.serialPort = new serialport_1.SerialPort({
            path: "/dev/ttyUSB0",
            baudRate: 9600,
            dataBits: 8,
            parity: "none",
            stopBits: 1,
        });
        this.initializeSerialPort();
    }
    initializeSerialPort() {
        this.serialPort.on('data', (data) => {
            const receivedValue = data.toString().trim();
            this.checkTables(receivedValue);
        });
    }
    async checkTables(matricule) {
        const result1 = await this.employes.findOne({ where: { matricule } });
        const result2 = await this.etudiant.findOne({ where: { matricule } });
        if (result1 && result1.etat == false) {
            this.server.emit('data', "Compte archivé");
        }
        else if (result1 && result1.etat == true) {
            console.log(...oo_oo(`3cf5ff87_0`, 'La valeur existe dans la table employés'));
            console.log(...oo_oo(`3cf5ff87_1`, result1));
            this.server.emit('data', result1);
            this.serialPort.write('1');
            const h = new Date().getHours();
            const m = new Date().getMinutes();
            let message = "";
            if (h >= 8 && m >= 30) {
                message = "Oui";
            }
            else {
                message = "Non";
            }
            const presenceEmp = {
                date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
                heure_arrivée: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
                heure_sortie: "- -",
                etat_retard: message,
                email: result1.email,
                employe: result1.id
            };
            const email = result1.email;
            const date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
            const presenceEmployes = await this.presenceEmploye.findOne({ where: { email, date } });
            if (!presenceEmployes) {
                await this.presenceEmploye.save(presenceEmp);
            }
            else {
                const sortie = {
                    id: presenceEmployes.id,
                    heure_sortie: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
                };
                await this.presenceEmploye.update(sortie.id, sortie);
            }
        }
        else if (result2 && result2.etat == false) {
            this.server.emit('data', "Compte archivé");
        }
        else if (result2 && result2.etat == true) {
            console.log(...oo_oo(`3cf5ff87_2`, 'La valeur existe dans la table etudiants'));
            console.log(...oo_oo(`3cf5ff87_3`, result2));
            this.server.emit('data', result2);
            this.serialPort.write('1');
            const h = new Date().getHours();
            const m = new Date().getMinutes();
            const s = new Date().getSeconds();
            let message = "";
            if (h >= 8 && m >= 30) {
                message = "Oui";
            }
            else {
                message = "Non";
            }
            const presenceEtu = {
                date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
                heure: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
                etat_presence: "En attente",
                etat_retard: message,
                email: result2.email,
                etudiant: result2.id
            };
            const email = result2.email;
            const date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
            const presenceEtudiant = await this.presenceEtudiant.findOne({ where: { email, date } });
            if (!presenceEtudiant) {
                await this.presenceEtudiant.save(presenceEtu);
            }
            return;
        }
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_a = typeof ws_1.Server !== "undefined" && ws_1.Server) === "function" ? _a : Object)
], UsersGateway.prototype, "server", void 0);
UsersGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employe_entity_1.Employes)),
    __param(1, (0, typeorm_1.InjectRepository)(etudiant_entity_1.Etudiant)),
    __param(2, (0, typeorm_1.InjectRepository)(presence_employe_entity_1.PresenceEmploye)),
    __param(3, (0, typeorm_1.InjectRepository)(presence_etudiant_entity_1.PresenceEtudiant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UsersGateway);
exports.UsersGateway = UsersGateway;
//# sourceMappingURL=employes.gateway.js.map