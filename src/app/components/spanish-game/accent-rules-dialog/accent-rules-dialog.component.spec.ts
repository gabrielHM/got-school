import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentRulesDialogComponent } from './accent-rules-dialog.component';

describe('AccentRulesDialogComponent', () => {
  let component: AccentRulesDialogComponent;
  let fixture: ComponentFixture<AccentRulesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccentRulesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccentRulesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
