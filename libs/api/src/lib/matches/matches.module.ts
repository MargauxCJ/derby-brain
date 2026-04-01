import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event/event.entity';
import { Game } from './game/game.entity';
import { Jam } from './jam/jam.entity';
import { EventService } from './event/event.service';
import { GameService } from './game/game.service';
import { Team } from '../clubs/team/team.entity';
import { GameController } from './game/game.controller';
import { LineupService } from './lineup/lineup.service';
import { Lineup, LineupMember } from './lineup/lineup.entity';
import { JamService } from './jam/jam.service';
import { JamLineup } from './jam/jamlineup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Game, Lineup, LineupMember, Jam, Team, JamLineup])],
  controllers: [GameController],
  providers: [EventService, GameService, LineupService, JamService],
  exports: [EventService, GameService, LineupService, JamService],
})
export class MatchesModule {}
