import { Connection } from 'mysql2/promise';
export declare class AppService {
    private connection;
    constructor(connection: Connection);
    getHello(): string;
}
