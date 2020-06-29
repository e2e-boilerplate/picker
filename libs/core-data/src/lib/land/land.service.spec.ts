import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LandService } from './land.service';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';
import { BASE_URL, LAND } from '@picker/constants';


describe('LandService', () => {
  let landService: LandService;
  let httpMock: HttpTestingController;
  const boilerFacadeMock = new BoilerFacadeMock();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LandService, { provide: BoilerFacade, useValue: boilerFacadeMock}]
    });
    landService = TestBed.inject(LandService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(landService).toBeTruthy();
    expect(landService.path).toBe('');
  });

  it('should return an Observable<ILand[]>', fakeAsync(() => {
    landService.path = 'land';
    const landServiceSpy = spyOn(landService, 'all').and.callThrough();

    landService.all().subscribe( value => {
      expect(value.length).toEqual(2);
      expect(landServiceSpy).toHaveBeenCalledTimes(1);
    });

    const req = httpMock.expectOne(`${BASE_URL}${landService.path}index.json`);
    expect(req.request.method).toBe("GET");
    req.flush(LAND);
    tick();
  }));
});
