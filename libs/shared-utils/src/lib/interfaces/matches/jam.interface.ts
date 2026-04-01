import { IBase } from '../base.interface';

export interface IJam extends IBase {
  jamNumber: number;
  gameId: number;

  jammerId: number;
  pivotId?: number;
  blockerIds: number[];

  isLead: boolean;
  pointsScored: number;
  pointsAgainst: number;
  lostLead?: boolean;
  callGrn?: boolean;
}
