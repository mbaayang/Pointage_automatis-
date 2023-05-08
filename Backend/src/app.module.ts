import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EmployesModule } from './employes/employes.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConnexionModule } from "./connexion/connexion.module";
import { Employes } from "./employes/entities/employe.entity";
import { EtudiantModule } from './etudiant/etudiant.module';
import { Etudiant } from './etudiant/entities/etudiant.entity';
import { PresenceEmployesModule } from './presence_employes/presence_employes.module';
import { PresenceEtudiantsModule } from './presence_etudiants/presence_etudiants.module';
import { PresenceEmploye } from "./presence_employes/entities/presence_employe.entity";
import { PresenceEtudiant } from "./presence_etudiants/entities/presence_etudiant.entity";



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "Pointage",
      entities: [Employes, Etudiant, PresenceEmploye, PresenceEtudiant],
      synchronize: true,
    }),
    EmployesModule,
    EtudiantModule,
    ConnexionModule,
    PresenceEmployesModule,
    PresenceEtudiantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
