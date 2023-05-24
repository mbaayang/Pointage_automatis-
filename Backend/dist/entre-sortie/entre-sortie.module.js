"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntreSortieModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entre_sortie_service_1 = require("./entre-sortie.service");
const entre_sortie_controller_1 = require("./entre-sortie.controller");
const entre_sortie_entity_1 = require("./entities/entre-sortie.entity");
let EntreSortieModule = class EntreSortieModule {
};
EntreSortieModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entre_sortie_entity_1.EntreSortie])],
        controllers: [entre_sortie_controller_1.EntreSortieController],
        providers: [entre_sortie_service_1.EntreSortieService]
    })
], EntreSortieModule);
exports.EntreSortieModule = EntreSortieModule;
//# sourceMappingURL=entre-sortie.module.js.map