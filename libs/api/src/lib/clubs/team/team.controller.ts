import {
  Controller,
  Post,
  Get,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  UseGuards,
  Delete,
  ForbiddenException,
  Req,
} from '@nestjs/common';
import {
  CreateTeamDto,
  RequestWithUser,
  UpdateTeamDto,
  UserRole,
} from '@derby-brain/shared-utils';
import { TeamService } from './team.service';
import { JwtAuthGuard } from '../../modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../modules/auth/guards/roles.guard';
import { Roles } from '../../modules/auth/decorators/roles.decorator';

@Controller('teams')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TeamController {
  constructor(private readonly teamsService: TeamService) {}

  @Post()
  @Roles(UserRole.COACH)
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamsService.findAll({ relations: ['club'] });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(+id);
  }

  @Patch(':id')
  @Roles(UserRole.COACH)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTeamDto: UpdateTeamDto,
    @Req() req: RequestWithUser,
  ) {
    if (req.user.role === UserRole.COACH) {
      const team = await this.teamsService.findOne(id);
      if (team.clubId !== req.user.clubId) {
        throw new ForbiddenException(
          "Interdit : cette équipe n'appartient pas à votre club.",
        );
      }
    }
    return this.teamsService.update(id, updateTeamDto);
  }

  @Post(':teamId/members/:memberId')
  @Roles(UserRole.COACH)
  addMember(
    @Param('teamId', ParseIntPipe) teamId: number,
    @Param('memberId', ParseIntPipe) memberId: number,
  ) {
    return this.teamsService.addMemberToTeam(teamId, memberId);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.teamsService.remove(id);
  }
}
