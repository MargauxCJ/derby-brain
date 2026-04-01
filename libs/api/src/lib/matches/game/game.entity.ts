import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  Relation,
} from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { IGame } from '@derby-brain/shared-utils';
import { Team } from '../../clubs/team/team.entity';
import { Event } from '../event/event.entity';
import type { Lineup } from '../lineup/lineup.entity';
import { Jam } from '../jam/jam.entity';

@Entity('games')
export class Game extends BaseEntity implements IGame {
  @Column()
  name!: string;

  @Column({ type: 'timestamp' })
  date!: Date;

  @Column()
  eventId!: number;

  @Column()
  homeTeamId!: number;

  @Column({ nullable: true })
  awayTeamId?: number;

  @Column({ nullable: true })
  opponentName!: string;

  @ManyToOne(() => Event, (event) => event.games)
  @JoinColumn({ name: 'eventId' })
  event?: Event;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'homeTeamId' })
  homeTeam?: Team;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'awayTeamId' })
  awayTeam?: Team;

  @OneToOne('Lineup', 'game')
  lineup?: Relation<Lineup>;

  @Column({ default: 0 })
  scoreHome: number;

  @Column({ default: 0 })
  scoreAway: number;

  @OneToMany(() => Jam, (jam) => jam.game)
  jams?: Jam[];
}
