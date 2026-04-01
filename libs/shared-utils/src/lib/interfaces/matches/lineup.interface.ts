import { IUser } from '../users/user.interface';
import { IBase } from '../base.interface';
import { MemberPosition } from '../../enums/enums';

export interface ILineupMember extends IBase {
  lineupId: number;
  userId: number;
  roleForGame: MemberPosition;
  user?: IUser;
}

export interface ILineup extends IBase {
  gameId: number;
  members?: ILineupMember[];
}
