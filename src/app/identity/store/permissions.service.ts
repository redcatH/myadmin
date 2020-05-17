import { map, tap } from 'rxjs/operators';
import { IdentityStore } from './identity.store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PermissionsProxyService } from '../permissonApi';
import {
  PermissionListResultDto,
  UpdatePermissionsDto
} from '../Model/permissionModel';
import { PermissionStore } from './permissions.store';
import { group } from '@angular/animations';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  constructor(
    private api: PermissionsProxyService,
    private store: PermissionStore
  ) {}

  getCurrentPermission() {}
  /**
   *
   * @param providerName R是Role, U是User
   * @param providerKey Role=组名称 ,  U=UserGuid
   */
  get(
    /**  */
    providerName?: string,
    /**  */
    providerKey?: string
  ): Observable<PermissionListResultDto> {
    return this.api
      .getPermissions({
        providerName,
        providerKey
      })
      .pipe(
        tap(res => {
          this.store.update({
            groups: res.groups,
            entityDisplayName: res.entityDisplayName
          });
        })
      );
    //   .pipe(
    //         tap(res=>{
    //             console.log(res);
    //             this.store.update({
    //                 roles:res.items
    //             })
    //         })
    //     );
  }

  Update(
    params: {
      /**  */
      providerName?: string;
      /**  */
      providerKey?: string;
      /** requestBody */
      body?: UpdatePermissionsDto;
    } = {} as any
  ): Observable<void> {
    return this.api.updatePermissions(params);
  }
}
