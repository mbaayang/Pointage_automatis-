import { createConnection } from 'mysql2/promise';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const connection = await createConnection({
        host: 'localhost', // l'hôte de la base de données
        port: 3306, // le port de la base de données
        user: 'root', // votre nom d'utilisateur MySQL
        password: 'root', // votre mot de passe MySQL
        database: 'soutenance', // le nom de la base de données que vous souhaitez utiliser
      });
      return connection;
    },
  },
];