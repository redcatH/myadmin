import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IdentityUserDto, IdentityUserUpdateDto, IdentityUserDtoPagedResultDto, IdentityUserCreateDto, IdentityUserUpdateRolesDto } from './Model/userModel';
import { Observable } from 'rxjs';
import { IdentityRoleDtoListResultDto } from './Model/identityModel';


@Injectable({ providedIn: 'root' })
export class UserProxyService {
  constructor(private http: HttpClient) {}

  /**
   *
   */
  getById(
      id: string
  ): Observable<IdentityUserDto> {
    let url = '/api/identity/users/'+id;
    // const _copy: any = { ...params };
    let options: any = {
    //   params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityUserDto>;
  } 
  /**
   *
   */
  update(
      id: string,
      body?: IdentityUserUpdateDto
  ): Observable<IdentityUserDto> {
    let url = '/api/identity/users/'+id;
    let options: any = {
      body: body,
      method: 'put'
    };
    return (this.http.request('put', url, options) as any) as Observable<IdentityUserDto>;
  }
  /**
   *
   */
  delete(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<any> {
    let url = '/api/identity/users/'+params.id;
    let options: any = {
      method: 'delete'
    };
    return (this.http.request('delete', url, options) as any) as Observable<any>;
  }
  /**
   *
   */
  get(
    params: {
      /**  */
      filter?: string;
      /**  */
      sorting?: string;
      /**  */
      skipCount?: number;
      /**  */
      maxResultCount?: number;
    } = {} as any
  ): Observable<IdentityUserDtoPagedResultDto> {
    let url = '/api/identity/users';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityUserDtoPagedResultDto>;
  }
  /**
   *
   */
  create(
    params: {
      /** requestBody */
      body?: IdentityUserCreateDto;
    } = {} as any
  ): Observable<IdentityUserDto> {
    let url = '/api/identity/users';
    let options: any = {
      body: params.body,
      method: 'post'
    };
    return (this.http.request('post', url, options) as any) as Observable<IdentityUserDto>;
  }
  /**
   *
   */
  getUserRoles(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<IdentityRoleDtoListResultDto> {
    let url = '/api/identity/users/'+params.id+'/roles';
    // const _copy: any = { ...params };
    let options: any = {
    //   params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityRoleDtoListResultDto>;
  }
  /**
   *
   */
  roles1(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: IdentityUserUpdateRolesDto;
    } = {} as any
  ): Observable<any> {
    let url = '/api/identity/users//roles';
    let options: any = {
      params: { id: params.id },
      body: params.body,
      method: 'put'
    };
    return (this.http.request('put', url, options) as any) as Observable<any>;
  }
  /**
   *
   */
  byUsername(
    params: {
      /**  */
      username: string;
    } = {} as any
  ): Observable<IdentityUserDto> {
    let url = '/api/identity/users/by-username/';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityUserDto>;
  }
  /**
   *
   */
  byEmail(
    params: {
      /**  */
      email: string;
    } = {} as any
  ): Observable<IdentityUserDto> {
    let url = '/api/identity/users/by-email/';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityUserDto>;
  }
}