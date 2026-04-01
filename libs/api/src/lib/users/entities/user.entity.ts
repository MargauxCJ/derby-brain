import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { IUser, UserRole } from '@derby-brain/shared-utils';
import { Exclude } from 'class-transformer';

@Entity('users')
export class User extends BaseEntity implements IUser {
  @Column()
  surname!: string;

  @Column({ unique: true })
  email!: string;

  @Exclude()
  @Column({ select: false })
  password!: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.COACH })
  role!: UserRole;

  @Column()
  clubId!: number;
}
