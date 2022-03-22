import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoCommuComponent } from './components/demo-commu/demo-commu.component';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { DemoFormsComponent } from './components/demo-forms/demo-forms.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { ObsDemoComponent } from './components/obs-demo/obs-demo.component';
import { ListePlatComponent } from './components/liste-plat/liste-plat.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { DemoComponent } from './demo.component';
import { PlatComponent } from './components/plat/plat.component';
import { ConnexionGuard } from '../guards/connexion.guard';
import { PlatAsyncComponent } from './components/plat-async/plat-async.component';

const routes: Routes = [
  { path: '', component:DemoComponent, 
    children: [
      { path: 'binding', component:DemoBindingComponent},
      { path: 'pipe', component:DemoPipeComponent},
      { path: 'directive', component:DemoDirectiveComponent},
      { path: 'commu', component:DemoCommuComponent},
      { path: 'form', component:DemoFormsComponent},
      { path: 'produits', component: ProduitsComponent },
      { path: 'obs', component: ObsDemoComponent },
      { path: 'liste-plat', component: ListePlatComponent, canActivate: [ConnexionGuard] },
      { path: 'plat/:id', component: PlatComponent },
      { path: 'plat-async/:id', component: PlatAsyncComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
