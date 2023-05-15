import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employes } from "../employes/entities/employe.entity";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Employes)
    private readonly userRepository: Repository<Employes>,
    private readonly jwtService: JwtService
  ) {}
  //avant erreur
  /* 
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  } */
  async validateUser(
    email: string,
    mot_de_passe: string
  ): Promise<Employes | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      if (user && (await bcrypt.compare(mot_de_passe, user.mot_de_passe))) {
        const etat = user.etat;
        if (etat == false) {
          throw new UnauthorizedException({
            correct: false,
            message: "compte archivé",
          });
        } else {
          return user;
        }
      } else {
        throw new UnauthorizedException({
          correct: false,
          message: "Mot de passe invalide",
        });
      }
    } else {
      throw new UnauthorizedException({
        correct: false,
        message: "Adresse email invalide",
      });
    }
  }

  async login(
    user: Employes
  ): Promise<{ access_token: string; id: number; role: string; prenom: string; nom: string; email: string; image: string; }> {
    const payload = { email: user.email, sub: user.id };
    const id = user.id;
    const role = user.role;
    const prenom = user.prenom;
    const nom = user.nom;
    const email = user.email;
    const image = user.image;
    //const matricule = user.matricule;
    return {
      access_token: this.jwtService.sign(payload),
      id: id,
      role: role,
      prenom: prenom,
      nom: nom,
      email: email,
      image: image,
      //matricule: matricule,
    };
  }
}
