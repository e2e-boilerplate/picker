import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Platform } from './platform';
import { PlatformsService } from './platforms.service';
import { defer } from 'rxjs';

/** Create async observable that emits-once and completes
 *  after a JS engine turn */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('PlatformsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let platformsService: PlatformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlatformsService],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    platformsService = TestBed.inject(PlatformsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('all', () => {
    let expectedPlatforms: Platform[];

    beforeEach(() => {
      expectedPlatforms = [
        { name: 'platform1' },
        { name: 'platform2' },
      ] as Platform[];
    });

    it('should return expected platforms', () => {
      platformsService
        .all()
        .subscribe(
          (platforms) => expect(platforms).toEqual(expectedPlatforms),
          fail
        );
      // TODO ^^ not actually excuted

      const req = httpTestingController.expectOne(
        `${platformsService.BASE_URL}${platformsService.model}.json`
      );
      expect(req.request.method).toEqual('GET');

      req.flush(expectedPlatforms); //Return expectedEmps
    });
  });
});
