import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { LandService } from './land.service';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';

describe('LandService', () => {
  let service: LandService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: BoilerFacade, useClass: BoilerFacadeMock}]
    });
    service = TestBed.inject(LandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
