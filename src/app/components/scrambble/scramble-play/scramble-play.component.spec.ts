import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScramblePlayComponent } from './scramble-play.component';

describe('ScramblePlayComponent', () => {
  let component: ScramblePlayComponent;
  let fixture: ComponentFixture<ScramblePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScramblePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScramblePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
