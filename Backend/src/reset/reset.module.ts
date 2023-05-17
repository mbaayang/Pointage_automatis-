import { Module } from '@nestjs/common';
import { ResetService } from './reset.service';
import { ResetController } from './reset.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employes } from 'src/employes/entities/employe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employes])],
  controllers: [ResetController],
  providers: [ResetService]
})
export class ResetModule {}
