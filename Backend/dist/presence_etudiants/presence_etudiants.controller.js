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
exports.PresenceEtudiantsController = void 0;
const common_1 = require("@nestjs/common");
const presence_etudiants_service_1 = require("./presence_etudiants.service");
const update_presence_etudiant_dto_1 = require("./dto/update-presence_etudiant.dto");
let PresenceEtudiantsController = class PresenceEtudiantsController {
    constructor(presenceEtudiantsService) {
        this.presenceEtudiantsService = presenceEtudiantsService;
    }
    findAll() {
        return this.presenceEtudiantsService.findAll();
    }
    findOne(id) {
        return this.presenceEtudiantsService.findOne(+id);
    }
    update(id, updatePresenceEtudiantDto) {
        return this.presenceEtudiantsService.update(+id, updatePresenceEtudiantDto);
    }
    remove(id) {
        return this.presenceEtudiantsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PresenceEtudiantsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PresenceEtudiantsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_presence_etudiant_dto_1.UpdatePresenceEtudiantDto]),
    __metadata("design:returntype", void 0)
], PresenceEtudiantsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PresenceEtudiantsController.prototype, "remove", null);
PresenceEtudiantsController = __decorate([
    (0, common_1.Controller)('presence-etudiants'),
    __metadata("design:paramtypes", [presence_etudiants_service_1.PresenceEtudiantsService])
], PresenceEtudiantsController);
exports.PresenceEtudiantsController = PresenceEtudiantsController;
//# sourceMappingURL=presence_etudiants.controller.js.map