import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduitsItemComponent } from './list-produits-item.component';

describe('ListProduitsItemComponent', () => {
  let component: ListProduitsItemComponent;
  let fixture: ComponentFixture<ListProduitsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProduitsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProduitsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
