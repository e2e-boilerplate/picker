import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { HomeComponent } from './home.component';
import { MaterialModule } from '@picker/material';

const mockRouter = { navigate: jasmine.createSpy('navigate') };

xdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [HomeComponent],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to [/platform] when Start button clicked', () => {
    const start = fixture.debugElement.query(By.css('button'));
    start.nativeElement.click();
    fixture.detectChanges();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/platforms']);
  });
});
