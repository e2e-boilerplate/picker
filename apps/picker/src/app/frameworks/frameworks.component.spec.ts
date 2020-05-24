import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FrameworksComponent } from './frameworks.component';
import { SharedModule } from '../shared/shared.module';
import { Framework, FrameworksService, MockFrameworksService } from '@picker/core-data';
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
        { provide: FrameworksService, useClass: MockFrameworksService}
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
