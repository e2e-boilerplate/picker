import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RunnerComponent } from './runner.component';
import { SharedModule } from '../shared/shared.module';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';
import { LAND } from '@picker/constants';
import {
  LandService,
  LandServiceMock
} from '@picker/core-data';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('RunnerComponent', () => {
  let component: RunnerComponent;
  let fixture: ComponentFixture<RunnerComponent>;
  const boilerFacadeMock = new BoilerFacadeMock();
  const landServiceMock = new LandServiceMock();
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule],
      declarations: [ RunnerComponent ],
      providers: [
        { provide: BoilerFacade, useValue: boilerFacadeMock},
        { provide: LandService, useValue: landServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
    expect(component.title).toEqual('Approach');

    const boilerUpdateSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'updateBoiler').and.callThrough();
    const boilerBuildSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildPath').and.callThrough();

    component.ngOnInit();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(boilerUpdateSpy).toHaveBeenCalledWith({runner: null});
    expect(boilerBuildSpy).toHaveBeenCalledTimes(1);
    component.runner$.subscribe(value => {
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
    const gotoSpy = spyOn<RunnerComponent>(component, 'goto').and.callThrough();
    const boilerUpdateSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'updateBoiler').and.callThrough();
    const boilerBuildSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildPath').and.callThrough();
    component.goto('jest');
    fixture.detectChanges();

    expect(gotoSpy).toHaveBeenCalledTimes(1);
    expect(gotoSpy).toHaveBeenCalledWith('jest');

    expect(boilerUpdateSpy).toHaveBeenCalledWith({runner: 'jest'});
    expect(boilerBuildSpy).toHaveBeenCalledTimes(1);

    expect(routerSpy).toHaveBeenCalledWith(["/assertion"]);
    expect(routerSpy).toHaveBeenCalledTimes(1);
  });
});
