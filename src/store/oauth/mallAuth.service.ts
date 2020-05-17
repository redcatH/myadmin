import { Injectable } from '@angular/core';
import { UserInfoStore } from './userInfo.store';
import { Observable, observable } from 'rxjs';
import * as qs from 'qs';
import { HttpClient } from '@angular/common/http';
import { PublicProxyService, AppUserDto } from 'src/api/appService';
// import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MallAuthService {
  constructor(
    private store: UserInfoStore,
    private http: HttpClient,
    private publicProxyService: PublicProxyService,
    private oauthService:OAuthService
  ) {
    
    this.oauthService.configure(authPasswordConfig);
    this.oauthService.loadDiscoveryDocument();
    //this.oauthService.hasValidAccessToken();
  }

  get accountToken(){
    return this.oauthService.getAccessToken();
  }
  /**
   * 过期时间
   */
  get accountExpiration(){
    return this.oauthService.getAccessTokenExpiration();
  }
  login(username,password){
    return this.oauthService.fetchTokenUsingPasswordFlow(username,password);
    // .then(res=>{
    //   console.log(res);
    // }).catch(error=>{
    //   throw(error);
    // });
  }

  // getUserInfo(){
    
  // }
  // login(
  //   params: {
  //     /** requestBody */
  //     body?: UserLoginInfo;
  //   } = {} as any
  // ): Observable<IdentityServerLoginResultDto> {
  //   let url = '/connect/token';
  //   let options: any = {
  //     body: qs.stringify(params.body),
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     withCredentials: true
  //   };
  //   return (this.http.request('post', url, options) as any) as Observable<
  //     IdentityServerLoginResultDto
  //   >;
  // }
  public getUserInfo() {
    this.publicProxyService.currentUser().subscribe(userinfodto => {
      console.log(userinfodto.nickname);
      this.store.update(state => ({
        ...userinfodto
        //userstate=userinfodto;
        // tenantId=userinfodto.tenantId,
        // userName=userinfodto.userName,
        // name=userinfodto.name,
        // surname=userinfodto.surname,
        // email=userinfodto.email,
        // emailConfirmed=false,
        // phoneNumber=userinfodto.phoneNumber,
        // phoneNumberConfirmed= userinfodto.phoneNumberConfirmed,
        // nickname=userinfodto.nickname,
        // headImgUrl=userinfodto.headImgUrl,
        // userstate.isLogin=true
      }));
    });
  }

  //   getUserPermissions(){
  //       this.permissionsProxyService.permissions1
  //   }
}



export const authPasswordConfig: AuthConfig = {
  issuer:environment.oauth.issuer,
  clientId:environment.oauth.client_id,
  scope:environment.oauth.scop,
  dummyClientSecret:environment.oauth.client_secret,
  // tokenEndpoint:environment.oauth.issuer+"/connect/token",
  // userinfoEndpoint:environment.oauth.issuer+"/connect/userinfo",
  oidc:false
  
};

export interface IdentityServerLoginResultDto {
  access_token: string;
  expires_in: number;
  token_type: string;
  refresh_token: string;
  scope: string;
}

export interface UserLoginInfo {
  /**  */
  userNameOrEmailAddress?: string;

  /**  */
  password?: string;

  /**  */
  rememberMe?: boolean;

  /**  */
  tenanId?: string;

  client_id: string; //'Vue_Admin',
  client_secret: string; //'1q2w3e*',
  grant_type: string; //'password'
}
