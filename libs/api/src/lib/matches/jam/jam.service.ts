import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from '../../common/base.service';
import { Game } from '../game/game.entity';
import { Jam } from './jam.entity';
import { Repository } from 'typeorm';
import { CreateJamDto, MemberPosition } from '@derby-brain/shared-utils';
import { JamLineup } from './jamlineup.entity';

@Injectable()
export class JamService extends BaseService<Jam> {
  constructor(
    @InjectRepository(Jam) private jamRepo: Repository<Jam>,
    @InjectRepository(Game) private gameRepo: Repository<Game>,
  ) {
    super(jamRepo);
  }

  async updateGameScore(gameId: number): Promise<void> {
    const totals = await this.jamRepo
      .createQueryBuilder('jam')
      .select('SUM(jam.pointsHome)', 'home')
      .addSelect('SUM(jam.pointsAway)', 'away')
      .where('jam.gameId = :gameId', { gameId })
      .getRawOne();

    await this.gameRepo.update(gameId, {
      scoreHome: Number(totals.home) || 0,
      scoreAway: Number(totals.away) || 0,
    });
  }

  async createJam(dto: CreateJamDto): Promise<Jam> {
    const newJam = await this.jamRepo.save(this.jamRepo.create(dto));

    await this.updateGameScore(dto.gameId);

    return newJam;
  }


  async removeJam(id: number): Promise<void> {
    const jam = await this.jamRepo.findOne({ where: { id } });

    if (!jam) {
      throw new NotFoundException(`Le Jam #${id} n'existe pas.`);
    }

    const gameId = jam.gameId;

    await this.jamRepo.delete(id);

    await this.updateGameScore(gameId);
  }
}
