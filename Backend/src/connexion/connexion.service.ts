import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employess } from "./entities/connexion.entity";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Employess)
    private readonly userRepository: Repository<Employess>,
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
  async validateUser(email: string, mot_de_passe: string): Promise<Employess | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(mot_de_passe, user.password))) {
      return user;
    }
   /*  return null; */

    throw new UnauthorizedException({ correct: false, message: "Mot de passe invalide" });
  }


  
  async login(user: Employess): Promise<{ access_token: string, id :number , role :string  }> {
    const payload = { email: user.email, sub: user.id_employe };
    const id = user.id_employe;
    const role = user.role;
    return {
      access_token: this.jwtService.sign(payload), id:id, role:role
    };
  }
}
