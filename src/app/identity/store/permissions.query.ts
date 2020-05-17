

import { PermissionListResultDto } from '../Model/permissionModel';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { PermissionStore } from './permissions.store';

@Injectable({providedIn:'root'})
export class permissionQuery extends Query<PermissionListResultDto> {
  permissionGroup$ = this.select(state => state.groups);
  constructor(protected store: PermissionStore) {
    super(store);
  }
}
