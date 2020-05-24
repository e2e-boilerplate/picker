import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlatformsComponent } from './platforms.component';
import { SharedModule } from '../shared/shared.module';
import { Platform, PlatformsService } from '@picker/core-data';
import { platforms, MockPlatformService } from '@picker/constants';

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
});
