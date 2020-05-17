import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoQuery } from 'src/store/oauth/userInfo.query';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private userInfoQuer: UserInfoQuery
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(next.data.permission);

    return new Promise((resolve, reject) => {
      this.userInfoQuer.isLogin$.subscribe(p => {
        console.log(p?"登录":"未登录!");
        if(p)
          resolve(true);
        else
          resolve(true);
      });
    });

    //  return true;
  }
}
