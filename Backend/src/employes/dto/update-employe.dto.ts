import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeDto } from './create-employe.dto';

export class UpdateEmployeDto extends PartialType(CreateEmployeDto) {
    readonly id_employe: number
    readonly prenom: string;
    readonly nom: string;
    readonly email: string;
    readonly role: string;

}
