import {
  Controller,
  Post,
  Get,
  Body,
  Patch,
  Param,
} from '@nestjs/common';
import { ClubService } from './club.service';
import { CreateClubDto, UpdateClubDto } from '@derby-brain/shared-utils';

@Controller('clubs')
export class ClubController {
  constructor(private readonly clubsService: ClubService) {}

  @Post()
  create(@Body() createClubDto: CreateClubDto) {
    return this.clubsService.create(createClubDto);
  }

  @Get()
  findAll() {
    return this.clubsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto) {
    return this.clubsService.update(+id, updateClubDto);
  }
}
