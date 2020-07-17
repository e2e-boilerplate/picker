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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
