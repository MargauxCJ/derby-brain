import { IUser } from '../users/user.interface';
import { IBase } from '../base.interface';

export interface ILineup extends IBase {
  gameId: number;
  members?: IUser[];
}
