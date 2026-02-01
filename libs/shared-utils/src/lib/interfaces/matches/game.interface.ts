// libs/shared/src/lib/interfaces/matches/game.interface.ts
import { IBase } from '../base.interface';
import { IEvent } from './event.interface';
import { ITeam } from '../clubs/team.interface';

export interface IGame extends IBase {
  name: string;
  date: Date;
  eventId: number;

  homeTeamId: number;
  homeTeam?: ITeam;

  opponentName: string;

  event?: IEvent;
}
