import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FrameworksComponent } from './frameworks.component';
import { SharedModule } from '../shared/shared.module';
import { Framework, FrameworksService, FrameworksServiceMock } from '@picker/core-data';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';
import { frameworks } from '@picker/constants';

const mockRouter = { navigate: jasmine.createSpy('frameworks') };

describe('FrameworksComponent', () => {
  let component: FrameworksComponent;
  let fixture: ComponentFixture<FrameworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule],
      declarations: [FrameworksComponent],
      providers: [
        { provide: FrameworksService, useClass: FrameworksServiceMock},
        { provide: BoilerFacade, useClass: BoilerFacadeMock}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
