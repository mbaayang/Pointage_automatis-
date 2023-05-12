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
exports.PresenceEtudiant = void 0;
const etudiant_entity_1 = require("../../etudiant/entities/etudiant.entity");
const typeorm_1 = require("typeorm");
let PresenceEtudiant = class PresenceEtudiant {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PresenceEtudiant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PresenceEtudiant.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PresenceEtudiant.prototype, "heure", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PresenceEtudiant.prototype, "etat_presence", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PresenceEtudiant.prototype, "etat_retard", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], PresenceEtudiant.prototype, "statut", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.ManyToOne)(type => etudiant_entity_1.Etudiant),
    __metadata("design:type", Number)
], PresenceEtudiant.prototype, "etudiant", void 0);
PresenceEtudiant = __decorate([
    (0, typeorm_1.Entity)()
], PresenceEtudiant);
exports.PresenceEtudiant = PresenceEtudiant;
//# sourceMappingURL=presence_etudiant.entity.js.map