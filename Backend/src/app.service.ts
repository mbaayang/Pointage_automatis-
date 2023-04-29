import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'mysql2/promise';

@Injectable()

export class AppService {
  constructor(@Inject('DATABASE_CONNECTION') private connection: Connection) {}
/*   getHello(): string {
    return 'Hello World!';
  } */
  async getHello(): Promise<string> {
    const [rows, fields] = await this.connection.execute('SELECT * FROM users');
    return `Hello World! Users: ${JSON.stringify(rows)}`;
  }
}
