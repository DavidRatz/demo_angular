import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatAsyncComponent } from './plat-async.component';

describe('PlatAsyncComponent', () => {
  let component: PlatAsyncComponent;
  let fixture: ComponentFixture<PlatAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
