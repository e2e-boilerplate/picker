import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FrameworksService } from './frameworks.service';

describe('FrameworksService', () => {
  let service: FrameworksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FrameworksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
