import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/base.service';
import { Team } from './team.entity';
import { Member } from '../member/member.entity';

@Injectable()
export class TeamService extends BaseService<Team> {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {
    super(teamRepository);
  }

  async addMemberToTeam(teamId: number, memberId: number): Promise<Team> {
    const team = await this.findOne(teamId, { relations: ['members'] });
    const member = await this.memberRepository.findOneBy({ id: memberId });

    if (!member) {
      throw new NotFoundException(`Membre avec l'id ${memberId} non trouvé`);
    }

    const isAlreadyMember = team.members?.some((m) => m.id === member.id);

    if (!isAlreadyMember) {
      team.members = [...(team.members || []), member];
      return await this.teamRepository.save(team);
    }

    return team;
  }
}
