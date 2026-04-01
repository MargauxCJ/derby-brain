import {
  Entity,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { Club } from '../club/club.entity';
import { ITeam } from '@derby-brain/shared-utils';
import { BaseEntity } from '../../common/base.entity';
import { Member } from '../member/member.entity';

@Entity('teams')
export class Team extends BaseEntity implements ITeam {
  @Column()
  name!: string;

  @Column()
  clubId!: number;

  @ManyToOne(() => Club, (club) => club.teams)
  @JoinColumn({ name: 'clubId' })
  club!: Club;

  @ManyToOne(() => Member, (member) => member.team)
  @JoinTable({ name: 'team_members' })
  members?: Member[];

  @Column({ default: false })
  isOpponent!: boolean;
}
