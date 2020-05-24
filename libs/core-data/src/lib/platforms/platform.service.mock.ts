import { Observable, of } from 'rxjs';
import { Platform } from './platform';
import { platforms } from '@picker/constants';

export class MockPlatformService {
  all(): Observable<Platform[]> {
    return of(platforms);
  }
}
