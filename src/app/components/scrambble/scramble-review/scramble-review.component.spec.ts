import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrambleReviewComponent } from './scramble-review.component';

describe('ScrambleReviewComponent', () => {
  let component: ScrambleReviewComponent;
  let fixture: ComponentFixture<ScrambleReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrambleReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrambleReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
