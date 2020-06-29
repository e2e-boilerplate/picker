import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { VersionService } from './version.service';
import { BASE_URL, LAND } from '@picker/constants';

// TODO update
describe('VersionService', () => {
  let versionService: VersionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VersionService]
    });
    versionService = TestBed.inject(VersionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(versionService).toBeTruthy();
  });

  it('getAll', fakeAsync(() => {
    const versionServiceSpy = spyOn(versionService, 'getAll').and.callThrough();

    versionService.getAll().subscribe( value => {
      expect(value).not.toEqual(undefined);
      expect(versionServiceSpy).toHaveBeenCalledTimes(1);
    });

    const req = httpMock.expectOne(`${BASE_URL}dependencies/index.json`)
    expect(req.request.method).toBe("GET");
    req.flush(LAND);
    tick();
  }));
});
