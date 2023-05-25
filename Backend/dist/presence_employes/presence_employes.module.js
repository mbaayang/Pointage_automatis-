"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenceEmployesModule = void 0;
const presence_employe_entity_1 = require("./entities/presence_employe.entity");
const presence_etudiant_entity_1 = require("../presence_etudiants/entities/presence_etudiant.entity");
const employe_entity_1 = require("./../employes/entities/employe.entity");
const etudiant_entity_1 = require("../etudiant/entities/etudiant.entity");
const entre_sortie_entity_1 = require("../entre-sortie/entities/entre-sortie.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const presence_employes_service_1 = require("./presence_employes.service");
const presence_employes_controller_1 = require("./presence_employes.controller");
const employes_gateway_1 = require("./employes.gateway");
let PresenceEmployesModule = class PresenceEmployesModule {
};
PresenceEmployesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                employe_entity_1.Employes,
                presence_employe_entity_1.PresenceEmploye,
                presence_etudiant_entity_1.PresenceEtudiant,
                etudiant_entity_1.Etudiant,
                entre_sortie_entity_1.EntreSortie,
            ]),
        ],
        controllers: [presence_employes_controller_1.PresenceEmployesController],
        providers: [employes_gateway_1.UsersGateway, presence_employes_service_1.PresenceEmployesService],
    })
], PresenceEmployesModule);
exports.PresenceEmployesModule = PresenceEmployesModule;
//# sourceMappingURL=presence_employes.module.js.map