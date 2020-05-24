import { Observable, of } from 'rxjs';
import { Framework} from './framework';
import { frameworks } from '@picker/constants';

export class MockFrameworksService {
  all(): Observable<Framework[]> {
    return of(frameworks);
  }
}
