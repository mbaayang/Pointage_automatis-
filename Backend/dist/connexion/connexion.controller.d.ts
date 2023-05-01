import { AuthService } from './connexion.service';
import { Employes } from './entities/connexion.entity';
type RequestWithUser = {
    user: Partial<Employes>;
};
export declare class AuthController {
    private readonly authService;
    connexionService: any;
    constructor(authService: AuthService);
    login(user: Employes): Promise<{
        access_token: string;
    }>;
    profile(request: RequestWithUser): Partial<Employes>;
}
export {};
