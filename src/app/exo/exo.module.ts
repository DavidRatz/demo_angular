import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { ChronoComponent } from './components/chrono/chrono.component';
import { SharedModule } from '../shared/shared.module';
import { ProduitComponent } from './components/produit/produit.component';
import { ExoParentComponent } from './exo-parent/exo-parent.component';
import { ExoEnfantComponent } from './exo-parent/exo-enfant/exo-enfant.component';
import { FormProduitComponent } from './components/form-produit/form-produit.component';


@NgModule({
  declarations: [
    InputValidationComponent,
    ExoComponent,
    ChronoComponent,
    ProduitComponent,
    ExoParentComponent,
    ExoEnfantComponent,
    FormProduitComponent
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
