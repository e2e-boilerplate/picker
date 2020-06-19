import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { JavascriptService } from './javascript.service';

xdescribe('JavascriptService', () => {
  let service: JavascriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(JavascriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
