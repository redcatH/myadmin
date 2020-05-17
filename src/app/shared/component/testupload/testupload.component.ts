import { Component, Input, ViewChild, NgZone } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadFile, NzUploadComponent } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { OssQuery } from 'src/store/oss/oss.query';
import { OssService } from 'src/store/oss/oss.service';
import {
  HttpRequest,
  HttpHeaders,
  HttpEvent,
  HttpEventType,
  HttpResponse,
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-testupload',
  templateUrl: './testupload.component.html',
  styleUrls: ['./testupload.component.css']
})
export class TestuploadComponent {
  @ViewChild('host') upload: NzUploadComponent;
  _value: any;
  imgList: any[] = [];
  @Input() length: number = 1;
  loading = false;
  avatarUrl?: string;
  tokenss: string = '132';
  actionHost: string;
  constructor(
    private msg: NzMessageService,
    public ossQuer: OssQuery,
    public ossService: OssService,
    public http: HttpClient,
    private zone: NgZone
  ) {}

  get value(): any {
    return this._value;
  }
  custReq = (item: any) => {
    //this.ossQuer.token$.subscribe(res=>this.token=res);
    console.log(this.ossQuer);
    const formData = new FormData();
    formData.append('file', item.file as any);
    // formData.append("key", item.file.name);
    formData.append('fname', item.file.name);
    formData.append('x:name', item.file.name);
    formData.append('token', this.ossQuer.getValue().token);
    const req = new HttpRequest('POST', item.action!, formData, {
      reportProgress: true,
      withCredentials: false,
      headers: new HttpHeaders().set(
        'Authorization',
        'Qiniu ' + this.ossQuer.getValue().token
      )
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
      err => {
        item.onError!(err, item.file!);
      }
    );
  };
  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        const filename = info.file.response.key;
        const v = `${this.ossQuer.getValue().cdnHost}/${filename}`;
        console.log(v);
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        //这里主要是nz组件imgList 绑定了，上传后会自动写入imgList这个集合，所以每次都先清理后一个
        //if (this.imgList.length>=this.length)
        this.imgList.pop();
        this.imgList = [...this.imgList, this.createNewImgObject(info.file)];
        this._value = this.imgList;
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }

  //生成缩略图
  createNewImgObject(v: UploadFile): UploadFile {
    const name = v.response.key;
    const url = `${this.ossQuer.getValue().cdnHost}/${name}`;
    return {
      uid: v.response.hash,
      name: name,
      status: 'done',
      url: url,
      thumbUrl: 'http://' + url + '?imageView2/1/w/300/h/300',
      isImageUrl: true
    };
  }

  handlePreview = (file: UploadFile) => {
    this.avatarUrl = file.url || file.thumbUrl;
    //this.previewVisible = true;
    console.log(this.imgList);
  };
}
