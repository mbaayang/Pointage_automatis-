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
const platform_express_1 = require("@nestjs/platform-express");
let EtudiantController = class EtudiantController {
    constructor(etudiantService) {
        this.etudiantService = etudiantService;
    }
    async create(photo, createEtudiantDto) {
        const etudiant = await this.etudiantService.create(Object.assign(Object.assign({}, createEtudiantDto), { photo: photo.buffer }));
        return etudiant;
    }
    findAll() {
        return this.etudiantService.findAll();
    }
    update(id, updateEtudiantDto) {
        return this.etudiantService.update(id, updateEtudiantDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_etudiant_dto_1.CreateEtudiantDto]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "findAll", null);
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