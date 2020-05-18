import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { RoleListComponent } from './role/Role-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { TenantListComponent } from './tenant/tenant-list/tenant-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'roles',
    pathMatch: 'full'
  },
  {
   path:'',
    component: LayoutComponent,
    children: [
      {
        path: 'roles',
        component: RoleListComponent,
        data: { title: '角色管理' }
      }
    ]
  },
  {
    path:'',
     component: LayoutComponent,
     children: [
       {
         path: 'users',
         component: UserListComponent,
         data: { title: '用户管理' }
       }
     ]
   },
   {
    path:'',
     component: LayoutComponent,
     children: [
       {
         path: 'tenants',
         component: TenantListComponent,
         data: { title: '用户管理' }
       }
     ]
   }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityRoutingModule {}
