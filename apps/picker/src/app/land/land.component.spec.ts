import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LandComponent } from './land.component';
import { SharedModule } from '../shared/shared.module';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';
import { Router } from '@angular/router';
import { LAND } from '@picker/constants';

import {
  LandService,
  landServiceMock
} from '@picker/services';


describe('LandComponent', () => {
  let component: LandComponent;
  let fixture: ComponentFixture<LandComponent>;
  const boilerFacadeMock = new BoilerFacadeMock();
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule],
      declarations: [ LandComponent ],
      providers: [
        { provide: BoilerFacade, useValue: boilerFacadeMock},
        { provide: LandService, useValue: landServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toEqual('Land');
  });

  it('should initialize', (done) => {
    const boilerUpdateSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'updateBoiler').and.callThrough();
    const boilerBuildSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildPath').and.callThrough();

    component.ngOnInit();
    fixture.detectChanges();

    expect(boilerUpdateSpy).toHaveBeenCalledWith({land: null});
    expect(boilerBuildSpy).toHaveBeenCalledTimes(1);

    component.lands$.subscribe(value => {
      expect(value).toEqual(LAND);
      done();
    })
  });

  it('goto', () => {
    const router: Router = TestBed.inject(Router);
    const routerSpy = spyOn(router, 'navigate');
    const gotoSpy = spyOn(component, 'goto').and.callThrough();
    const boilerUpdateSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'updateBoiler').and.callThrough();
    const boilerBuildSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildPath').and.callThrough();
    component.goto('browser');
    fixture.detectChanges();

    expect(gotoSpy).toHaveBeenCalled();
    expect(gotoSpy).toHaveBeenCalledWith('browser');
    expect(boilerUpdateSpy).toHaveBeenCalledWith({land: 'browser'});
    expect(boilerBuildSpy).toHaveBeenCalledTimes(1);
    expect(routerSpy).toHaveBeenCalledWith(["/framework"]);
  });

  it('should have title and item', () => {
    const title = compiled.querySelector('picker-toolbar');
    const card = compiled.querySelectorAll('picker-card');
    expect(title.getAttribute('ng-reflect-title')).toEqual(component.title);

    const item = card[0].getAttribute('ng-reflect-item');
    expect(item).toBeDefined();
  });
});
