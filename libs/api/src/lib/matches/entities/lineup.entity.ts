import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { User } from '../../users/entities/user.entity';
import { Game } from './game.entity';
import { ILineup } from '@derby-brain/shared-utils';

@Entity('lineups')
export class LineUp extends BaseEntity implements ILineup {
  @Column()
  gameId!: number;

  @ManyToOne(() => Game)
  @JoinColumn({ name: 'gameId' })
  game?: Game;

  @ManyToMany(() => User)
  @JoinTable({ name: 'lineup_members' })
  members?: User[];
}
