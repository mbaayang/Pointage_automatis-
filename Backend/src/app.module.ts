import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { EmployesModule } from './employes/employes.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConnexionModule } from "./connexion/connexion.module";
import { Employess } from "./connexion/entities/connexion.entity";
import { Employes } from "./employes/entities/employe.entity";
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "Pointage",
      entities: [Employes,Employess],
      synchronize: true,
    }),
    EmployesModule,
    ConnexionModule,
    MulterModule.register({
      dest: './images',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
