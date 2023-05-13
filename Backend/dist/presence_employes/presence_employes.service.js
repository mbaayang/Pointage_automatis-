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
exports.PresenceEmployesService = void 0;
const common_1 = require("@nestjs/common");
<<<<<<< HEAD
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const presence_employe_entity_1 = require("./entities/presence_employe.entity");
let PresenceEmployesService = class PresenceEmployesService {
    constructor(presenceRepository) {
        this.presenceRepository = presenceRepository;
    }
    async checkDateExists(date) {
        const presence = await this.presenceRepository.findOneBy({ date });
        return !!presence;
    }
    async checkEmailExists(email) {
        const presence = await this.presenceRepository.findOneBy({ email });
        return !!presence;
    }
    async create(createPresenceEmployeDto) {
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
        const newPresence = this.presenceRepository.create({
            date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
            heure_arrivée: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
            heure_sortie: "- -",
            etat_retard: message,
            email: createPresenceEmployeDto.email,
            employe: createPresenceEmployeDto.employe
        });
        return await this.presenceRepository.save(newPresence);
=======
const typeorm_1 = require("@nestjs/typeorm");
const presence_employe_entity_1 = require("./entities/presence_employe.entity");
const typeorm_2 = require("typeorm");
let PresenceEmployesService = class PresenceEmployesService {
    constructor(presenceEmployeRepository) {
        this.presenceEmployeRepository = presenceEmployeRepository;
    }
    create(createPresenceEmployeDto) {
        return 'This action adds a new presenceEmploye';
>>>>>>> e9693c633b446b4ca757f22da9186212c43c0512
    }
    findAll() {
        return this.presenceEmployeRepository.find({ relations: ['employe'] });
    }
    findOne(email) {
        const user = this.presenceRepository.findOne({ where: { email } });
        return user;
    }
    update(id, updatePresenceEmployeDto) {
        return this.presenceRepository.update(id, updatePresenceEmployeDto);
    }
    remove(id) {
        return `This action removes a #${id} presenceEmploye`;
    }
    async validateUser(email) {
        const user = await this.presenceRepository.findOne({ where: { email } });
        if (user) {
            return user;
        }
    }
    async login(user) {
        const payload = { email: user.email, sub: user.id };
        const id = user.id;
        const email = user.email;
        return {
            id: id,
            email: email,
        };
    }
};
PresenceEmployesService = __decorate([
    (0, common_1.Injectable)(),
<<<<<<< HEAD
    __param(0, (0, typeorm_2.InjectRepository)(presence_employe_entity_1.PresenceEmploye)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
=======
    __param(0, (0, typeorm_1.InjectRepository)(presence_employe_entity_1.PresenceEmploye)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
>>>>>>> e9693c633b446b4ca757f22da9186212c43c0512
], PresenceEmployesService);
exports.PresenceEmployesService = PresenceEmployesService;
//# sourceMappingURL=presence_employes.service.js.map