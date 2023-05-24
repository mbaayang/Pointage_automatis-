import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntreSortieService } from './entre-sortie.service';
import { EntreSortieController } from './entre-sortie.controller';
import { EntreSortie } from './entities/entre-sortie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntreSortie])],
  controllers: [EntreSortieController],
  providers: [EntreSortieService]
})
export class EntreSortieModule {}
