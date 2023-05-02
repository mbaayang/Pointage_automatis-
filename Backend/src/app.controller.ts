import { Controller, Get, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
/* import { TypeOrmService } from "@nestjs/typeorm"; */
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "./connexion/authGuard";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) /*   private readonly typeOrmService: TypeOrmService */
  {}
   @Get("") 
   @UseGuards(JwtAuthGuard)
/*   @Get() */
  getHello(): string {
    return this.appService.getHello();
  }
/* 
  @Get("protected")
  @UseGuards(AuthGuard("jwt"))
  getProtected(): string {
    return "This route is protected";
  } */
}
