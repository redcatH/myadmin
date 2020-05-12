import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LayoutModule } from '../layout/layout.module';
import {LayoutComponent} from '../layout/layout.component'
import { WorkplaceComponent } from './dashboard/workplace/workplace.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {path: '' , redirectTo: 'dashboard/workplace', pathMatch: 'full'},
      { path: 'dashboard/workplace', component: WorkplaceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
