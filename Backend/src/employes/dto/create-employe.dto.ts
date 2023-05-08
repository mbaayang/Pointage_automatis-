import { IsNotEmpty, IsEmail, IsString, Matches } from "class-validator";

export class CreateEmployeDto {
   
    prenom: string;

    nom: string;

    email: string;

    mot_de_passe: string;

    matricule: string;

    role: string;

    image: string;

    date_inscription: string;

    etat: boolean;
}
