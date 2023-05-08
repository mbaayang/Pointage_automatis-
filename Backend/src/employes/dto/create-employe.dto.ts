import { IsNotEmpty, IsEmail, IsString, Matches } from "class-validator";

export class CreateEmployeDto {
<<<<<<< HEAD
   
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
=======
  @IsString()
  @IsNotEmpty()
  prenom1: string;

  @IsString()
  @IsNotEmpty()
  nom1: string;

  @IsEmail({}, { message: "Adresse e-mail invalide" })
  @Matches(
    new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    ),
    { message: "Format de l'email invalide" }
  )
  email1: string;

  @IsString()
  @IsNotEmpty()
  mot_de_passe: string;

  @IsString()
  @IsNotEmpty()
  matricule1: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  image: string;
}
>>>>>>> origin/MHDLamine
