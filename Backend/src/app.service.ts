import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'mysql2/promise';

@Injectable()

export class AppService {
  constructor(@Inject('DATABASE_CONNECTION') private connection: Connection) {}
    getHello(): string {
    return 'Hello World!';
  } 

}
