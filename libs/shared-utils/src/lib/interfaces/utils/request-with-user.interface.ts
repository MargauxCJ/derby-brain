import { UserRole } from '../../enums/enums';

export interface RequestWithUser extends Request {
  user: {
    id: number;
    email: string;
    role: UserRole;
    clubId: number;
  };
}
