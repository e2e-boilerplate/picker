import { Observable, of } from 'rxjs';

export const versionServiceMock = {
  get(id): Observable<string> {
    return of('0.0.1');
  }
}
