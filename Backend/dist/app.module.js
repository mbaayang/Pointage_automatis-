"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const employes_module_1 = require("./employes/employes.module");
const typeorm_1 = require("@nestjs/typeorm");
const connexion_module_1 = require("./connexion/connexion.module");
const employe_entity_1 = require("./employes/entities/employe.entity");
const etudiant_module_1 = require("./etudiant/etudiant.module");
const etudiant_entity_1 = require("./etudiant/entities/etudiant.entity");
const presence_employes_module_1 = require("./presence_employes/presence_employes.module");
const presence_etudiants_module_1 = require("./presence_etudiants/presence_etudiants.module");
const presence_employe_entity_1 = require("./presence_employes/entities/presence_employe.entity");
const presence_etudiant_entity_1 = require("./presence_etudiants/entities/presence_etudiant.entity");
const reset_module_1 = require("./reset/reset.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "",
                database: "Pointage",
                entities: [employe_entity_1.Employes, etudiant_entity_1.Etudiant, presence_employe_entity_1.PresenceEmploye, presence_etudiant_entity_1.PresenceEtudiant],
                synchronize: true,
            }),
            employes_module_1.EmployesModule,
            etudiant_module_1.EtudiantModule,
            connexion_module_1.ConnexionModule,
            presence_employes_module_1.PresenceEmployesModule,
            presence_etudiants_module_1.PresenceEtudiantsModule,
            reset_module_1.ResetModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map