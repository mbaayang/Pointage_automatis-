import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey',
    });
    console.log(ExtractJwt.fromAuthHeaderAsBearerToken());
  }

  async validate(payload: any) {
    // Vérifiez ici la validité du token et renvoyez l'utilisateur correspondant
    return { userId: payload.sub, username: payload.username };
  }


}