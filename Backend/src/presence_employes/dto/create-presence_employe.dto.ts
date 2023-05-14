import { IsNumber, IsString } from "class-validator";

export class CreatePresenceEmployeDto {
    @IsString()
    date: string;

    @IsString()
    heure: string;

    @IsString()
    etat_presence: string;

    @IsString()
    etat_retard: string;

    @IsNumber()
    employe: number;

    @IsString()
    email: string;
}
