import { Controller, Post, Body, Res } from "@nestjs/common";
import { ResetService } from "./reset.service";

@Controller("reset")
export class ResetController {
  constructor(private readonly resetService: ResetService) {}

  @Post()
  async sendEmail(@Body("to") to: string): Promise<void> {
    await this.resetService.sendEmail(to);
  }

  @Post("code")
  async exempleRoute(
    @Body("code") code: string,
    @Body("password") password: string,
    @Body("email") email: string
  ): Promise<any | null> {
    // Récupérez le texte à partir du corps de la requête
    await this.resetService.sendResponse(code, password, email);
  }
}
