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
exports.EntreSortieController = void 0;
const common_1 = require("@nestjs/common");
const entre_sortie_service_1 = require("./entre-sortie.service");
const create_entre_sortie_dto_1 = require("./dto/create-entre-sortie.dto");
const update_entre_sortie_dto_1 = require("./dto/update-entre-sortie.dto");
let EntreSortieController = class EntreSortieController {
    constructor(entreSortieService) {
        this.entreSortieService = entreSortieService;
    }
    create(createEntreSortieDto) {
        return this.entreSortieService.create(createEntreSortieDto);
    }
    findAll() {
        return this.entreSortieService.findAll();
    }
    findOne(id) {
        return this.entreSortieService.findOne(+id);
    }
    update(id, updateEntreSortieDto) {
        return this.entreSortieService.update(+id, updateEntreSortieDto);
    }
    remove(id) {
        return this.entreSortieService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entre_sortie_dto_1.CreateEntreSortieDto]),
    __metadata("design:returntype", void 0)
], EntreSortieController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntreSortieController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntreSortieController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_entre_sortie_dto_1.UpdateEntreSortieDto]),
    __metadata("design:returntype", void 0)
], EntreSortieController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntreSortieController.prototype, "remove", null);
EntreSortieController = __decorate([
    (0, common_1.Controller)('entre-sortie'),
    __metadata("design:paramtypes", [entre_sortie_service_1.EntreSortieService])
], EntreSortieController);
exports.EntreSortieController = EntreSortieController;
//# sourceMappingURL=entre-sortie.controller.js.map