import { PartialType } from '@nestjs/mapped-types';
import { CreateEntreSortieDto } from './create-entre-sortie.dto';

export class UpdateEntreSortieDto extends PartialType(CreateEntreSortieDto) {}
