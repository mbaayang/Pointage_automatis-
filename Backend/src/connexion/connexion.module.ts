import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./connexion.service";
import { Employes } from "../employes/entities/employe.entity";
import { AuthController } from "./connexion.controller";
import { JwtStrategy } from "./jwtStrategy";

@Module({
  imports: [
    TypeOrmModule.forFeature([Employes]),
    PassportModule,
    JwtModule.register({
      secret:/*  process.env.JWT_SECRET ||  */"secretKey",
      signOptions: { expiresIn: "3600s" },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class ConnexionModule {}
