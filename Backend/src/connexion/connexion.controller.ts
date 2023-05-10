import { Controller, Post, Body, UnauthorizedException, Req, UseGuards, Get} from '@nestjs/common';
import { AuthService } from './connexion.service';
import { Employes } from '../employes/entities/employe.entity';
import { JwtAuthGuard } from './authGuard';


type RequestWithUser =  { user: Partial<Employes> };

@Controller()
export class AuthController {
  connexionService: any;
  constructor(private readonly authService: AuthService) {}

  @Post('auth')
  async login(@Body() user: Employes): Promise<{ access_token: string }> {
    const validatedUser = await this.authService.validateUser(user.email, user.mot_de_passe);
    if (!validatedUser) {
 
    throw new UnauthorizedException({ message: "connect toi" });
    } 
    return this.authService.login(validatedUser);
  }
  

}
 