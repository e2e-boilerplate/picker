import { TestBed } from '@angular/core/testing';

import { Platform } from './platform';
import { PlatformsService } from './platforms.service';

describe('PlatformsService', () => {
  let service: PlatformsService;
  const platforms: Platform[] = [
    { name: 'platform1'},
    { name: 'platform2'}
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformsService);
    service.platforms = platforms;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all platforms', () => {
    expect(service.all()).toEqual(platforms);
  });
});
