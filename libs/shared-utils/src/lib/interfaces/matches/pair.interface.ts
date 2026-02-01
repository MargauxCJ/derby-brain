import { IUser } from '../users/user.interface';
import { IBase } from '../base.interface';

export interface IPair extends IBase {
  id: number;

  member1?: IUser;
  member2?: IUser;

  gameId: number;
}
