"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const promise_1 = require("mysql2/promise");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => {
            const connection = await (0, promise_1.createConnection)({
                host: 'localhost',
                port: 3306,
                user: 'root',
                password: '',
                database: 'soutenance',
            });
            return connection;
        },
    },
];
//# sourceMappingURL=database.providers.js.map