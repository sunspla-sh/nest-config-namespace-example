import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsDataService } from './cats-data.service';

@Controller('cats')
export class CatsController {
  constructor(
    private catsService: CatsService,
    private catsDataService: CatsDataService,
  ) {}
  @Get()
  findAll(): Array<string> {
    return this.catsService.findAll();
  }
  @Get('stuff')
  doStuff(): string {
    return this.catsDataService.doStuff();
  }
}
