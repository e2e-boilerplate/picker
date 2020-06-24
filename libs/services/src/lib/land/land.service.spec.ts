import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { LandService } from './land.service';
import { landServiceMock } from '@picker/services';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';
import { LAND } from '@picker/constants';

describe('LandService', () => {
  let service: LandService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: BoilerFacade, useClass: BoilerFacadeMock},
        { provide: LandService, useValue: landServiceMock }
        ]
    });
    service = TestBed.inject(LandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(landServiceMock.path).toEqual('nodejs');
  });

  it('should return land data', (done) => {
    const landServiceSpy = spyOn(landServiceMock, 'all').and.callThrough();
    landServiceMock.all().subscribe( value => {
      expect(value).toEqual(LAND);
      expect(landServiceSpy).toHaveBeenCalledTimes(1);
      done();
    })
  });
});
