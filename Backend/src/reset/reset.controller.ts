import { Controller, Post, Body, Res, HttpStatus } from "@nestjs/common";
import { ResetService } from "./reset.service";

@Controller("reset")
export class ResetController {
  constructor(private readonly resetService: ResetService) {}

  @Post()
  async sendEmail(@Body("to") to: string, @Res() res): Promise<void> {
    if (!(await this.resetService.emeilExists(to))) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: "L'adresse email n'existe pas.",
      });
    }else if(!(await this.resetService.isEmailStateTrue(to))){
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: "Le compte est archivé.",
      });
    }
    else{
      await this.resetService.sendEmail(to);
      return res.status(HttpStatus.OK).json({
        message: "Un code de vérification vous a été envoyé par email.",
      });
    }
  }

  @Post("code")
  async sendResponse(
    @Body("code") code: string,
    @Body("newPassword") newPassword: string,
    @Body("email") email: string
  ): Promise<any | null> {
    // Récupérez le texte à partir du corps de la requête
    await this.resetService.sendResponse(code, newPassword, email);
  }
}
