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
const bcrypt = require("bcrypt");
let EmployesService = class EmployesService {
    constructor(employesRepository) {
        this.employesRepository = employesRepository;
    }
    async checkEmailExists(email) {
        const employe = await this.employesRepository.findOneBy({ email });
        return !!employe;
    }
    async create(createEmployeDto) {
        const mot_de_passe = createEmployeDto.mot_de_passe;
        const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
        const newEmploye = this.employesRepository.create({
            prenom: createEmployeDto.prenom,
            nom: createEmployeDto.nom,
            email: createEmployeDto.email,
            mot_de_passe: hashedPassword,
            role: createEmployeDto.role,
            matricule: createEmployeDto.matricule,
            image: createEmployeDto.image,
            date_inscription: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
        });
        return await this.employesRepository.save(newEmploye);
    }
    async findAll() {
        return await this.employesRepository.find({});
    }
    async findOne(id) {
        return await this.employesRepository.findOneById(id);
    }
    update(id, updateEmployeDto) {
        return this.employesRepository.update(id, updateEmployeDto);
    }
    async remove(id) {
        await this.employesRepository.delete(id);
    }
    async updatePassword(email, updatePassword) {
        const user = await this.employesRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const isPasswordValid = await bcrypt.compare(updatePassword.mot_de_passe, user.mot_de_passe);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException("Le mot de passe est incorrect");
        }
        const hashedNewPassword = await bcrypt.hash(updatePassword.NewPassword, 10);
        user.mot_de_passe = hashedNewPassword;
        await this.employesRepository.save(user);
        throw new common_1.BadRequestException("reussi");
    }
};
EmployesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employe_entity_1.Employes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployesService);
exports.EmployesService = EmployesService;
//# sourceMappingURL=employes.service.js.map