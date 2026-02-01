import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Club } from './entities/club.entity';
import { BaseService } from '../common/base.service';

@Injectable()
export class ClubsService extends BaseService<Club> {
  constructor(
    @InjectRepository(Club)
    private readonly clubRepository: Repository<Club>,
  ) {
    super(clubRepository);
  }

  override findAll() {
    return this.clubRepository.find({ relations: ['teams'] });
  }
}
