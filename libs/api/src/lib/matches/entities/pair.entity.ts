import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { BaseEntity } from '../../common/base.entity';
import { IPair } from '@derby-brain/shared-utils';

@Entity('pairs')
export class Pair extends BaseEntity implements IPair {
  @Column()
  gameId!: number;

  @Column()
  member1Id!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'member1Id' })
  member1!: User;

  @Column()
  member2Id!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'member2Id' })
  member2!: User;
}
