import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { EmployesModule } from './employes/employes.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConnexionModule } from "./connexion/connexion.module";
import { Employes } from "./employes/entities/employe.entity";
<<<<<<< HEAD
=======
import { MulterModule } from '@nestjs/platform-express';
>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
import { EtudiantModule } from './etudiant/etudiant.module';
import { Etudiant } from './typeorm/entities/Etudiant';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "Pointage",
<<<<<<< HEAD
      entities: [Employes, Etudiant],
      synchronize: false,
=======
      entities: [Employes],
      synchronize: true,
>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
    }),
    EmployesModule,
    EtudiantModule,
    ConnexionModule,
    EtudiantModule,
  ],
<<<<<<< HEAD
=======

>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
