import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlatformsComponent } from './platforms.component';
import { SharedModule } from '../shared/shared.module';
import {
  Platform,
  PlatformsService,
  MockPlatformService,
} from '@picker/core-data';
import { platforms } from '@picker/constants';

describe('PlatformsComponent', () => {
  let component: PlatformsComponent;
  let fixture: ComponentFixture<PlatformsComponent>;
  let platformsService: PlatformsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule],
      declarations: [PlatformsComponent],
      providers: [{ provide: PlatformsService, useClass: MockPlatformService }],
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
    expect(component.title).toBe('Platform');
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

  it('should get selected platform', () => {
    component.setSelected('nodejs');
    fixture.detectChanges();
    expect(component.selectedPlatform).toEqual('nodejs');
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

      const matCardSubTitle = fixture.debugElement.queryAll(
        By.css('mat-card-subtitle')
      );
      const subtitle = matCardSubTitle[0].nativeElement.textContent;
      expect(subtitle).toEqual(platforms[i].subtitle);
      // TODO add test for all fields
    }
  });
});
