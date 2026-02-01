import { Entity, Column, OneToMany } from 'typeorm';
import { Team } from './team.entity';
import { Event } from '../../matches/entities/event.entity';
import { BaseEntity } from '../../common/base.entity';
import { IClub } from '@derby-brain/shared-utils';

@Entity('clubs')
export class Club extends BaseEntity implements IClub {
  @Column()
  name!: string;

  @Column({ nullable: true })
  logo?: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ nullable: true })
  city?: string;

  @OneToMany(() => Team, (team) => team.club)
  teams?: Team[];

  @OneToMany(() => Event, (event) => event.club)
  events?: Event[];
}
