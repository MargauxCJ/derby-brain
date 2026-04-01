import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../modules/auth/guards/roles.guard';
import { JamService } from './jam.service';
import { GameService } from '../game/game.service';
import { Roles } from '../../modules/auth/decorators/roles.decorator';
import {
  CreateJamDto,
  RequestWithUser,
  UserRole,
} from '@derby-brain/shared-utils';
@Controller('games/:gameId/jams')
@UseGuards(JwtAuthGuard, RolesGuard)
export class JamsController {
  constructor(
    private readonly jamsService: JamService,
    private readonly gameService: GameService,
  ) {}

  @Get()
  findAll(@Param('gameId', ParseIntPipe) gameId: number) {
    return this.jamsService.findAll({
      where: { gameId },
      order: { jamNumber: 'ASC' },
    });
  }

  @Post()
  @Roles(UserRole.ADMIN, UserRole.COACH, UserRole.STAFF)
  async create(
    @Param('gameId', ParseIntPipe) gameId: number,
    @Body() dto: CreateJamDto,
    @Req() req: RequestWithUser,
  ) {
    const game = await this.gameService.findOne(gameId, {
      relations: ['homeTeam', 'awayTeam'],
    });

    if (!game || !game.homeTeam || !game.awayTeam) {
      throw new NotFoundException('Match ou équipes introuvables');
    }

    if (req.user.role !== UserRole.ADMIN) {
      const isMyMatch =
        game.homeTeam.clubId === req.user.clubId ||
        game.awayTeam.clubId === req.user.clubId;

      if (!isMyMatch) {
        throw new ForbiddenException(
          'Accès refusé : ce match ne concerne pas votre club.',
        );
      }
    }

    dto.gameId = gameId;

    return this.jamsService.createJam(dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN, UserRole.COACH, UserRole.STAFF)
  async remove(
    @Param('gameId', ParseIntPipe) gameId: number,
    @Param('id', ParseIntPipe) id: number,
    @Req() req: RequestWithUser,
  ) {
    const jam = await this.jamsService.findOne(id);
    if (!jam || jam.gameId !== gameId) {
      throw new BadRequestException("Ce Jam n'appartient pas à ce match.");
    }

    const game = await this.gameService.findOne(gameId, {
      relations: ['homeTeam', 'awayTeam'],
    });

    if (!game || !game.homeTeam || !game.awayTeam) {
      throw new NotFoundException('Match introuvable');
    }

    if (req.user.role !== UserRole.ADMIN) {
      const isMyMatch =
        game.homeTeam.clubId === req.user.clubId ||
        game.awayTeam.clubId === req.user.clubId;

      if (!isMyMatch) {
        throw new ForbiddenException("Vous n'avez pas les droits sur ce club.");
      }
    }

    return this.jamsService.removeJam(id);
  }
}
