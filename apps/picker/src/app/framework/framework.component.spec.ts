import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

import { FrameworkComponent } from './framework.component';
import { SharedModule } from '../shared/shared.module';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';
import { LAND } from '@picker/constants';
import {
  LandService,
  LandServiceMock
} from '@picker/core-data';

describe('FrameworkComponent', () => {
  let component: FrameworkComponent;
  let fixture: ComponentFixture<FrameworkComponent>;
  const boilerFacadeMock = new BoilerFacadeMock();
  const landServiceMock = new LandServiceMock();
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule],
      declarations: [ FrameworkComponent ],
      providers: [
        { provide: BoilerFacade, useValue: boilerFacadeMock},
        { provide: LandService, useValue: landServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
    expect(component.title).toEqual('Framework');

    const boilerUpdateSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'updateBoiler').and.callThrough();
    const boilerBuildSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildPath').and.callThrough();

    component.ngOnInit();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(boilerUpdateSpy).toHaveBeenCalledWith({framework: null});
    expect(boilerBuildSpy).toHaveBeenCalledTimes(1);
    component.framework$.subscribe(value => {
      expect(value).toEqual(LAND);
    });
  });

  it('goto',  () => {
    const router: Router = TestBed.inject(Router);
    const gotoSpy = spyOn<FrameworkComponent>(component, 'goto').and.callThrough();
    const boilerUpdateSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'updateBoiler').and.callThrough();
    const boilerPathSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildPath').and.callThrough();
    const routerSpy = spyOn<Router>(router, 'navigate');
    component.goto('cypress');
    fixture.detectChanges();

    expect(gotoSpy).toHaveBeenCalledTimes(1);
    expect(gotoSpy).toHaveBeenCalledWith('cypress');

    expect(boilerUpdateSpy).toHaveBeenCalledWith({framework: 'cypress'});
    expect(boilerPathSpy).toHaveBeenCalledTimes(1);

    expect(routerSpy).toHaveBeenCalledWith(["/javascript"]);
    expect(routerSpy).toHaveBeenCalledTimes(1);
  });

  it('should have title and item', () => {
    const title = compiled.querySelector('picker-toolbar');
    expect(title.getAttribute('ng-reflect-title')).toEqual(component.title);

    const card = compiled.querySelectorAll('picker-card');
    const item = card[0].getAttribute('ng-reflect-item');
    expect(item).toBeDefined();
  });
});
