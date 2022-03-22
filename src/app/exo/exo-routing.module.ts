import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ExoParentComponent } from './components/exo-parent/exo-parent.component';
import { ExoComponent } from './exo.component';
import { FormProduitComponent } from './components/form-produit/form-produit.component';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { ProduitComponent } from './components/produit/produit.component';
import { MenuComponent } from './components/menu/menu.component';
import { PanierComponent } from './components/panier/panier.component';
import { GestionObjectifComponent } from './components/gestion-objectif/gestion-objectif.component';
import { ColorchangeComponent } from './components/colorchange/colorchange.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { PairComponent } from './components/input-number/pair/pair.component';
import { ImpairComponent } from './components/input-number/impair/impair.component';
import { EvenGuard } from '../guards/even.guard';
import { OddGuard } from '../guards/odd.guard';

const routes: Routes = [
  { path: '', component:ExoComponent, 
    children: [
      { path: 'input-validation', component:InputValidationComponent},
      { path: 'chrono', component:ChronoComponent},
      { path: 'produit', component:ProduitComponent},
      { path: 'exo-parent', component:ExoParentComponent},
      { path: 'form-produit', component:FormProduitComponent},
      { path: 'menu', component:MenuComponent},
      { path: 'panier', component:PanierComponent},
      { path: 'objectif', component:GestionObjectifComponent},
      { path: 'color', component:ColorchangeComponent},
      { path: 'input-number', component:InputNumberComponent},
      { path: 'input-number/pair/:number', component:PairComponent, canActivate: [EvenGuard]},
      { path: 'input-number/impair/:number', component:ImpairComponent, canActivate: [OddGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
