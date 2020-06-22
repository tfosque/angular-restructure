import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanitySelectorComponent } from './quanity-selector.component';

describe('QuanitySelectorComponent', () => {
  let component: QuanitySelectorComponent;
  let fixture: ComponentFixture<QuanitySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanitySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
