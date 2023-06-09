import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatsDataService } from './cats-data.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService, CatsDataService],
})
export class CatsModule {}
