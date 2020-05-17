import { IdentityRoleDtoListResultDto } from 'src/api/appService';
import { Identity } from '../Model/identityModel';
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export function createInitialState():Identity.State{
    return {
        roles:[]
    }
}
@Injectable({providedIn:'root'})
@StoreConfig({
    name:'identity'
})
export class IdentityStore extends Store<Identity.State>{
    constructor(){
        super(createInitialState());
    }
}