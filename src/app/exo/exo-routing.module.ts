import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './chrono/chrono.component';
import { ExoParentComponent } from './exo-parent/exo-parent.component';
import { ExoComponent } from './exo.component';
import { FormProduitComponent } from './form-produit/form-produit.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  { path: '', component:ExoComponent, 
    children: [
      { path: 'input-validation', component:InputValidationComponent},
      { path: 'chrono', component:ChronoComponent},
      { path: 'produit', component:ProduitComponent},
      { path: 'exo-parent', component:ExoParentComponent},
      { path: 'form-produit', component:FormProduitComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }