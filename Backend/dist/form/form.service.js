"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormService = void 0;
const common_1 = require("@nestjs/common");
let FormService = class FormService {
    create(createFormDto) {
        return 'This action adds a new form';
    }
    findAll() {
        return `This action returns all form`;
    }
    findOne(id) {
        return `This action returns a #${id} form`;
    }
    update(id, updateFormDto) {
        return `This action updates a #${id} form`;
    }
    remove(id) {
        return `This action removes a #${id} form`;
    }
};
FormService = __decorate([
    (0, common_1.Injectable)()
], FormService);
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map