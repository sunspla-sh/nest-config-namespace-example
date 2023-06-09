import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
      cache: true, //setting this property will increase performance of configService.get() method for variables stored in process.env
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
