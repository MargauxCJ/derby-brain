import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';
import { BaseService } from '../../common/base.service';

@Injectable()
export class MemberService extends BaseService<Member> {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {
    super(memberRepository);
  }
}
