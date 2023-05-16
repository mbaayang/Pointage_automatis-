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
exports.ResetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nodemailer = require("nodemailer");
const employe_entity_1 = require("../employes/entities/employe.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let ResetService = class ResetService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.cle = "1hleQjg4cdi@klo9u0";
        this.code = "";
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "mouhamedlamine.ngom@unchk.edu.sn",
                pass: this.cle[4] +
                    this.cle[8] +
                    this.cle[16] +
                    this.cle[10] +
                    this.cle[12] +
                    this.cle[11] +
                    this.cle[0] +
                    this.cle[7] +
                    this.cle[17] +
                    this.cle[15],
            },
        });
    }
    async sendEmail(to) {
        const email = to;
        const user = await this.userRepository.findOne({ where: { email } });
        if (user && user.etat) {
            const min = 0;
            const max = 99999;
            const randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
            const code = await bcrypt.hash(randomNumber, 10);
            this.userRepository.update(user.id, { secretKey: code });
            const mailOptions = {
                from: "mouhamedlamine.ngom@unchk.edu.sn",
                to,
                subject: "Reinitialiser mot de passe",
                text: ` Reinitialiser votre mot de passe avec le code : ${randomNumber}`,
            };
            try {
                await this.transporter.sendMail(mailOptions);
                console.log("Email sent successfully");
            }
            catch (error) {
                console.error("Error sending email:", error);
            }
        }
        else {
            throw new common_1.UnauthorizedException({
                correct: false,
                message: "Le compte n'existe plus dans la base de donnée",
            });
        }
    }
    async sendResponse(code, password, email) {
        const user = await this.userRepository.findOne({ where: { email } });
        const valid = await bcrypt.compare(code, user.secretKey);
        if (!valid) {
            throw new common_1.NotFoundException("User not found");
        }
        else {
            console.log("exact tu peut modifier le mot de passe");
        }
    }
};
ResetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employe_entity_1.Employes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ResetService);
exports.ResetService = ResetService;
//# sourceMappingURL=reset.service.js.map