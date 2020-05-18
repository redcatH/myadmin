import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RoleListComponent } from './role/Role-list.component';
import { RoleEditComponent } from './role/Role-edit.component';
import { FormsModule } from '@angular/forms';
import { PermissionsComponent } from './permissions/permissions.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { TenantListComponent } from './tenant/tenant-list/tenant-list.component';
import { TenantEditOrUpdateComponent } from './tenant/tenant-edit-or-update/tenant-edit-or-update.component';


@NgModule({
  declarations: [RoleListComponent,RoleEditComponent, PermissionsComponent, UserListComponent, UserEditComponent, TenantListComponent, TenantEditOrUpdateComponent],
  imports: [
    CommonModule,
    IdentityRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports:[
    
  ]
})
export class IdentityModule { }
