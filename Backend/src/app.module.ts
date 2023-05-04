import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { EmployesModule } from './employes/employes.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConnexionModule } from "./connexion/connexion.module";
import { Employes } from "./employes/entities/employe.entity";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { MulterModule } from '@nestjs/platform-express';
>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
=======
import { MulterModule } from '@nestjs/platform-express';
>>>>>>> c26bb86238b2ac777b068efb6ddef89d33c5e28d
import { EtudiantModule } from './etudiant/etudiant.module';
import { Etudiant } from './typeorm/entities/Etudiant';
import { FormModule } from './form/form.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "Pointage",
<<<<<<< HEAD
<<<<<<< HEAD
      entities: [Employes, Etudiant],
      synchronize: false,
=======
      entities: [Employes],
      synchronize: true,
>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
=======
      entities: [Employes, Etudiant],
      synchronize: false,
>>>>>>> c26bb86238b2ac777b068efb6ddef89d33c5e28d
    }),
    EmployesModule,
    EtudiantModule,
    ConnexionModule,
    EtudiantModule,
    FormModule,
  ],
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
=======
  

>>>>>>> c26bb86238b2ac777b068efb6ddef89d33c5e28d
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
