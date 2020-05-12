import { OssStore } from './oss.store';
import { OssProxyService } from 'src/api/appService';
import { HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OssService {
  constructor(private ossStore: OssStore, private ossApi: OssProxyService) {
    this.Init();
  }

  Init() {
    return this.ossApi.getConfig().subscribe(res => {
      this.ossStore.update(state => ({
        cdnHost: res.cdnHost,
        uploadHost: res.uploadHost
      }));
      this.getToken();
    });
  }
  getToken() {
    return this.ossApi.getToken().subscribe(res => {
      this.ossStore.update(state=>({ 
        token: res.token
      }));
    });
  }
}
