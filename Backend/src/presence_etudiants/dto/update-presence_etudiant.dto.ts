import { PartialType } from '@nestjs/mapped-types';
import { CreatePresenceEtudiantDto } from './create-presence_etudiant.dto';

export class UpdatePresenceEtudiantDto extends PartialType(CreatePresenceEtudiantDto) {}
