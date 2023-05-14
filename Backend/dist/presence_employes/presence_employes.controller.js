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
exports.PresenceEmployesController = void 0;
const common_1 = require("@nestjs/common");
const presence_employes_service_1 = require("./presence_employes.service");
const create_presence_employe_dto_1 = require("./dto/create-presence_employe.dto");
const update_presence_employe_dto_1 = require("./dto/update-presence_employe.dto");
const presence_employe_entity_1 = require("./entities/presence_employe.entity");
let PresenceEmployesController = class PresenceEmployesController {
    constructor(presenceEmployesService) {
        this.presenceEmployesService = presenceEmployesService;
    }
    async create(createPresenceEmployeDto, res) {
        const dateExists = await this.presenceEmployesService.checkDateExists(createPresenceEmployeDto.date);
        const idExists = await this.presenceEmployesService.checkEmailExists(createPresenceEmployeDto.email);
        if (dateExists && idExists) {
            console.log(idExists);
            console.log(dateExists);
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Vous avez déjà badgé' });
        }
        else {
            const employe = this.presenceEmployesService.create(createPresenceEmployeDto);
            return res.status(common_1.HttpStatus.OK).json({ message: 'Succes', employe });
        }
    }
    findAll() {
        return this.presenceEmployesService.findAll();
    }
    findOne(id) {
        return this.presenceEmployesService.findOne(id);
    }
    update(id, updatePresenceEmployeDto) {
        return this.presenceEmployesService.update(+id, updatePresenceEmployeDto);
    }
    remove(id) {
        return this.presenceEmployesService.remove(+id);
    }
    async login(user) {
        const validatedUser = await this.presenceEmployesService.validateUser(user.email);
        if (!validatedUser) {
            throw new common_1.UnauthorizedException({ message: "Employé inéxistant" });
        }
        return this.presenceEmployesService.login(validatedUser);
    }
};
__decorate([
    (0, common_1.Post)('presence'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_presence_employe_dto_1.CreatePresenceEmployeDto, Object]),
    __metadata("design:returntype", Promise)
], PresenceEmployesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PresenceEmployesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PresenceEmployesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_presence_employe_dto_1.UpdatePresenceEmployeDto]),
    __metadata("design:returntype", void 0)
], PresenceEmployesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PresenceEmployesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [presence_employe_entity_1.PresenceEmploye]),
    __metadata("design:returntype", Promise)
], PresenceEmployesController.prototype, "login", null);
PresenceEmployesController = __decorate([
    (0, common_1.Controller)('presence-employes'),
    __metadata("design:paramtypes", [presence_employes_service_1.PresenceEmployesService])
], PresenceEmployesController);
exports.PresenceEmployesController = PresenceEmployesController;
//# sourceMappingURL=presence_employes.controller.js.map