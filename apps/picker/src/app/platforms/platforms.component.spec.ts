import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { PlatformsComponent } from './platforms.component';
import { SharedModule } from '../shared/shared.module';
import {
  Platform,
  PlatformsService,
  PlatformsServiceMock,
} from '@picker/core-data';
import { platforms } from '@picker/constants';

const mockRouter = { navigate: jasmine.createSpy('navigate') };

describe('PlatformsComponent', () => {
  let component: PlatformsComponent;
  let fixture: ComponentFixture<PlatformsComponent>;
  let platformsService: PlatformsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      declarations: [PlatformsComponent],
      providers: [{ provide: PlatformsService, useClass: PlatformsServiceMock }, { provide: Router, useValue: mockRouter }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformsComponent);
    component = fixture.componentInstance;
    platformsService = TestBed.inject(PlatformsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toContain('Platform');
  });

  it('should get Observable<Platform[]>', () => {
    const spy = jest.spyOn(platformsService, 'all');
    component.ngOnInit();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
    component.platforms$.subscribe((data) => {
      expect(data).toEqual(platforms);
    });
  });

  it('should have correct title binding', () => {
    const element = fixture.debugElement.query(By.css('picker-toolbar'));
    expect(element.nativeElement.getAttribute('ng-reflect-title')).toEqual(
      component.title
    );
  });

  it('should have platform cards', () => {
    const matCard = fixture.debugElement.queryAll(By.css('mat-card'));
    for (let i = 0; i < matCard.length; i++) {
      const matCardTitle = fixture.debugElement.queryAll(
        By.css('mat-card-title')
      );
      const title = matCardTitle[0].nativeElement.textContent;
      expect(title).toEqual(platforms[i].title);
      // TODO add test for all fields
    }
  });

  it('should navigate to [/frameworks/:id] when Select button clicked', () => {
    const elements = fixture.debugElement.queryAll(By.css('button'));
    elements[0].nativeElement.click();
    fixture.detectChanges();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/frameworks', 'id']);
  });
});
