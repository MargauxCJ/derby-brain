import { IClub } from './club.interface';
import { IUser } from '../users/user.interface';
import { IGame } from '../matches/game.interface';
import { IBase } from '../base.interface';

export interface ITeam extends IBase {
  name: string;
  clubId: number;
  logo?: string;

  club?: IClub;
  members?: IUser[];
  games?: IGame[];
}
