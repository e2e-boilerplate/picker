import { Observable, of } from 'rxjs';

export class VersionServiceMock {
  getAll(): Observable<any> {
    return of({
      husky: "4.2.5",
      jest: "26.1.0",
    })
  }
}
