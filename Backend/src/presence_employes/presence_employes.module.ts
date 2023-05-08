import { PresenceEmploye } from './entities/presence_employe.entity';
import { Employes } from './../employes/entities/employe.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresenceEmployesService } from './presence_employes.service';
import { PresenceEmployesController } from './presence_employes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PresenceEmploye])],
  controllers: [PresenceEmployesController],
  providers: [PresenceEmployesService]
})
export class PresenceEmployesModule {}
