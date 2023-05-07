import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { Employes } from "../employes/entities/employe.entity";
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<Employes>, jwtService: JwtService);
    validateUser(email: string, mot_de_passe: string): Promise<Employes | null>;
    login(user: Employes): Promise<{
        access_token: string;
        id_employe: number;
        role: string;
        prenom: string;
        nom: string;
        email: string;
    }>;
}
