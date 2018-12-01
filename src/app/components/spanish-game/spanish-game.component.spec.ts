import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishGameComponent } from './spanish-game.component';

describe('SpanishGameComponent', () => {
  let component: SpanishGameComponent;
  let fixture: ComponentFixture<SpanishGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
