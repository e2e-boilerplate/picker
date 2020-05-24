import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { of } from 'rxjs';

import { PlatformsService } from '@picker/core-data';
import { platforms } from "@picker/constants";


class MockService {
  all () {
    return of({...platforms});
  }
}

describe.only('PlatformsService', () => {
  let platformsService: PlatformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: PlatformsService, useClass: MockService}],
    });

    platformsService = TestBed.inject(PlatformsService);
  });

  describe('all', () => {
    it('get platforms', () => {
      platformsService.all().subscribe(data => {
        expect(data).toEqual(platforms);
      });
    });
  });
});
