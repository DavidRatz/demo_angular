import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoComponent } from './demo.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { NavComponent } from './components/nav/nav.component';
import { SharedModule } from '../shared/shared.module';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { GreenBgDirective } from './directives/green-bg.directive';
import { DemoCommuComponent } from './components/demo-commu/demo-commu.component';
import { DemoCommuEnfantComponent } from './components/demo-commu-enfant/demo-commu-enfant.component';
import { ChildTextDirective } from './directives/child-text.directive';
import { DemoFormsComponent } from './components/demo-forms/demo-forms.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { InsertProduitFormComponent } from './components/produits/insert-produit-form/insert-produit-form.component';
import { ListProduitsComponent } from './components/produits/list-produits/list-produits.component';
import { ListProduitsItemComponent } from './components/produits/list-produits/list-produits-item/list-produits-item.component';
import { ObsDemoComponent } from './components/obs-demo/obs-demo.component';
import { ListePlatComponent } from './components/liste-plat/liste-plat.component';
import { PlatComponent } from './components/plat/plat.component';
import { PlatAsyncComponent } from './components/plat-async/plat-async.component';


@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoComponent,
    DemoPipeComponent,
    NavComponent,
    DemoDirectiveComponent,
    HighlightDirective,
    GreenBgDirective,
    DemoCommuComponent,
    DemoCommuEnfantComponent,
    ChildTextDirective,
    DemoFormsComponent,
    ProduitsComponent,
    InsertProduitFormComponent,
    ListProduitsComponent,
    ListProduitsItemComponent,
    ObsDemoComponent,
    ListePlatComponent,
    PlatComponent,
    PlatAsyncComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
