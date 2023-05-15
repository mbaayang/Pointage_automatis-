import { PresenceEmploye } from './entities/presence_employe.entity';
import { PresenceEtudiant } from "src/presence_etudiants/entities/presence_etudiant.entity";
import { Employes } from './../employes/entities/employe.entity';
import { Etudiant } from "src/etudiant/entities/etudiant.entity";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresenceEmployesService } from './presence_employes.service';
import { PresenceEmployesController } from './presence_employes.controller';
import { UsersGateway } from './employes.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Employes, PresenceEmploye, PresenceEtudiant, Etudiant]),],
  controllers: [PresenceEmployesController],
  providers: [UsersGateway, PresenceEmployesService]
})
export class PresenceEmployesModule {}
