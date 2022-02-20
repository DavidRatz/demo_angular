import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { ChronoComponent } from './chrono/chrono.component';
import { SharedModule } from '../shared/shared.module';
import { ProduitComponent } from './produit/produit.component';
import { ExoParentComponent } from './exo-parent/exo-parent.component';
import { ExoEnfant1Component } from './exo-enfant1/exo-enfant1.component';
import { ExoEnfant2Component } from './exo-parent/exo-enfant2/exo-enfant2.component';
import { FormProduitComponent } from './form-produit/form-produit.component';


@NgModule({
  declarations: [
    InputValidationComponent,
    ExoComponent,
    ChronoComponent,
    ProduitComponent,
    ExoParentComponent,
    ExoEnfant1Component,
    ExoEnfant2Component,
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
