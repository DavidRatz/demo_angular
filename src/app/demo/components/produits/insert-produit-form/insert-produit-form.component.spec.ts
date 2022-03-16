import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProduitFormComponent } from './insert-produit-form.component';

describe('InsertProduitFormComponent', () => {
  let component: InsertProduitFormComponent;
  let fixture: ComponentFixture<InsertProduitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertProduitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertProduitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
