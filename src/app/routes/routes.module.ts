import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { WorkplaceComponent } from './dashboard/workplace/workplace.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [WorkplaceComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    SharedModule
  ]
})
export class RoutesModule { }
