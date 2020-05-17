import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { LoginFormComponent } from 'src/app/shared/component/login-form/login-form.component';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { MallAuthService } from 'src/store/oauth/mallAuth.service';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private ModalService:NzModalService,
    private authService:MallAuthService,
    private router: Router
    ) { }
    isVisible:boolean=false;
  ngOnInit(): void {
    
    var modal=this.ModalService.create({
      nzTitle:'欢迎登录',
      nzWidth:'50vw',
      nzContent:LoginFormComponent,
      nzComponentParams:{
        userdto:
        {username:"",password:"", remember:false}
      },
      nzKeyboard:false,
      nzMaskClosable:false,
      nzClosable:false,
      nzFooter:[
        {
          label: '登录',
          type:'primary',
          loading:(contentComponentInstance?: LoginFormComponent)=>{
            if(contentComponentInstance.isLoad)
              return true;
            return false;
          },
          autoLoading:true,
          onClick: instance=>{
            if(instance.validateForm.valid){
              console.log("LoginFormComponent instance", instance);
              return new Promise((resolve,reject)=>{
                //console.log(this.authService.accountToken);
                return this.authService.login(instance.userdto.username,instance.userdto.password).then(p=>{
                  this.authService.getUserInfo();
                  this.isVisible=true;
                  console.log("登录成功");
                  this.router.navigate(['dashboard/workplace']);
                  resolve(true);
                  modal.destroy();
                }).catch((error)=>{
                  this.ModalService.error({
                    nzTitle: '登录失败',
                    nzContent: '账号或者密码错误!登录失败'
                  });
                  console.log("登录失败");
                  instance.userdto.password="";
                  resolve(false)
                })
              })
            }
          },
        }
      ]
    })
  }

  submitForm(): void{
    
  }
}
