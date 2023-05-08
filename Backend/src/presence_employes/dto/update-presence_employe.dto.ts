import { PartialType } from '@nestjs/mapped-types';
import { CreatePresenceEmployeDto } from './create-presence_employe.dto';

export class UpdatePresenceEmployeDto extends PartialType(CreatePresenceEmployeDto) {}
