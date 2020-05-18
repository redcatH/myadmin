import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PermissionListResultDto, UpdatePermissionsDto } from './Model/permissionModel';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PermissionsProxyService {
  constructor(private http: HttpClient) {}

  /**
   *
   */
  getPermissions(
    params: {
      /**  */
      providerName?: string;
      /**  */
      providerKey?: string;
    } = {} as any
  ): Observable<PermissionListResultDto> {
    let url = '/api/abp/permissions';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<PermissionListResultDto>;
  }
  /**
   *
   */
  updatePermissions(
    params: {
      /**  */
      providerName?: string;
      /**  */
      providerKey?: string;
      /** requestBody */
    } = {} as any, body: UpdatePermissionsDto
  ): Observable<any> {
    let url = '/api/abp/permissions';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      body: body,
      method: 'put'
    };
    return (this.http.request('put', url, options) as any) as Observable<any>;
  }
}