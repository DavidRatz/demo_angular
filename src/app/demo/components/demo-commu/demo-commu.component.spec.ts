import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCommuComponent } from './demo-commu.component';

describe('DemoCommuComponent', () => {
  let component: DemoCommuComponent;
  let fixture: ComponentFixture<DemoCommuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCommuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCommuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
