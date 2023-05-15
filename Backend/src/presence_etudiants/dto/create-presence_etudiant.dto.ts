import { IsNumber, IsString } from "class-validator";

export class CreatePresenceEtudiantDto {
    @IsString()
    date: string;

    @IsString()
    heure: string;

    @IsString()
    etat_presence: string;

    @IsString()
    etat_retard: string;

    @IsNumber()
    etudiant: number;

    @IsString()
    email: string;
}
