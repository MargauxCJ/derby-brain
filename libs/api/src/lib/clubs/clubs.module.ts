import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './entities/club.entity';
import { Team } from './entities/team.entity';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Club, Team])],
  providers: [ClubsService],
  exports: [ClubsService],
  controllers: [ClubsController],
})
export class ClubsModule {}
