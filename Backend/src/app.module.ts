import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { databaseProviders } from "./database/database.providers";
import { AuthModule } from './auth/auth.module';


const entities = [];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
