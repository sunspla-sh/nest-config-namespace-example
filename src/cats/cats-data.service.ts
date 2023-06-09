import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { databaseConfig } from '../config/database.config';

@Injectable()
export class CatsDataService {
  constructor(
    /**
     * Here we're directly injecting the database namespace as the variable dbConfig
     * and we can directly access the user and password properties throughout our class
     * without needing to inject the configService or use the configService.get() method
     */
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
  ) {}

  doStuff(): string {
    console.log(
      'directly injecting the database namespace: ',
      this.dbConfig.user,
    );
    console.log(
      'directly injecting the database namespace: ',
      this.dbConfig.password,
    );
    return 'some stuff';
  }
}
