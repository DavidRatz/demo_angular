import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { ChronoComponent } from './components/chrono/chrono.component';
import { SharedModule } from '../shared/shared.module';
import { ProduitComponent } from './components/produit/produit.component';
import { FormProduitComponent } from './components/form-produit/form-produit.component';
import { ExoParentComponent } from './components/exo-parent/exo-parent.component';
import { ExoEnfantComponent } from './components/exo-parent/exo-enfant/exo-enfant.component';
import { MenuComponent } from './components/menu/menu.component';
import { PanierComponent } from './components/panier/panier.component';
import { GestionObjectifComponent } from './components/gestion-objectif/gestion-objectif.component';
import { ColorchangeComponent } from './components/colorchange/colorchange.component';


@NgModule({
  declarations: [
    InputValidationComponent,
    ExoComponent,
    ChronoComponent,
    ProduitComponent,
    ExoParentComponent,
    ExoEnfantComponent,
    FormProduitComponent,
    MenuComponent,
    PanierComponent,
    GestionObjectifComponent,
    ColorchangeComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ExoModule { }
