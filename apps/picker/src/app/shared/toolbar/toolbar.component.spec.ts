import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '@picker/material';
import { BoilerFacade, BoilerFacadeMock } from '@picker/boiler';
import { of } from 'rxjs';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  const boilerFacadeMock = new BoilerFacadeMock();
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [MaterialModule],
      providers: [{ provide: BoilerFacade, useValue: boilerFacadeMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toBeUndefined();
  });

  it('should get title', async () => {
    const expectedTitle = 'Platform';
    component.title = expectedTitle;
    fixture.detectChanges();
    await fixture.whenStable();

    const title = fixture.debugElement.query(By.css('#title')).nativeElement;
    expect(title.textContent).toContain(expectedTitle);
  });

  it('should initialize', async() => {
    const boilerSpy = spyOn<BoilerFacadeMock>(boilerFacadeMock, 'buildHeader').and.callThrough();

    component.ngOnInit();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(boilerSpy).toHaveBeenCalledTimes(1);
    component.header$.subscribe(value => {
      expect(value).toEqual('');
    });
  });

  it('should have title and header', async() => {
    const title = compiled.querySelector('#title');
    const header = compiled.querySelector('#picks');
    const expectedTitle = 'nodejs';

    component.ngOnInit();
    component.title = expectedTitle;
    component.header$ = of('nodejs framework');
    fixture.detectChanges();
    await fixture.whenStable();

    expect(title.textContent).toEqual(`Choose your ${expectedTitle}`);
    component.header$.subscribe(value => {
      expect(header.textContent).toEqual(value);
    });
  });
});
