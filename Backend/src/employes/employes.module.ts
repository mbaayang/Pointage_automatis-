import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployesService } from './employes.service';
import { EmployesController } from './employes.controller';
import { Employes } from './entities/employe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employes])],
  controllers: [EmployesController],
  providers: [EmployesService]
})
export class EmployesModule {}
