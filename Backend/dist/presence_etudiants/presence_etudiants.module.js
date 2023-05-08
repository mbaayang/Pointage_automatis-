"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenceEtudiantsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const presence_etudiants_service_1 = require("./presence_etudiants.service");
const presence_etudiants_controller_1 = require("./presence_etudiants.controller");
const presence_etudiant_entity_1 = require("./entities/presence_etudiant.entity");
let PresenceEtudiantsModule = class PresenceEtudiantsModule {
};
PresenceEtudiantsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([presence_etudiant_entity_1.PresenceEtudiant])],
        controllers: [presence_etudiants_controller_1.PresenceEtudiantsController],
        providers: [presence_etudiants_service_1.PresenceEtudiantsService]
    })
], PresenceEtudiantsModule);
exports.PresenceEtudiantsModule = PresenceEtudiantsModule;
//# sourceMappingURL=presence_etudiants.module.js.map