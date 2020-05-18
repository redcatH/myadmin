import { map, tap } from 'rxjs/operators';
import { IdentityStore } from './identity.store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RolePrivateProxyService } from '../identityApi';
import { UserProxyService } from '../userApi';
import { IdentityUserDtoPagedResultDto, IdentityUserUpdateDto, IdentityUserCreateDto, IdentityUserDto } from '../Model/userModel';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private api: UserProxyService) {}

  getUsers(
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
    return this.api.get(params);
  }

  getUser(id:string){
    return this.api.getById(id);
  }

  getUserRole(id:string){
      return this.api.getUserRoles({id});
  }

  update(id: string,
    body: IdentityUserUpdateDto){
        return this.api.update(id,body);
  }

  delete(id: string): Observable<void> {
    return this.api.delete({
        id
    });
  }

  create(body:IdentityUserCreateDto):Observable<IdentityUserDto>{
    return this.api.create({
        body:body
    });
  }
  
}
