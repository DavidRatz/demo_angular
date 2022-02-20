import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoEnfant1Component } from './exo-enfant1.component';

describe('ExoEnfant1Component', () => {
  let component: ExoEnfant1Component;
  let fixture: ComponentFixture<ExoEnfant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoEnfant1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoEnfant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
