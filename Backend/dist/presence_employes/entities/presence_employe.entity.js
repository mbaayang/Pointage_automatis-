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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenceEmploye = void 0;
const employe_entity_1 = require("../../employes/entities/employe.entity");
const typeorm_1 = require("typeorm");
let PresenceEmploye = class PresenceEmploye {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PresenceEmploye.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PresenceEmploye.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PresenceEmploye.prototype, "heure_arriv\u00E9e", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PresenceEmploye.prototype, "heure_sortie", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PresenceEmploye.prototype, "etat_retard", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PresenceEmploye.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.ManyToOne)(type => employe_entity_1.Employes),
    __metadata("design:type", Number)
], PresenceEmploye.prototype, "employe", void 0);
PresenceEmploye = __decorate([
    (0, typeorm_1.Entity)()
], PresenceEmploye);
exports.PresenceEmploye = PresenceEmploye;
//# sourceMappingURL=presence_employe.entity.js.map