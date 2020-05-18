import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TenantDtoPagedResultDto, TenantUpdateDto, TenantDto, TenantCreateDto } from './Model/tenantModel';

@Injectable({ providedIn: 'root' })
export class TenantProxyService {
  constructor(private http: HttpClient) {}

  /**
   *
   */
  getTenantById(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<TenantDto> {
    let url = '/api/multi-tenancy/tenants/'+params.id;
    // const _copy: any = { ...params };
    let options: any = {
     // params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<TenantDto>;
  }
  /**
   *
   */
  updateTenants(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: TenantUpdateDto;
    } = {} as any
  ): Observable<TenantDto> {
    let url = '/api/multi-tenancy/tenants/'+params.id;
    let options: any = {
    //   params: { id: params.id },
      body: params.body,
      method: 'put'
    };
    return (this.http.request('put', url, options) as any) as Observable<TenantDto>;
  }
  /**
   *
   */
  deleteTenants(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<any> {
    let url = '/api/multi-tenancy/tenants/'+params.id;
    let options: any = {
    //   params: { id: params.id },
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
  ): Observable<TenantDtoPagedResultDto> {
    let url = '/api/multi-tenancy/tenants';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<TenantDtoPagedResultDto>;
  }
  /**
   *
   */
  create(
    params: {
      /** requestBody */
      body?: TenantCreateDto;
    } = {} as any
  ): Observable<TenantDto> {
    let url = '/api/multi-tenancy/tenants';
    let options: any = {
      body: params.body,
      method: 'post'
    };
    return (this.http.request('post', url, options) as any) as Observable<TenantDto>;
  }
  /**
   *
   */
  getDefaultConnectionString(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<string> {
    let url = '/api/multi-tenancy/tenants//default-connection-string';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<string>;
  }
  /**
   *
   */
  updateDefaultConnectionString(
    params: {
      /**  */
      id: string;
      /**  */
      defaultConnectionString?: string;
    } = {} as any
  ): Observable<any> {
    let url = '/api/multi-tenancy/tenants//default-connection-string';
    let options: any = {
      params: { id: params.id },
      body: params.defaultConnectionString,
      method: 'put'
    };
    return (this.http.request('put', url, options) as any) as Observable<any>;
  }
  /**
   *
   */
  deleteDefaultConnectionString(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<any> {
    let url = '/api/multi-tenancy/tenants//default-connection-string';
    let options: any = {
      params: { id: params.id },
      method: 'delete'
    };
    return (this.http.request('delete', url, options) as any) as Observable<any>;
  }
}