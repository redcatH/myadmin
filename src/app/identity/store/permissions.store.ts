// import { IdentityRoleDtoListResultDto } from 'src/api/appService';
// import { Identity } from '../Model/identityModel';
// import { Store, StoreConfig } from '@datorama/akita';
// import { Injectable } from '@angular/core';

import {
  PermissionGroupDto,
  PermissionListResultDto
} from '../Model/permissionModel';
import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

export function createInitialState(): PermissionListResultDto {
  return {
    entityDisplayName: '',
    groups: [
      {
        name: '',
        displayName: '',
        permissions: [
          {
            name: '',
            displayName: '',
            parentName: '',
            isGranted: false,
            allowedProviders: [],
            grantedProviders: []
          }
        ]
      }
    ]
  };
}
@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'permissionquery'
})
export class PermissionStore extends Store<PermissionListResultDto> {
  constructor() {
    super(createInitialState());
  }
}
