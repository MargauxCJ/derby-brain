import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { IGame } from '@derby-brain/shared-utils';
import { Pair } from './pair.entity';
import { Jam } from './jam.entity';
import { Event } from './event.entity';

@Entity('games')
export class Game extends BaseEntity implements IGame {
  @Column()
  name!: string;

  @Column()
  date!: Date;

  @Column()
  eventId!: number;

  @ManyToOne('Event', 'games')
  @JoinColumn({ name: 'eventId' })
  event!: any;

  @Column()
  homeTeamId!: number;

  @ManyToOne('Team')
  @JoinColumn({ name: 'homeTeamId' })
  homeTeam!: any;

  @Column()
  opponentName!: string;
}
