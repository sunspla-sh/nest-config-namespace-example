import { registerAs } from '@nestjs/config';

/**
 * Here we're using the registerAs function from the @nestjs/config package to
 * register a configuration object behind a specified token. In this case,
 * the configuration object is { user: process.env.DATABASE_USER, password: process.env.DATABASE_PASSWORD }
 * and the namespace token is 'database'. We need to use this databaseConfig export in the load array
 * within the ConfigModule.forRoot() method's configuration object, e.g.
 * ConfigModule.forRoot({ load: [databaseConfig] })
 */
export const databaseConfig = registerAs('database', () => ({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
}));
