import { Observable, of } from 'rxjs';
import { ILand } from '@picker/constants';
import { LAND } from '@picker/constants';

export const landServiceMock = {
  path: 'nodejs',
  all(): Observable<ILand[]> {
    return of(LAND);
  }
};
