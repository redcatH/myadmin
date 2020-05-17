import { Component, OnInit, ViewChild } from '@angular/core';
import { TestuploadComponent } from 'src/app/shared/component/testupload/testupload.component';

import { setStore } from 'src/app/core/utils/storage';
import { MallAuthService } from 'src/store/oauth/mallAuth.service';


@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss'],
})
export class WorkplaceComponent implements OnInit {
  // @ViewChild(TestuploadComponent)  upld:TestuploadComponent;
  constructor(
    private authService:MallAuthService
    ) { }

  ngOnInit() {
    // let userform:any={};
    // userform.client_id="Mall_Web";
    // userform.client_secret="1q2w3e*";
    // userform.grant_type="password";
    // userform.scop="Mall";
    // //下面是用户和密码
    // userform.username="admin";
    // userform.password="1q2w3E*";
   
    // this.loginService.login(userform.username,userform.password).then(p=>{
    //   console.log(p);
    // });
    // this.loginService.login({body:userform}).subscribe(p=>{
    //   setStore("token",p);
    //   this.loginService.getUserInfo();
    //   console.log(p);
    // })
  }
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

  client_id: string;//'Vue_Admin',
  client_secret: string;//'1q2w3e*',
  grant_type: string;//'password'
}

