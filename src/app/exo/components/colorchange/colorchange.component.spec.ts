import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorchangeComponent } from './colorchange.component';

describe('ColorchangeComponent', () => {
  let component: ColorchangeComponent;
  let fixture: ComponentFixture<ColorchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
