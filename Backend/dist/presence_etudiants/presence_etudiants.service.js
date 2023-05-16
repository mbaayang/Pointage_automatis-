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
exports.PresenceEtudiantsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const presence_etudiant_entity_1 = require("./entities/presence_etudiant.entity");
let PresenceEtudiantsService = class PresenceEtudiantsService {
    constructor(presenceEtuRepository) {
        this.presenceEtuRepository = presenceEtuRepository;
    }
<<<<<<< HEAD
=======
    async checkDateExists(date) {
        const presence = await this.presenceEtuRepository.findOneBy({ date });
        return !!presence;
    }
    async checkEmailExists(email) {
        const presence = await this.presenceEtuRepository.findOneBy({ email });
        return !!presence;
    }
    async create(createPresenceEtudiantDto) {
        const h = new Date().getHours();
        const m = new Date().getMinutes();
        const s = new Date().getSeconds();
        let message = "";
        if (h >= 8 && m > 30) {
            message = "Oui";
        }
        else {
            message = "Non";
        }
        const newPresence = this.presenceEtuRepository.create({
            date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
            heure: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
            etat_presence: "En attente",
            etat_retard: message,
            email: createPresenceEtudiantDto.email,
            etudiant: createPresenceEtudiantDto.etudiant
        });
        return await this.presenceEtuRepository.save(newPresence);
    }
>>>>>>> ed1cd8e716050db4e8fd5782b2fd73640cf3b4f2
    findAll() {
        return this.presenceEtuRepository.find({ relations: ['etudiant'] });
    }
    findOne(id) {
        return `This action returns a #${id} presenceEtudiant`;
    }
    update(id, updatePresenceEtudiantDto) {
        return this.presenceEtuRepository.update(id, updatePresenceEtudiantDto);
    }
    remove(id) {
        return `This action removes a #${id} presenceEtudiant`;
    }
};
PresenceEtudiantsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(presence_etudiant_entity_1.PresenceEtudiant)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PresenceEtudiantsService);
exports.PresenceEtudiantsService = PresenceEtudiantsService;
//# sourceMappingURL=presence_etudiants.service.js.map