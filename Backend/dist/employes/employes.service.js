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
exports.EmployesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employe_entity_1 = require("./entities/employe.entity");
const bcrypt = require("bcryptjs");
let EmployesService = class EmployesService {
    constructor(employesRepository) {
        this.employesRepository = employesRepository;
    }
    async create(createEmployeDto) {
        const { prenom, nom, email, mot_de_passe, matricule, role, etat } = createEmployeDto;
        const mail = await this.employesRepository.findOne({ where: { email } });
        if (mail) {
            throw new common_1.UnauthorizedException({ message: "Cet email existe déjà" });
        }
        const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
        const user = await this.employesRepository.save({
            prenom,
            nom,
            email,
            mot_de_passe: hashedPassword,
            matricule,
            role,
            etat
        });
        return user;
    }
    findAll() {
        return `This action returns all employes`;
    }
    findOne(id) {
        return `This action returns a #${id} employe`;
    }
    update(id, updateEmployeDto) {
        return `This action updates a #${id} employe`;
    }
    remove(id) {
        return `This action removes a #${id} employe`;
    }
};
EmployesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employe_entity_1.Employes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployesService);
exports.EmployesService = EmployesService;
//# sourceMappingURL=employes.service.js.map