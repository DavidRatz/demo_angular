import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoParentComponent } from './exo-parent.component';

describe('ExoParentComponent', () => {
  let component: ExoParentComponent;
  let fixture: ComponentFixture<ExoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
