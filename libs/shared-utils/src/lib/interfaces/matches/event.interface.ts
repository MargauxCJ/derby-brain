import { IGame } from './game.interface';
import { ITeam } from '../clubs/team.interface';
import { IBase } from '../base.interface';

export interface IEvent extends IBase {
  name: string;
  startDate: Date;
  endDate?: Date;
  location?: string;

  teams?: ITeam[];
  games?: IGame[];
}
