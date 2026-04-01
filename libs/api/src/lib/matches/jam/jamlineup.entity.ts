// apps/api/src/lib/modules/matches/entities/jam-lineup.entity.ts

import { MemberPosition } from '@derby-brain/shared-utils';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Jam } from './jam.entity';
import { User } from '../../users/entities/user.entity';

@Entity('jam_lineup')
export class JamLineup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jamId: number;

  @Column()
  userId: number;

  @Column({
    type: 'enum',
    enum: MemberPosition,
  })
  position: MemberPosition;

  @ManyToOne(() => Jam, (jam) => jam.lineup, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'jamId' })
  jam: Jam;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;
}
