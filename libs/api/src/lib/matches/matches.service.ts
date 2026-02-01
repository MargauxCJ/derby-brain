import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { Event } from './entities/event.entity';
import { BaseService } from '../common/base.service';

@Injectable()
export class MatchesService extends BaseService<Game> {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {
    super(gameRepository);
  }

  findAllEvents() {
    return this.eventRepository.find({ relations: ['club', 'teams'] });
  }
}
