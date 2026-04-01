import {
  ILineup,
  ILineupMember,
  MemberPosition,
} from '@derby-brain/shared-utils';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  Relation,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import type { Game } from '../game/game.entity';
import { BaseEntity } from '../../common/base.entity';

@Entity('lineup_members')
export class LineupMember extends BaseEntity implements ILineupMember {
  @Column()
  lineupId!: number;

  @Column()
  userId!: number;

  @Column({ type: 'enum', enum: MemberPosition })
  roleForGame!: MemberPosition;

  @ManyToOne('Lineup', 'members', { onDelete: 'CASCADE' })
  lineup?: Relation<any>;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user?: User;
}

@Entity('lineups')
export class Lineup extends BaseEntity implements ILineup {
  @Column()
  gameId!: number;

  @OneToOne('Game', 'lineup')
  @JoinColumn({ name: 'gameId' })
  game?: Relation<Game>;

  @OneToMany(() => LineupMember, (lm) => lm.lineup, { cascade: true })
  members?: LineupMember[];
}
