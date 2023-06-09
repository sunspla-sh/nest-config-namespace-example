import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CatsService {
  private cats: Array<string> = ['bob the cat', 'jim the cat'];

  constructor(private configService: ConfigService) {}

  findAll(): Array<string> {
    /**
     * In this example, database is our namespace that we previously registered in AppModule by
     * using the ConfigModule.forRoot() method with the following config object:
     * { load: [databaseConfig], isGlobal: true }
     * The databaseConfig import came from the database.config.ts file where a registerAs function
     * was called to register a configuration object behind a specified token. In this case,
     * the configuration object was { user: process.env.DATABASE_USER, password: process.env.DATABASE_PASSWORD }
     * and the namespace token was 'database'.
     */
    console.log(this.configService.get('database.user'));
    return this.cats;
  }
}
