import { AuthService } from './connexion.service';
import { Employes } from './entities/connexion.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: Employes): Promise<{
        access_token: string;
    }>;
}
