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
    async create(createEtudiantDto) {
        const { prenom, nom, email, matricule, niveau } = createEtudiantDto;
        const existingEtudiant = await this.etudiantRepository.findOneBy({ email });
        if (existingEtudiant) {
            throw new common_1.ConflictException('Adresse e-mail déjà prise');
        }
        const etudiant = new etudiant_entity_1.Etudiant();
        etudiant.prenom = createEtudiantDto.prenom;
        etudiant.nom = createEtudiantDto.nom;
        etudiant.email = createEtudiantDto.email;
        etudiant.matricule = createEtudiantDto.matricule;
        etudiant.niveau = createEtudiantDto.niveau;
        etudiant.photo = createEtudiantDto.photo;
        etudiant.date_inscription = new Date();
        return await this.etudiantRepository.save(etudiant);
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