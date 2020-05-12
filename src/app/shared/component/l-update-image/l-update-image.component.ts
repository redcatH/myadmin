import { Component,OnChanges, Injector, forwardRef } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { Observable, Observer } from "rxjs";
import {
  HttpRequest,
  HttpClient,
  HttpEvent,
  HttpResponse,
  HttpEventType,
  HttpHeaders
} from "@angular/common/http";
import { UploadXHRArgs, UploadFile } from "ng-zorro-antd";
import { OssQuery } from 'src/store/oss/oss.query';
import { OssService } from 'src/store/oss/oss.services';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: "app-l-update-image",
//   providers: [
//     {
//         provide: NG_VALUE_ACCESSOR,
//         useExisting: forwardRef(() => LUpdateImageComponent),
//         multi: true,
//     },
// ],
  template: `
    <nz-upload
      class="avatar-uploader"
      [nzAction]="uploadHost"
      nzName="avatar"
      nzListType="picture-card"
      [nzShowUploadList]="false"
      [nzBeforeUpload]="beforeUpload"
      (nzChange)="handleChange($event)"
      [(nzFileList)]="imglist"
      [nzCustomRequest]="customReq"
      [nzRemove]="handleRemove"
    >
      <ng-container *ngIf="!avatarUrl">
        <i
          class="upload-icon"
          nz-icon
          [nzType]="loading ? 'loading' : 'plus'"
        ></i>
        <div class="ant-upload-text">Upload</div>
      </ng-container>
      <img *ngIf="avatarUrl" [src]="avatarUrl" class="avatar" />
    </nz-upload>
  `,
  styleUrls: ["./l-update-image.component.css"],
})
export class LUpdateImageComponent implements OnChanges {
  loading = false;
  avatarUrl: String;
  imglist: any[] = [];
  token: string;
  uploadHost:string
  constructor(private injector: Injector ,private msg: NzMessageService, private http: HttpClient,private ossService:OssService,private ossQuer:OssQuery) {
    
    ossQuer.uploadHost$.subscribe(res=>{
      this.uploadHost=res
    })
    ossQuer.token$.subscribe(res=>{
      this.token=res
    })
  }
  
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    
  }

  handleRemove(item:any){
      console.log(this.token);
  }
  customReq(item: UploadXHRArgs) {
    let temp=this.injector.get(OssQuery);
    //this.ossQuer.token$.subscribe(res=>this.token=res);
    console.log(this.ossQuer);
    const formData = new FormData();
    formData.append("file", item.file as any);
    // formData.append("key", item.file.name);
    formData.append("fname", item.file.name);
    formData.append("x:name",item.file.name);
    formData.append("token",
    this.token
    );
    const req = new HttpRequest("POST", item.action!, formData, {
      reportProgress: true,
      withCredentials: false,
      headers:new HttpHeaders().set("Authorization","Qiniu "+this.token)
    });
    return this.http.request(req).subscribe(
      (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total! > 0) {
            // tslint:disable-next-line:no-any
            (event as any).percent = (event.loaded / event.total!) * 100;
          }
          item.onProgress!(event, item.file!);
        } else if (event instanceof HttpResponse) {
          item.onSuccess!(event.body, item.file!, event);
        }
      },
      (err) => {
        item.onError!(err, item.file!);
      }
    );

    // let config = {
    //   useCdnDomain: true,
    //   region: qiniu.region.z2,
    // };
    // let key, token: string;
    // key="WbgJUl7kTMpc3TvditNRy:J7sV8MP1ijXRK3TaEnSPJjhp3xs=:eyJkZWFkbGluZSI6MCwibWltZUxpbWl0IjoiaW1hZ2UvanBlZztpbWFnZS9wbmcifQ==";
    // let observable = qiniu.upload(item.file, item.file.name, token, config);
    // let observer = {
    //   next(res) {
    //     console.log(res);
    //   },
    //   error(err) {
    //     console.log(err);
    //   },
    //   complete(res) {
    //     console.log(res);
    //   },
    // };
    // observable.subscribe(observer);
  }

  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJPG = file.type === "image/jpeg";
      if (!isJPG) {
        this.msg.error("You can only upload JPG file!");
        observer.complete();
        return;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error("Image must smaller than 2MB!");
        observer.complete();
        return;
      }
      // check height
      this.checkImageDimension(file).then((dimensionRes) => {
        if (!dimensionRes) {
          this.msg.error("Image only 300x300 above");
          observer.complete();
          return;
        }
        observer.next(isJPG && isLt2M && dimensionRes);
        observer.complete();
      });
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  private checkImageDimension(file: File): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image(); // create image
      img.src = window.URL.createObjectURL(file);
      resolve(true); //不检测大小
      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        window.URL.revokeObjectURL(img.src!);
        resolve(width === height && width >= 300);
      };
    });
  }

  handleChange(info: { file: UploadFile }): void {
    console.log(info.file.status);
    switch (info.file.status) {
      case "uploading":
        this.loading = true;
        break;
      case "done":
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case "error":
        this.msg.error("Network error");
        this.loading = false;
        break;
    }
  }
}
