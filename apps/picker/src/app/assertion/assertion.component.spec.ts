import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertionComponent } from './assertion.component';
import { SharedModule } from '../shared/shared.module';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';
import { LAND } from '@picker/constants';
import { LandService, LandServiceMock } from '@picker/core-data';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AssertionComponent', () => {
  let component: AssertionComponent;
  let fixture: ComponentFixture<AssertionComponent>;
  const boilerFacadeMock = new BoilerFacadeMock();
  const landServiceMock = new LandServiceMock();
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule],
      declarations: [ AssertionComponent ],
      providers: [
        { provide: BoilerFacade, useValue: boilerFacadeMock},
        { provide: LandService, useValue: landServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
    expect(component.title).toEqual('Assertion');

    const boilerUpdateSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'updateBoiler').and.callThrough();
    const boilerBuildSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildPath').and.callThrough();

    component.ngOnInit();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(boilerUpdateSpy).toHaveBeenCalledWith({assertion: null});
    expect(boilerBuildSpy).toHaveBeenCalledTimes(1);
    component.assertion$.subscribe(value => {
      expect(value).toEqual(LAND);
    });
  });

  it('should have title and item', () => {
    const title = compiled.querySelector('picker-toolbar');
    expect(title.getAttribute('ng-reflect-title')).toEqual(component.title);

    const card = compiled.querySelectorAll('picker-card');
    const item = card[0].getAttribute('ng-reflect-item');
    expect(item).toBeDefined();
  });

  it('goto', () => {
    const router: Router = TestBed.inject(Router);
    const routerSpy = spyOn<Router>(router, 'navigate');
    const gotoSpy = spyOn<AssertionComponent>(component, 'goto').and.callThrough();
    const boilerUpdateSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'updateBoiler').and.callThrough();
    const boilerBuildSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildPath').and.callThrough();
    component.goto('assert');
    fixture.detectChanges();

    expect(gotoSpy).toHaveBeenCalledTimes(1);
    expect(gotoSpy).toHaveBeenCalledWith('assert');

    expect(boilerUpdateSpy).toHaveBeenCalledWith({assertion: 'assert'});
    expect(boilerBuildSpy).toHaveBeenCalledTimes(1);

    expect(routerSpy).toHaveBeenCalledWith(["/end"]);
    expect(routerSpy).toHaveBeenCalledTimes(1);
  });
});
