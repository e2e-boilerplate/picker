import { async, TestBed } from '@angular/core/testing';
import { BoilerModule } from './boiler.module';

describe('BoilerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BoilerModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BoilerModule).toBeDefined();
  });
});
