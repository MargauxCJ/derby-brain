import { UserRole } from '../../enums/enums';
import { IBase } from '../base.interface';

export interface IUser extends IBase {
  surname: string;
  email: string;
  role: UserRole;
}
