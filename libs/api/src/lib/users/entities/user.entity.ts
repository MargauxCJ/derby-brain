import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { IUser, MemberPosition, UserRole } from '@derby-brain/shared-utils';
import { Team } from '../../clubs/entities/team.entity';

@Entity('users')
export class User extends BaseEntity implements IUser {
  @Column()
  surname!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column({ nullable: true })
  jerseyNum?: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.MEMBER_USER })
  role!: UserRole;

  @Column({ type: 'enum', enum: MemberPosition, nullable: true })
  defaultPosition?: MemberPosition;

  @ManyToMany(() => Team, (team) => team.members)
  teams?: Team[];
}
