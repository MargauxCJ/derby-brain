import { IBase } from '../base.interface';
import { ITeam } from './team.interface';
import { IEvent } from '../matches/event.interface';

export interface IClub extends IBase {
  name: string;
  logo?: string;
  description?: string;
  city?: string;

  teams?: ITeam[];
  events?: IEvent[];
}
