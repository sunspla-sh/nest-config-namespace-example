import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { CatsModule } from './cats/cats.module';

import * as Joi from 'joi';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
      cache: true, //setting this property will increase performance of configService.get() method for variables stored in process.env
      /**
       * We can define a Joi validation schema and pass it via the validationSchema property of forRoot() method's option object.
       * By default, unknown env variables are allowed as long as at minimum the env variables specified in the Joi schema are present.
       * To change that behavior, add a validationOptions object https://joi.dev/api/?v=17.9.1#anyvalidatevalue-options
       */
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .required(),
        PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().min(1).max(20),
        DATABASE_PASSWORD: Joi.string().min(1).max(20).required(),
      }),
      // validationOptions: { allowUnknown: true, abortEarly: false }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
