import { AppUserDto } from 'src/api/appService';
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface UserInfoState{
      /**  */
  tenantId?: string;

  /**  */
  userName?: string;

  /**  */
  name?: string;

  /**  */
  surname?: string;

  /**  */
  email?: string;

  /**  */
  emailConfirmed?: boolean;

  /**  */
  phoneNumber?: string;

  /**  */
  phoneNumberConfirmed?: boolean;

  /**  */
  nickname?: string;

  /**  */
  headImgUrl?: string;
}

export function createInitialState():UserInfoState{
    return {
        tenantId:"",

        /**  */
        userName:"",
      
        /**  */
        name:"",
      
        /**  */
        surname:"",
      
        /**  */
        email:"",
      
        /**  */
        emailConfirmed:false,
      
        /**  */
        phoneNumber:"",
      
        /**  */
        phoneNumberConfirmed: false,
      
        /**  */
        nickname:"",
      
        /**  */
        headImgUrl:""
    }
}

@Injectable({providedIn:'root'})
@StoreConfig({ name: "userinfo" })
export class UserInfoStore extends Store<UserInfoState>{
    constructor(){
        super(createInitialState());
    }
}