import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/base.service';
import { CreateGameDto } from '@derby-brain/shared-utils';
import { Game } from './game.entity';
import { Team } from '../../clubs/team/team.entity';

@Injectable()
export class GameService extends BaseService<Game> {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {
    super(gameRepository);
  }

  async createGame(dto: CreateGameDto): Promise<Game> {
    const { opponentName, date, ...rest } = dto;
    let awayTeamId = dto.awayTeamId;

    if (!awayTeamId && opponentName) {
      const homeTeam = await this.teamRepository.findOneBy({
        id: dto.homeTeamId,
      });

      const newOpponent = this.teamRepository.create({
        name: opponentName,
        clubId: homeTeam?.clubId,
        isOpponent: true,
      });

      const savedOpponent = await this.teamRepository.save(newOpponent);
      awayTeamId = savedOpponent.id;
    }

    const game = this.gameRepository.create({
      ...rest,
      date: new Date(date),
      awayTeamId: awayTeamId,
    });

    return await this.gameRepository.save(game);
  }
}
