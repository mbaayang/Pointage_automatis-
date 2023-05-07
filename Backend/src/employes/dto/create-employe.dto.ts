
import { IsNotEmpty, IsEmail, IsString, Matches } from "class-validator";

export class CreateEmployeDto {
    @IsString()
    @IsNotEmpty()
    prenom: string;

    @IsString()
    @IsNotEmpty()
    nom: string;

    @IsEmail({}, {message: 'Adresse e-mail invalide'})
    @Matches(
        new RegExp(
            "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
          ),
          { message: "Format de l'email invalide" },
    )
    email: string;

    @IsString()
    @IsNotEmpty()
    mot_de_passe: string;

    @IsString()
    @IsNotEmpty()
    matricule: string;

    @IsNotEmpty()
    role: string;

    @IsNotEmpty()
    image: string;
}