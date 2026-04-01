import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Req,
  ForbiddenException,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateGameDto,
  RequestWithUser,
  UpdateGameDto,
  UserRole,
} from '@derby-brain/shared-utils';
import { GameService } from './game.service';
import { Roles } from '../../modules/auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../../modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../modules/auth/guards/roles.guard';

@Controller('games')
@UseGuards(JwtAuthGuard, RolesGuard)
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  @Roles(UserRole.COACH)
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.createGame(createGameDto);
  }

  @Patch(':id')
  @Roles(UserRole.COACH, UserRole.STAFF)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGameDto: UpdateGameDto,
    @Req() req: RequestWithUser,
  ) {
    if (req.user.role !== UserRole.ADMIN) {
      const game = await this.gameService.findOne(id, {
        relations: ['homeTeam', 'awayTeam'],
      });

      if (!game || !game.homeTeam || !game.awayTeam) {
        throw new NotFoundException('Match ou équipes introuvables');
      }

      const isMyClub =
        game.homeTeam.clubId === req.user.clubId ||
        game.awayTeam.clubId === req.user.clubId;

      if (!isMyClub) {
        throw new ForbiddenException('Ce match ne concerne pas votre club.');
      }
    }
    return this.gameService.update(id, updateGameDto);
  }

  @Get()
  findAll() {
    return this.gameService.findAll({
      relations: ['homeTeam', 'awayTeam', 'event'],
    });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gameService.findOne(id, {
      relations: ['homeTeam', 'awayTeam', 'event'],
    });
  }
}
