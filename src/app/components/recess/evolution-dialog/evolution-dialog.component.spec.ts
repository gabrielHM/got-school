import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionDialogComponent } from './evolution-dialog.component';

describe('EvolutionDialogComponent', () => {
  let component: EvolutionDialogComponent;
  let fixture: ComponentFixture<EvolutionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
