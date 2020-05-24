import { async, TestBed } from '@angular/core/testing';
import { ConstantsModule } from './constants.module';

describe('ConstantsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConstantsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ConstantsModule).toBeDefined();
  });
});
