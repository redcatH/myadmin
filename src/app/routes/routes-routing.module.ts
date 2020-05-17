import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LayoutModule } from '../layout/layout.module';
import { LayoutComponent } from '../layout/layout.component';
import { WorkplaceComponent } from './dashboard/workplace/workplace.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard/workplace', pathMatch: 'full' },
      { path: 'dashboard/workplace', component: WorkplaceComponent }
    ]
  },
  {
    path: 'app-management',
    loadChildren: () =>
      import('../app-management/app-management.module').then(
        m => m.AppManagementModule
      ),
    data: { breadcrumb: '小程序管理' }
  },
  {
    path: 'public',
    loadChildren: () =>
      import('../public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'identity',
    loadChildren: () =>
      import('../identity/identity.module').then(m => m.IdentityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule {}
