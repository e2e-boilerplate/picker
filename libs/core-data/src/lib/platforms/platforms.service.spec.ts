import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlatformsService } from './platforms.service';
import { MockPlatformService } from './platform.service.mock';
import { platforms } from '@picker/constants';

describe('PlatformsService', () => {
  let platformsService: PlatformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: PlatformsService, useClass: MockPlatformService }],
    });

    platformsService = TestBed.inject(PlatformsService);
  });

  it('get platforms', () => {
    platformsService.all().subscribe((data) => {
      expect(data).toEqual(platforms);
    });
  });
});
