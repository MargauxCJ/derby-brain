import { MemberPosition } from '../../enums/enums';
import { IBase } from '../base.interface';

export interface IMember extends IBase {
  userId: number;
  teamId: number;
  surname: string;
  number: string;
  defaultPosition: MemberPosition;
}
