import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { User } from '../../users/entities/user.entity';
import { IMember, MemberPosition } from '@derby-brain/shared-utils';
import { Team } from '../team/team.entity';

@Entity('members')
export class Member extends BaseEntity implements IMember {
  @Column()
  userId!: number;

  @Column()
  teamId!: number;

  @Column()
  surname!: string;

  @Column()
  number!: string;

  @Column({
    type: 'enum',
    enum: MemberPosition,
    default: MemberPosition.BLOCKER,
  })
  defaultPosition!: MemberPosition;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user?: User;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'teamId' })
  team?: Team;
}
