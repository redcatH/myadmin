import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { IconsProviderModule } from '../icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzLayoutModule, NzButtonModule, NzIconModule, NzNotificationService } from 'ng-zorro-antd';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { LUpdateImageComponent } from './component/l-update-image/l-update-image.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OssService } from 'src/store/oss/oss.services';
import { OssQuery } from '../../store/oss/oss.query';


let MyCompnent=[
  LUpdateImageComponent,
  
];

let NzModule=[    
  NzButtonModule,
  NzUploadModule,
  NzIconModule
]

@NgModule({
  declarations: [...MyCompnent],
  imports: [
    CommonModule,
    ...NzModule
  ],
  exports:[
    RouterModule,
    IconsProviderModule,
    NzMenuModule,
    NzSkeletonModule,
    NzLayoutModule,

    IconsProviderModule,
    ...NzModule,
    ...MyCompnent
    
  ],providers:[NzMessageService,NzNotificationService]
})
export class SharedModule { }
