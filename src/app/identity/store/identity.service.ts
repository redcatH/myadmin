
import { map, tap } from 'rxjs/operators';
import { IdentityStore } from './identity.store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RolePrivateProxyService } from '../identityApi';


@Injectable({providedIn:'root'})
export class IdentityService{
    constructor(
        private api: RolePrivateProxyService,
        private store: IdentityStore
        ){

    }


    getRoles(parms:{}){
       this.api.all()
      .subscribe(p=>{
        console.log(p);
                    this.store.update({
                        roles:p.items
                    })
      });
    //   .pipe(
    //         tap(res=>{
    //             console.log(res);
    //             this.store.update({
    //                 roles:res.items
    //             })
    //         })
    //     );
    }

    delete(id:string):Observable<void>{
        return this.api.deleteRole(id)
    }
}