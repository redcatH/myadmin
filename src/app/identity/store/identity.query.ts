import { Query } from '@datorama/akita';
import { Identity } from '../Model/identityModel';
import { IdentityStore } from './identity.store';
import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})
export class IdentityQuery extends Query<Identity.State> {
  user$ = this.select(state => state.roles);
  constructor(protected store: IdentityStore) {
    super(store);
  }
}
