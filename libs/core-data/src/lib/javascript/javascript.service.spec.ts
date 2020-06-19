import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { JavascriptService } from './javascript.service';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';

xdescribe('JavascriptService', () => {
  let service: JavascriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: BoilerFacade, useClass: BoilerFacadeMock}
      ]
    });
    service = TestBed.inject(JavascriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
