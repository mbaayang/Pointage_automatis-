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
const config_1 = require("@nestjs/config");
const employes_module_1 = require("./employes/employes.module");
const typeorm_1 = require("@nestjs/typeorm");
const connexion_module_1 = require("./connexion/connexion.module");
const employe_entity_1 = require("./employes/entities/employe.entity");
const etudiant_module_1 = require("./etudiant/etudiant.module");
<<<<<<< HEAD
<<<<<<< HEAD
const Etudiant_1 = require("./typeorm/entities/Etudiant");
=======
>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
=======
const Etudiant_1 = require("./typeorm/entities/Etudiant");
const form_module_1 = require("./form/form.module");
>>>>>>> c26bb86238b2ac777b068efb6ddef89d33c5e28d
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "",
                database: "Pointage",
<<<<<<< HEAD
<<<<<<< HEAD
                entities: [employe_entity_1.Employes, Etudiant_1.Etudiant],
                synchronize: false,
=======
                entities: [employe_entity_1.Employes],
                synchronize: true,
>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
=======
                entities: [employe_entity_1.Employes, Etudiant_1.Etudiant],
                synchronize: false,
>>>>>>> c26bb86238b2ac777b068efb6ddef89d33c5e28d
            }),
            employes_module_1.EmployesModule,
            etudiant_module_1.EtudiantModule,
            connexion_module_1.ConnexionModule,
<<<<<<< HEAD
<<<<<<< HEAD
=======
            etudiant_module_1.EtudiantModule,
>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
=======
            etudiant_module_1.EtudiantModule,
            form_module_1.FormModule,
>>>>>>> c26bb86238b2ac777b068efb6ddef89d33c5e28d
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map