import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './club/club.entity';
import { Team } from './team/team.entity';
import { TeamController } from './team/team.controller';
import { ClubService } from './club/club.service';
import { ClubController } from './club/club.controller';
import { TeamService } from './team/team.service';
import { Member } from './member/member.entity';
import { MemberController } from './member/member.controller';
import { MemberService } from './member/member.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Club, Team, Member]),
  ],
  controllers: [
    ClubController,
    TeamController,
    MemberController,
  ],
  providers: [
    ClubService,
    TeamService,
    MemberService,
  ],
  exports: [
    ClubService,
    TeamService,
    MemberService,
  ],
})
export class ClubsModule {}
