import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { HomeComponent } from './home.component';
import { MaterialModule } from '@picker/material';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const boilerFacadeMock = new BoilerFacadeMock();
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [HomeComponent],
      providers: [
        { provide: BoilerFacade, useValue: boilerFacadeMock}
      ],
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

  it('should have content', () => {
    expect(compiled.querySelectorAll('p').length).toEqual(3);
  });

  it('should reset state', () => {
    const boilerSpy = spyOn<any>(boilerFacadeMock, 'resetBoiler').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    expect(boilerSpy).toHaveBeenCalledTimes(1);
  });

  it('should navigate to /land', () => {
    const router: Router = TestBed.inject(Router);
    const routerSpy = spyOn(router, 'navigate');
    const start = compiled.querySelector('button');
    start.click();
    fixture.detectChanges();

    expect(routerSpy).toHaveBeenCalledWith(['/land']);
  });
});
