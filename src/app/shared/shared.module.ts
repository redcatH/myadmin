import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { IconsProviderModule } from '../icons-provider.module';
import { NzMenuModule, MenuService } from 'ng-zorro-antd/menu';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzLayoutModule, NzButtonModule, NzIconModule, NzNotificationService, NzPageHeaderModule, NzBreadCrumbModule, NzFormModule, NzInputModule, NzModalService, NzCheckboxModule, NzCardModule, NzTableModule, NzDividerModule, NzPopconfirmModule, NzDropDownModule, NzGridModule, NzTabsModule, NzSelectModule, NzTreeModule } from 'ng-zorro-antd';
import { NzUploadModule, NzUploadComponent } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OssService } from 'src/store/oss/oss.service';
import { OssQuery } from '../../store/oss/oss.query';
import { NG_VALUE_ACCESSOR, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TestuploadComponent } from './component/testupload/testupload.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { MallAuthService } from 'src/store/oauth/mallAuth.service';
import { LoginFormComponent } from './component/login-form/login-form.component';

let MyCompnent=[
  TestuploadComponent,
  LoginFormComponent
];

let NzModule=[    
  NzButtonModule,
  NzUploadModule,
  NzIconModule,
  NzPageHeaderModule,
  NzBreadCrumbModule,
  NzFormModule,
  NzCheckboxModule,
  NzCardModule,
  NzTableModule,
  NzDividerModule,
  NzPopconfirmModule,
  NzDropDownModule,
  NzGridModule,
  NzTabsModule,
  NzSelectModule,
  NzTreeModule
]

@NgModule({
  declarations: [...MyCompnent, LoginFormComponent],
  imports: [
    CommonModule,
    ...NzModule,
    OAuthModule.forRoot(),
    NzInputModule,
    ReactiveFormsModule
  ],
  exports:[
    RouterModule,
    IconsProviderModule,
    NzMenuModule,
    NzSkeletonModule,
    NzLayoutModule,
    IconsProviderModule,
    ...NzModule,
    ...MyCompnent,
    NzUploadComponent,
    OAuthModule,
    NzInputModule,
    ReactiveFormsModule
  ],providers:[NzMessageService,NzNotificationService,MenuService,MallAuthService,NzModalService]
})
export class SharedModule { }
