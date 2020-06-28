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
    expect(compiled.querySelectorAll('p').length).toEqual(3);
  });

  it('should reset state', async () => {
    const boilerSpy = spyOn<any>(boilerFacadeMock, 'resetBoiler').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(boilerSpy).toHaveBeenCalledTimes(1);
  });

  it('should navigate to /land', async () => {
    const router: Router = TestBed.inject(Router);
    const routerSpy = spyOn(router, 'navigate');
    const gotoSpy = spyOn(component, 'goto').and.callThrough();
    const start = compiled.querySelector('button');
    start.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(routerSpy).toHaveBeenCalledWith(['/land']);
    expect(routerSpy).toHaveBeenCalledTimes(1);
    expect(gotoSpy).toHaveBeenCalledTimes(1);
  });

  it('should navigate to /land', async () => {
    const router: Router = TestBed.inject(Router);
    const routerSpy = spyOn(router, 'navigate');
    component.goto();
    fixture.detectChanges()
    await fixture.whenStable();

    expect(routerSpy).toHaveBeenCalledWith(['/land']);
  });
});
