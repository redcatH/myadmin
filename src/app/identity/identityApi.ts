import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdentityRoleDtoListResultDto, IdentityRoleDtoPagedResultDto, IdentityRoleCreateDto, IdentityRoleDto, IdentityRoleUpdateDto } from './Model/identityModel';

@Injectable({ providedIn: 'root' })
export class RolePrivateProxyService {
  constructor(private http: HttpClient) {}

  /**
   *获取所有组
   */
  all(): Observable<IdentityRoleDtoListResultDto> {
    let url = '/api/identity/roles/all';
    let options: any = {
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityRoleDtoListResultDto>;
  }
  /**
   *
   */
  roles(
    params: {
      /**  */
      sorting?: string;
      /**  */
      skipCount?: number;
      /**  */
      maxResultCount?: number;
    } = {} as any
  ): Observable<IdentityRoleDtoPagedResultDto> {
    let url = '/api/identity/roles';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityRoleDtoPagedResultDto>;
  }
  /**
   *
   */
  createRole(
    params: {
      /** requestBody */
      body?: IdentityRoleCreateDto;
    } = {} as any
  ): Observable<IdentityRoleDto> {
    let url = '/api/identity/roles';
    let options: any = {
      body: params.body,
      method: 'post'
    };
    return (this.http.request('post', url, options) as any) as Observable<IdentityRoleDto>;
  }
  /**
   *
   */
  getRole(
      /**  */
      id: string
  ): Observable<IdentityRoleDto> {
    let url = '/api/identity/roles/'+id;
    //const _copy: any = { ...params };
    let options: any = {
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityRoleDto>;
  }
  /**
   *
   */
  updateRole(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: IdentityRoleUpdateDto;
    } = {} as any
  ): Observable<IdentityRoleDto> {
    let url = '/api/identity/roles/'+params.id;
    let options: any = {
     // params: { id: params.id },
      body: params.body,
      method: 'put'
    };
    return (this.http.request('put', url, options) as any) as Observable<IdentityRoleDto>;
  }
  /**
   *
   */
  deleteRole(
    id: string = ""
  ): Observable<any> {
    let url = '/api/identity/roles/'+id;
    let options: any = {
      method: 'delete'
    };
    return (this.http.request('delete', url, options) as any) as Observable<any>;
  }
}