// libs/shared/src/lib/interfaces/jam.interface.ts
import { IPair } from './pair.interface';
import { IUser } from '../users/user.interface';
import { IBase } from '../base.interface';

export interface IJam extends IBase {
  jamNumber: number;
  gameId: number;

  jammer?: IUser;
  pair1?: IPair;
  pair2?: IPair;

  pointsScored: number;
  pointsAgainst: number;
}
