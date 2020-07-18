import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ModuleComponent } from './module.component';
import { SharedModule } from '../shared/shared.module';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';
import { LAND } from '@picker/constants';
import {
  LandService,
  LandServiceMock
} from '@picker/core-data';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('ModuleComponent', () => {
  let component: ModuleComponent;
  let fixture: ComponentFixture<ModuleComponent>;
  const boilerFacadeMock = new BoilerFacadeMock();
  const landServiceMock = new LandServiceMock();
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule],
      declarations: [ ModuleComponent ],
      providers: [
        { provide: BoilerFacade, useValue: boilerFacadeMock},
        { provide: LandService, useValue: landServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleComponent);
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

    expect(boilerUpdateSpy).toHaveBeenCalledWith({module: null});
    expect(boilerBuildSpy).toHaveBeenCalledTimes(1);
    component.module$.subscribe(value => {
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

  it('goto typescript',  () => {
    const router: Router = TestBed.inject(Router);
    const gotoSpy = spyOn<ModuleComponent>(component, 'goto').and.callThrough();
    const boilerUpdateSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'updateBoiler').and.callThrough();
    const boilerPathSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildPath').and.callThrough();
    const routerSpy = spyOn<Router>(router, 'navigate');
    component.header$ = of('typescript cypress browser');
    component.goto('typescript');
    fixture.detectChanges();

    expect(gotoSpy).toHaveBeenCalledTimes(1);
    expect(gotoSpy).toHaveBeenCalledWith('typescript');

    expect(boilerUpdateSpy).toHaveBeenCalledWith({module: 'typescript'});
    expect(boilerPathSpy).toHaveBeenCalledTimes(1);

    expect(routerSpy).toHaveBeenCalledWith(["/bundler"]);
    expect(routerSpy).toHaveBeenCalledTimes(1);
  });

  it('goto es-module',  () => {
    const router: Router = TestBed.inject(Router);
    const gotoSpy = spyOn<ModuleComponent>(component, 'goto').and.callThrough();
    const boilerUpdateSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'updateBoiler').and.callThrough();
    const boilerPathSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildPath').and.callThrough();
    const routerSpy = spyOn<Router>(router, 'navigate');
    component.header$ = of('es-modules cypress browser');
    component.goto('es-modules');
    fixture.detectChanges();

    expect(gotoSpy).toHaveBeenCalledTimes(1);
    expect(gotoSpy).toHaveBeenCalledWith('es-modules');

    expect(boilerUpdateSpy).toHaveBeenCalledWith({module: 'es-modules'});
    expect(boilerPathSpy).toHaveBeenCalledTimes(1);

    expect(routerSpy).toHaveBeenCalledWith(["/runner"]);
    expect(routerSpy).toHaveBeenCalledTimes(1);
  });
});
