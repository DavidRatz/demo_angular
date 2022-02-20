import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCommuEnfantComponent } from './demo-commu-enfant.component';

describe('DemoCommuEnfantComponent', () => {
  let component: DemoCommuEnfantComponent;
  let fixture: ComponentFixture<DemoCommuEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCommuEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCommuEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
