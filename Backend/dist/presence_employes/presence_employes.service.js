"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenceEmployesService = void 0;
const common_1 = require("@nestjs/common");
let PresenceEmployesService = class PresenceEmployesService {
    create(createPresenceEmployeDto) {
        return 'This action adds a new presenceEmploye';
    }
    findAll() {
        return `This action returns all presenceEmployes`;
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
    (0, common_1.Injectable)()
], PresenceEmployesService);
exports.PresenceEmployesService = PresenceEmployesService;
//# sourceMappingURL=presence_employes.service.js.map