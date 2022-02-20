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
    DemoFormsComponent
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
