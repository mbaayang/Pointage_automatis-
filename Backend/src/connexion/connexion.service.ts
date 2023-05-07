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
          message: "mot de passe invalide",
        });
      }
    } else {
      throw new UnauthorizedException({
        correct: false,
        message: "mail invalide",
      });
    }
    /*  return null; */
  }

  async login(
    user: Employes
  ): Promise<{ access_token: string; id_employe: number; role: string; prenom: string; nom: string; email: string }> {
    const payload = { email: user.email, sub: user.id_employe };
    const id = user.id_employe;
    const role = user.role;
    const prenom = user.prenom;
    const nom = user.nom;
    const email = user.email;
    return {
      access_token: this.jwtService.sign(payload),
      id_employe: id,
      role: role,
      prenom: prenom,
      nom: nom,
      email: email,
    };
  }
}
