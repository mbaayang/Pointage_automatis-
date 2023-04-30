import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
/* import { ConfigModule } from "@nestjs/config";
import { databaseProviders } from "./database/database.providers"; */
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/user.entity";
import { ConnexionModule } from "./connexion/connexion.module";
import { Employes } from "./connexion/entities/connexion.entity";

@Module({
  imports: [
    /* ConfigModule.forRoot({
      isGlobal: true,
    }), */
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "soutenance",
      entities: [User , Employes],
      synchronize: false,
    }),
    ConnexionModule,
  ],
  controllers: [AppController],
  providers: [AppService /* , ...databaseProviders */],
})
export class AppModule {}
