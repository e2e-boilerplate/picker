import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlerComponent } from './bundler.component';

describe('BundlerComponent', () => {
  let component: BundlerComponent;
  let fixture: ComponentFixture<BundlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
