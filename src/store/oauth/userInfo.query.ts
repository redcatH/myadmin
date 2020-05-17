import { Query } from '@datorama/akita';
import { UserInfoState, UserInfoStore } from './userInfo.store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class UserInfoQuery extends Query<UserInfoState>{
        headImageUrl$=this.select(p=>p.headImgUrl);
        nickname$=this.select(p=>p.nickname);
        isLogin$=this.select(p=> p.userName!="" );

        constructor(protected state: UserInfoStore){
            super(state);
        }
}