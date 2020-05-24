import { Observable, of } from 'rxjs';
import { Platform } from '@picker/core-data';
import { platforms } from './platforms';

export class MockPlatformService {
  all(): Observable<Platform[]> {
    return of(platforms);
  }
}
