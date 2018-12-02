import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpmathComponent } from './pvpmath.component';

describe('PvpmathComponent', () => {
  let component: PvpmathComponent;
  let fixture: ComponentFixture<PvpmathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvpmathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvpmathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
