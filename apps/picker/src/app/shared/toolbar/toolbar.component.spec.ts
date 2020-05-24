import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '@picker/material';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [MaterialModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toBeUndefined();
  });

  it('should get title', async () => {
    const expectedTitle = "Platform";
    component.title = expectedTitle;
    fixture.detectChanges();
    await fixture.whenStable();

    const title = fixture.debugElement.query(By.css('#title')).nativeElement;
    expect(title.textContent).toContain(expectedTitle);
  });
});
