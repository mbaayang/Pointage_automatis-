import { Controller, Post, Body, UnauthorizedException, Req, UseGuards, Get} from '@nestjs/common';
import { AuthService } from './connexion.service';
import { Employes } from './entities/connexion.entity';
import { JwtAuthGuard } from './authGuard';
import { get } from 'http';


@Controller()
export class AuthController {
  connexionService: any;
  constructor(private readonly authService: AuthService) {}

  @Post('auth')
  async login(@Body() user: Employes): Promise<{ access_token: string }> {
    const validatedUser = await this.authService.validateUser(user.email, user.password);
    if (!validatedUser) {
 
    throw new UnauthorizedException({ message: "connect toi" });
    } 
    return this.authService.login(validatedUser);
  }

}
 