import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrambbleComponent } from './scrambble.component';

describe('ScrambbleComponent', () => {
  let component: ScrambbleComponent;
  let fixture: ComponentFixture<ScrambbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrambbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrambbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
