import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { runSeeder } from '../db/seeds/run';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('seed-now')
  async seed() {
    try {
      await runSeeder(this.dataSource);
      return { status: 'Success', message: 'Database seeded!' };
    } catch (err) {
      return { status: 'Error', error: err.message };
    }
  }
}
