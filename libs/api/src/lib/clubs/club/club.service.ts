import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Club } from './club.entity';
import { BaseService } from '../../common/base.service';


@Injectable()
export class ClubService extends BaseService<Club> {
  constructor(
    @InjectRepository(Club)
    private readonly clubRepository: Repository<Club>,
  ) {
    super(clubRepository);
  }
}
