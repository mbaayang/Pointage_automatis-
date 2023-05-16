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
exports.ResetController = void 0;
const common_1 = require("@nestjs/common");
const reset_service_1 = require("./reset.service");
let ResetController = class ResetController {
    constructor(resetService) {
        this.resetService = resetService;
    }
    async sendEmail(to, res) {
        if (!(await this.resetService.emeilExists(to))) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: "L'adresse email n'existe pas.",
            });
        }
        else if (!(await this.resetService.isEmailStateTrue(to))) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: "Le compte est archivé.",
            });
        }
        else {
            await this.resetService.sendEmail(to);
            return res.status(common_1.HttpStatus.OK).json({
                message: "Un code de vérification vous a été envoyé par email.",
            });
        }
    }
    async exempleRoute(code, password, email) {
        await this.resetService.sendResponse(code, password, email);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)("to")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ResetController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Post)("code"),
    __param(0, (0, common_1.Body)("code")),
    __param(1, (0, common_1.Body)("password")),
    __param(2, (0, common_1.Body)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ResetController.prototype, "exempleRoute", null);
ResetController = __decorate([
    (0, common_1.Controller)("reset"),
    __metadata("design:paramtypes", [reset_service_1.ResetService])
], ResetController);
exports.ResetController = ResetController;
//# sourceMappingURL=reset.controller.js.map