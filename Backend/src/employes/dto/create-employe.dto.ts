
import { IsBoolean, IsString } from 'class-validator';

export class CreateEmployeDto {
    @IsString()
    prenom: string;

    @IsString()
    nom: string;

    @IsString()
    email: string;

    @IsString()
    mot_de_passe: string;

    @IsString()
    matricule: string;

    @IsString()
    role: string;

    @IsBoolean()
    etat: boolean;
}


/* export class CreateEmployeDto{
    prenom: string;
    nom: string;
    email: string;
    mot_de_passe: string;
    matricule: string;
    role: string;
    etat: boolean;
    photo: Buffer
} */