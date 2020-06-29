import { Observable, of } from 'rxjs';
import { ILand } from '@picker/constants';
import { LAND } from '@picker/constants';

export class LandServiceMock {
  path: 'nodejs';

  all(): Observable<ILand[]> {
    return of(LAND);
  }
}
