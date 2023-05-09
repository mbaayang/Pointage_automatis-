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
exports.EtudiantController = void 0;
const common_1 = require("@nestjs/common");
const etudiant_service_1 = require("./etudiant.service");
const create_etudiant_dto_1 = require("./dto/create-etudiant.dto");
const update_etudiant_dto_1 = require("./dto/update-etudiant.dto");
let EtudiantController = class EtudiantController {
    constructor(etudiantService) {
        this.etudiantService = etudiantService;
    }
    async create(createEtudiantDto, res) {
        const base64Image = createEtudiantDto.photo;
        const fileSizeInBytes = (base64Image.length * 0.75);
        const fileSizeInMb = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMb > 1) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'La taille de l\'image est trop grande.' });
        }
        const emailExists = await this.etudiantService.checkEmailExists(createEtudiantDto.email);
        if (emailExists) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'L\'adresse email existe déjà.' });
        }
        else {
            const etudiant = this.etudiantService.create(createEtudiantDto);
            return res.status(common_1.HttpStatus.OK).json({ message: 'Succes', etudiant });
        }
    }
    findAll() {
        return this.etudiantService.findAll();
    }
    findOne(id) {
        return this.etudiantService.findOne(id);
    }
    update(id, updateEtudiantDto) {
        return this.etudiantService.update(id, updateEtudiantDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_etudiant_dto_1.CreateEtudiantDto, Object]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_etudiant_dto_1.UpdateEtudiantDto]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "update", null);
EtudiantController = __decorate([
    (0, common_1.Controller)('etudiant'),
    __metadata("design:paramtypes", [etudiant_service_1.EtudiantService])
], EtudiantController);
exports.EtudiantController = EtudiantController;
//# sourceMappingURL=etudiant.controller.js.map