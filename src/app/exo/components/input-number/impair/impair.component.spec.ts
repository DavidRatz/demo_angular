import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpairComponent } from './impair.component';

describe('ImpairComponent', () => {
  let component: ImpairComponent;
  let fixture: ComponentFixture<ImpairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
