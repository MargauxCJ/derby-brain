import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { Club } from './entities/club.entity';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Get()
  findAll() {
    return this.clubsService.findAll();
  }

  @Post()
  create(@Body() data: Partial<Club>) {
    return this.clubsService.create(data as any);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clubsService.findOne(id);
  }
}
