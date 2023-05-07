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
    email1: string,
    mot_de_passe: string
  ): Promise<Employes | null> {
    const user = await this.userRepository.findOne({ where: { email1 } });
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
  ): Promise<{ access_token: string; id: number; role: string; prenom1: string; nom1: string; email1: string }> {
    const payload = { email1: user.email1, sub: user.id };
    const id = user.id;
    const role = user.role;
    const prenom = user.prenom1;
    const nom = user.nom1;
    const email = user.email1;
    return {
      access_token: this.jwtService.sign(payload),
      id: id,
      role: role,
      prenom1: prenom,
      nom1: nom,
      email1: email,
    };
  }
}
