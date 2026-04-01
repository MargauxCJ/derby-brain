import { Module } from '@nestjs/common';
import { ApiLibModule } from '@derby-brain/api-lib';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ApiLibModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
