import { AuthService } from './connexion.service';
import { Employes } from '../employes/entities/employe.entity';
export declare class AuthController {
    private readonly authService;
    connexionService: any;
    constructor(authService: AuthService);
    login(user: Employes): Promise<{
        access_token: string;
    }>;
}
