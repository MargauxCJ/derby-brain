import { Lineup, LineupMember } from './lineup.entity';
import { BaseService } from '../../common/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MemberPosition } from '@derby-brain/shared-utils';

@Injectable()
export class LineupService extends BaseService<Lineup> {
  constructor(
    @InjectRepository(Lineup) private readonly lineupRepo: Repository<Lineup>,
    @InjectRepository(LineupMember)
    private readonly lmRepo: Repository<LineupMember>,
  ) {
    super(lineupRepo);
  }

  async setLineup(
    gameId: number,
    membersInput: { userId: number; role: MemberPosition }[],
  ): Promise<Lineup> {
    let lineup = await this.lineupRepo.findOne({ where: { gameId } });

    if (lineup) {
      await this.lmRepo.delete({ lineupId: lineup.id });
    } else {
      lineup = await this.lineupRepo.save(this.lineupRepo.create({ gameId }));
    }

    const members = membersInput.map((m) =>
      this.lmRepo.create({
        lineupId: lineup.id,
        userId: m.userId,
        roleForGame: m.role,
      }),
    );

    await this.lmRepo.save(members);
    return this.findOne(lineup.id, { relations: ['members', 'members.user'] });
  }
}
