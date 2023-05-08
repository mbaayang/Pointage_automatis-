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
exports.EmployesController = void 0;
const common_1 = require("@nestjs/common");
const employes_service_1 = require("./employes.service");
const create_employe_dto_1 = require("./dto/create-employe.dto");
const update_employe_dto_1 = require("./dto/update-employe.dto");
const updatePassword_dto_1 = require("./dto/updatePassword.dto");
let EmployesController = class EmployesController {
    constructor(employesService) {
        this.employesService = employesService;
    }
    async create(createEmployeDto, res) {
        const base64Image = createEmployeDto.image;
        const fileSizeInBytes = (base64Image.length * 0.75);
        const fileSizeInMb = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMb > 1) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'La taille de l\'image est trop grande.' });
        }
        const emailExists = await this.employesService.checkEmailExists(createEmployeDto.email);
        if (emailExists) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'L\'adresse email existe déjà.' });
        }
        else {
            const employe = this.employesService.create(createEmployeDto);
            return res.status(common_1.HttpStatus.OK).json({ message: 'Succes', employe });
        }
    }
    findAll() {
        return this.employesService.findAll();
    }
    findOne(id) {
        return this.employesService.findOne(+id);
    }
    update(id, updateEmployeDto) {
        return this.employesService.update(+id, updateEmployeDto);
    }
    async updatePassword(email1, updatePasswordDto) {
        await this.employesService.updatePassword(email1, updatePasswordDto);
    }
    remove(id) {
        return this.employesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employe_dto_1.CreateEmployeDto, Object]),
    __metadata("design:returntype", Promise)
], EmployesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_employe_dto_1.UpdateEmployeDto]),
    __metadata("design:returntype", void 0)
], EmployesController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)("password/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updatePassword_dto_1.UpdatePasswordDto]),
    __metadata("design:returntype", Promise)
], EmployesController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployesController.prototype, "remove", null);
EmployesController = __decorate([
    (0, common_1.Controller)('employes'),
    __metadata("design:paramtypes", [employes_service_1.EmployesService])
], EmployesController);
exports.EmployesController = EmployesController;
//# sourceMappingURL=employes.controller.js.map