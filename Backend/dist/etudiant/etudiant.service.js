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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtudiantService = void 0;
const common_1 = require("@nestjs/common");
const etudiant_entity_1 = require("./entities/etudiant.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let EtudiantService = class EtudiantService {
    constructor(etudiantRepository) {
        this.etudiantRepository = etudiantRepository;
    }
    async checkEmailExists(email) {
        const etudiant = await this.etudiantRepository.findOneBy({ email });
        return !!etudiant;
    }
    create(createEtudiantDto) {
        const newEtudiant = this.etudiantRepository.create(Object.assign(Object.assign({}, createEtudiantDto), { date_inscription: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() }));
        return this.etudiantRepository.save(newEtudiant);
    }
    findAll() {
        return this.etudiantRepository.find();
    }
    update(id, updateEtudiantDto) {
        return this.etudiantRepository.update(id, updateEtudiantDto);
    }
};
EtudiantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(etudiant_entity_1.Etudiant)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EtudiantService);
exports.EtudiantService = EtudiantService;
//# sourceMappingURL=etudiant.service.js.map