import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./connexion.service";
/* import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy'; */
import { Employess } from "./entities/connexion.entity";
import { AuthController } from "./connexion.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Employess]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || "jwt_secret",
      signOptions: { expiresIn: "60s" },
    }),
  ],
  providers: [AuthService /*  LocalStrategy, JwtStrategy */],
  controllers: [AuthController],
  exports: [AuthService],
})
export class ConnexionModule {}
