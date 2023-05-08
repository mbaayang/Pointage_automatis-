import { IsNotEmpty, IsEmail, IsString, Matches } from "class-validator";
export class CreateEtudiantDto {
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

    @IsNotEmpty()
    matricule: string;

    @IsNotEmpty()
    niveau: string;

    @IsNotEmpty()
    photo: string;
}
