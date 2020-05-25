import { Observable, of } from 'rxjs';
import { Framework} from './framework';
import { frameworks } from '@picker/constants';

export class FrameworksServiceMock {
  all(): Observable<Framework[]> {
    return of(frameworks);
  }
}
