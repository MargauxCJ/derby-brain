import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Game } from '../game/game.entity';
import { User } from '../../users/entities/user.entity';
import { JamLineup } from './jamlineup.entity';

@Entity('jams')
export class Jam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gameId: number;

  @Column()
  jamNumber: number;

  @Column({ default: 0 })
  pointsHome: number;

  @Column({ default: 0 })
  pointsAway: number;

  @Column({ nullable: true })
  leadJammerId: number;

  @Column({ default: false })
  isPowerJam: boolean;

  @Column({ default: false })
  isStarPass: boolean;

  @Column({ type: 'int', nullable: true })
  durationSeconds: number;

  @ManyToOne(() => Game, (game) => game.jams)
  game: Game;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'leadJammerId' })
  leadJammer: User;

  @OneToMany(() => JamLineup, (lineup) => lineup.jam, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  lineup: JamLineup[];
}
