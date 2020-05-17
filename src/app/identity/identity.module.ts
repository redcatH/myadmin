import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RoleListComponent } from './role/Role-list.component';
import { RoleEditComponent } from './role/Role-edit.component';
import { FormsModule } from '@angular/forms';
import { PermissionsComponent } from './permissions/permissions.component';


@NgModule({
  declarations: [RoleListComponent,RoleEditComponent, PermissionsComponent],
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
