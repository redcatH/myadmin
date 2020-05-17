import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppManagementRoutingModule } from './app-management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { EditAppComponent } from './edit-app/edit-app.component';
import { AppsComponent } from './apps/apps.component';


@NgModule({
  declarations: [EditAppComponent, AppsComponent],
  imports: [
    CommonModule,
    AppManagementRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class AppManagementModule { }
