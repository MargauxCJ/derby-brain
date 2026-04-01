import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../modules/auth/guards/roles.guard';
import { LineupService } from './lineup.service';
import { Roles } from '../../modules/auth/decorators/roles.decorator';
import {
  MemberPosition,
  RequestWithUser,
  UserRole,
} from '@derby-brain/shared-utils';

@Controller('games/:gameId/lineup')
@UseGuards(JwtAuthGuard, RolesGuard)
export class LineupController {
  constructor(private readonly lineupService: LineupService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.COACH)
  async setLineup(
    @Param('gameId', ParseIntPipe) gameId: number,
    @Body() body: { members: { userId: number; role: MemberPosition }[] },
    @Req() req: RequestWithUser,
  ) {
    return this.lineupService.setLineup(gameId, body.members);
  }
}
