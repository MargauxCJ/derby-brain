import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Game } from './entities/game.entity';
import { Pair } from './entities/pair.entity';
import { LineUp } from './entities/lineup.entity';
import { Jam } from './entities/jam.entity';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Game, Pair, LineUp, Jam])],
  exports: [MatchesService],
  providers: [MatchesService],
  controllers: [MatchesController],
})
export class MatchesModule {}
