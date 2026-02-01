import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { MatchesService } from './matches.service';
import { Game } from './entities/game.entity';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Get('games')
  findAllGames() {
    return this.matchesService.findAll();
  }

  @Get('events')
  findAllEvents() {
    return this.matchesService.findAllEvents();
  }

  @Post('games')
  createGame(@Body() data: Partial<Game>) {
    return this.matchesService.create(data as any);
  }
}
