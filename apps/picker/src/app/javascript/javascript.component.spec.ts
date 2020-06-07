import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { JavascriptComponent } from './javascript.component';
import { SharedModule } from '../shared/shared.module';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';

describe('JavascriptComponent', () => {
  let component: JavascriptComponent;
  let fixture: ComponentFixture<JavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule],
      declarations: [JavascriptComponent],
      providers: [{ provide: BoilerFacade, useClass: BoilerFacadeMock}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
