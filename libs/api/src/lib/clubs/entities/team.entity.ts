import {
  Entity,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { Club } from './club.entity';
import { User } from '../../users/entities/user.entity';
import { ITeam } from '@derby-brain/shared-utils';
import { BaseEntity } from '../../common/base.entity';

@Entity('teams')
export class Team extends BaseEntity implements ITeam {
  @Column()
  name!: string;

  @Column()
  clubId!: number;

  @ManyToOne(() => Club, (club) => club.teams)
  @JoinColumn({ name: 'clubId' })
  club!: Club;

  @ManyToMany(() => User, (user) => user.teams)
  @JoinTable({ name: 'team_members' })
  members?: User[];
}
