import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresenceEtudiantsService } from './presence_etudiants.service';
import { PresenceEtudiantsController } from './presence_etudiants.controller';
import { PresenceEtudiant } from './entities/presence_etudiant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PresenceEtudiant])],
  controllers: [PresenceEtudiantsController],
  providers: [PresenceEtudiantsService]
})
export class PresenceEtudiantsModule {}
