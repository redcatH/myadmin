import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { WorkplaceComponent } from './dashboard/workplace/workplace.component';
import { SharedModule } from '../shared/shared.module';
import { MenuService } from '../core/menu/menu.service';
import { menu } from './menu';


@NgModule({
  declarations: [WorkplaceComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    SharedModule
  ]
})
export class RoutesModule {
  constructor(private menuService:MenuService){
    this.menuService.addMenu(menu);
  }
 }
