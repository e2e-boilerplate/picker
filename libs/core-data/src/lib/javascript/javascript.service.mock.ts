import { Observable, of } from 'rxjs';
import { Javascript } from './javascript';
import { javascripts } from '@picker/constants';

export class JavascriptServiceMock {
  all(): Observable<Javascript[]> {
    return of(javascripts);
  }
}
