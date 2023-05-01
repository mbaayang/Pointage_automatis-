import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { Employess } from "./entities/connexion.entity";
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<Employess>, jwtService: JwtService);
    validateUser(email: string, mot_de_passe: string): Promise<Employess | null>;
    login(user: Employess): Promise<{
        access_token: string;
        id: number;
        role: string;
    }>;
}
