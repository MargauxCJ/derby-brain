import { MemberPosition, UserRole } from '../../enums/enums';
import { ITeam } from '../clubs/team.interface';
import { IBase } from '../base.interface';

export interface IUser extends IBase {
  surname: string;
  email: string;
  jerseyNum?: string;
  role: UserRole;
  defaultPosition?: MemberPosition;

  teams?: ITeam[];
}
