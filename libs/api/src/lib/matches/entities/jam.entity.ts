// libs/api/src/lib/modules/matches/entities/jam.entity.ts
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Game } from './game.entity';
import { User } from '../../users/entities/user.entity';
import { Pair } from './pair.entity';
import { BaseEntity } from '../../common/base.entity';
import { IJam } from '@derby-brain/shared-utils';

@Entity('jams')
export class Jam extends BaseEntity implements IJam {
  @Column()
  jamNumber!: number;

  @Column()
  gameId!: number;

  @Column({ default: 0 })
  pointsScored!: number;

  @Column({ default: 0 })
  pointsAgainst!: number;

  @Column({ default: false })
  lead!: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'jammerId' })
  jammer?: User;

  @ManyToOne(() => Pair)
  @JoinColumn({ name: 'pair1Id' })
  pair1?: Pair;

  @ManyToOne(() => Pair)
  @JoinColumn({ name: 'pair2Id' })
  pair2?: Pair;
}
