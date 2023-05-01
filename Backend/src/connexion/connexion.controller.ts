import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './connexion.service';
import { Employess } from './entities/connexion.entity';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth')
  async login(@Body() user: Employess): Promise<{ access_token: string }> {
    const validatedUser = await this.authService.validateUser(user.email, user.password);
    if (!validatedUser) {
     /*  throw new Error('Invalid credentials'); */

    throw new UnauthorizedException({ message: "Mot de passe invalide" });
    }
    return this.authService.login(validatedUser);
  }
}
 