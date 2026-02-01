import { Module } from '@nestjs/common';
import { ApiLibModule } from '@derby-brain/api-lib';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ApiLibModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
