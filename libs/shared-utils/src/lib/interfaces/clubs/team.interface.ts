import { IBase } from '../base.interface';
import { IClub } from './club.interface';
import { IMember } from './member.interface';
import { IGame } from '../matches/game.interface';

export interface ITeam extends IBase {
  name: string;
  clubId: number;
  logo?: string;

  club?: IClub;
  members?: IMember[];
  games?: IGame[];
}
