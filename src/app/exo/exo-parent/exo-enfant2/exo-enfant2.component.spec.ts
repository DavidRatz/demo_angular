import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoEnfant2Component } from './exo-enfant2.component';

describe('ExoEnfant2Component', () => {
  let component: ExoEnfant2Component;
  let fixture: ComponentFixture<ExoEnfant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoEnfant2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoEnfant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
