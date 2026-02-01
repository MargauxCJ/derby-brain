import {
  Entity,
  Column,
  ManyToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { Game } from './game.entity';
import { Club } from '../../clubs/entities/club.entity';
import { Team } from '../../clubs/entities/team.entity';
import { User } from '../../users/entities/user.entity';
import { IEvent } from '@derby-brain/shared-utils';

@Entity('events')
export class Event extends BaseEntity implements IEvent {
  @Column()
  name!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  startDate!: Date;

  @Column({ type: 'timestamp', nullable: true })
  endDate?: Date;

  @Column({ nullable: true })
  location?: string;

  @Column()
  clubId!: number;

  @ManyToOne(() => Club, (club) => club.events)
  @JoinColumn({ name: 'clubId' })
  club!: Club;

  @ManyToMany(() => Team)
  @JoinTable({ name: 'event_teams' })
  teams!: Team[];

  @ManyToMany(() => User)
  @JoinTable({ name: 'event_attendance' })
  presentMembers!: User[];

  @OneToMany(() => Game, (game) => game.event)
  games!: Game[];
}
