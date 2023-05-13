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
const typeorm_1 = require("@nestjs/typeorm");
const presence_employe_entity_1 = require("./entities/presence_employe.entity");
const typeorm_2 = require("typeorm");
let PresenceEmployesService = class PresenceEmployesService {
    constructor(presenceEmployeRepository) {
        this.presenceEmployeRepository = presenceEmployeRepository;
    }
    create(createPresenceEmployeDto) {
        return 'This action adds a new presenceEmploye';
    }
    findAll() {
        return this.presenceEmployeRepository.find({ relations: ['employe'] });
    }
    findOne(id) {
        return `This action returns a #${id} presenceEmploye`;
    }
    update(id, updatePresenceEmployeDto) {
        return `This action updates a #${id} presenceEmploye`;
    }
    remove(id) {
        return `This action removes a #${id} presenceEmploye`;
    }
};
PresenceEmployesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(presence_employe_entity_1.PresenceEmploye)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PresenceEmployesService);
exports.PresenceEmployesService = PresenceEmployesService;
//# sourceMappingURL=presence_employes.service.js.map