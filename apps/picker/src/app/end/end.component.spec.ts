import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { EndComponent } from './end.component';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';
import { SharedModule } from '../shared/shared.module';


describe('EndComponent', () => {
  let component: EndComponent;
  let fixture: ComponentFixture<EndComponent>;
  const boilerFacadeMock = new BoilerFacadeMock();
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule],
      declarations: [ EndComponent ],
      providers: [
        { provide: BoilerFacade, useValue: boilerFacadeMock},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
    expect(component.title).toEqual('End');

    const buildHeaderSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildHeader').and.callThrough();

    component.ngOnInit();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(buildHeaderSpy).toHaveBeenCalledTimes(1);
    component.header$.subscribe(value => {
      expect(value).not.toEqual('');
    });
  });
});
