import { AuthService } from './connexion.service';
import { Employess } from './entities/connexion.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: Employess): Promise<{
        access_token: string;
    }>;
}
