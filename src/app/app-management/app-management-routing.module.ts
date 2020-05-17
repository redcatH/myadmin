import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AppsComponent } from './apps/apps.component';
import { AuthGuardGuard } from '../core/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'apps', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'apps',
        component: AppsComponent,
        data: { title: '应用列表', permission: 'pages' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppManagementRoutingModule {}
