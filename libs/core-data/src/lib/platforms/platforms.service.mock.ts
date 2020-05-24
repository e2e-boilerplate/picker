import { Observable, of } from 'rxjs';
import { Platform } from './platform';
import { platforms } from '@picker/constants';

export class MockPlatformsService {
  all(): Observable<Platform[]> {
    return of(platforms);
  }
}
