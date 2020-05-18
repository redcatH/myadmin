import { TenantProxyService } from '../tenantApi';
import { Injectable } from '@angular/core';
import { TenantDtoPagedResultDto, TenantDto, TenantUpdateDto, TenantCreateDto } from '../Model/tenantModel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class TenantsService {
  constructor(private api: TenantProxyService) {}

  getTenants():Observable<TenantDtoPagedResultDto>{
      return this.api.get();
  }

  getTenantById(id:string):Observable<TenantDto>{
      return this.api.getTenantById({id});
  }

  update(id:string,obj:TenantUpdateDto){
      return this.api.updateTenants({
        id,
        body:obj
      })
  }

  create(params: {
    /** requestBody */
    body?: TenantCreateDto;
  } = {} as any):Observable<TenantDto>{
    return this.api.create(params);
  }
  delete(id:string):Observable<any>{
      return this.api.deleteTenants({id
    });
  }
}