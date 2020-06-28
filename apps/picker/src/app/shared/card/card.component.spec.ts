import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MaterialModule } from '@picker/material';
import { SUMMARY_CARD } from '@picker/constants';
import { CardComponent } from './card.component';
import { versionServiceMock, VersionService } from '@picker/core-data';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [MaterialModule, HttpClientTestingModule],
      providers: [
        { provide: VersionService, useValue: versionServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.item = {
      ...SUMMARY_CARD,
    };
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.item).toEqual(SUMMARY_CARD);
  });

  it('should emit on click', async () => {
    const selectedSpy = spyOn(component.selected, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');

    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    await fixture.whenStable();

    expect(selectedSpy).toHaveBeenCalledWith(SUMMARY_CARD.id);
  });

  it('selectedItem', () => {
    const selectedSpy = spyOn(component.selected, 'emit');
    component.selectedItem('protractor');

    expect(selectedSpy).toHaveBeenCalled();
    expect(selectedSpy).toHaveBeenCalledWith('protractor');
  });

  it('getVersion', (done) => {
    const versionSpy = spyOn(versionServiceMock, 'get').and.callThrough();
    const expectedVersion = '0.0.1'
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.version$).toBeTruthy();
    component.version$.subscribe(value => {
      expect(value).toEqual(expectedVersion);
      done();
    });
  });

  it('card header', () => {
    const title = compiled.querySelector('mat-card-title');
    const subtitle = compiled.querySelector('mat-card-subtitle');
    const expectedTitle = component.item.title + ' 0.0.1';

    expect(title.textContent).toEqual(expectedTitle);
    expect(subtitle.textContent).toEqual(component.item.subtitle);
  });

  it('card content', () => {
    const { description, summary, domain, maintained, link } = component.item;
    const content = compiled.querySelectorAll('p');
    const domainLink = compiled.querySelector('p > a');

    expect(content[0].textContent).toEqual(summary);
    expect(content[1].textContent).toEqual(description);
    expect(content[2].textContent).toContain(`${domain} | ${maintained}`);
    expect(domainLink.getAttribute('href')).toEqual(link);
    expect(domainLink.getAttribute('target')).toEqual('_blank');
  });
});
