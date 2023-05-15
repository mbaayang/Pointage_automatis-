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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employe_entity_1 = require("../employes/entities/employe.entity");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async validateUser(email, mot_de_passe) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (user) {
            if (user && (await bcrypt.compare(mot_de_passe, user.mot_de_passe))) {
                const etat = user.etat;
                if (etat == false) {
                    throw new common_1.UnauthorizedException({
                        correct: false,
                        message: "compte archivé",
                    });
                }
                else {
                    return user;
                }
            }
            else {
                throw new common_1.UnauthorizedException({
                    correct: false,
                    message: "Mot de passe invalide",
                });
            }
        }
        else {
            throw new common_1.UnauthorizedException({
                correct: false,
                message: "Adresse email invalide",
            });
        }
    }
    async login(user) {
        const payload = { email: user.email, sub: user.id };
        const id = user.id;
        const role = user.role;
        const prenom = user.prenom;
        const nom = user.nom;
        const email = user.email;
        const image = user.image;
        return {
            access_token: this.jwtService.sign(payload),
            id: id,
            role: role,
            prenom: prenom,
            nom: nom,
            email: email,
            image: image,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employe_entity_1.Employes)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=connexion.service.js.map