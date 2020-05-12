import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponseBase,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { getStore } from '../utils/storage';
import { environment } from 'src/environments/environment';
import { NzNotificationService } from 'ng-zorro-antd';

const CODEMESSAGE = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  private get notification(): NzNotificationService {
    return this.injector.get(NzNotificationService);
  }

  private checkStatus(http: HttpResponseBase) {
    if ((http.status >= 200 && http.status < 300) || http.status == 401) {
      return;
    }
    if (http instanceof HttpErrorResponse)
      //if (http.status === 403) {
        this.notification.error("statusCode:"+http.status+" "+http.statusText, http.message);
      //}
  }

  private hanldData(httpResponse: any): Observable<any> {
    this.checkStatus(httpResponse);
    switch (httpResponse.status) {
      case 401:
        this.notification.error("授权错误","未登录或登录超时，请重新登录");
        break;
      default:
        break;
    }
    if (httpResponse instanceof HttpErrorResponse) {
      return throwError(httpResponse);
    } else {
      return of(httpResponse);
    }
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = '';
    let __tenant = '';
    if (getStore('token')) token = 'Bearer ' + getStore('token');
    let headers = request.headers.set('Authorization', token);
    let url = request.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      if (url.startsWith('/api/')) url = environment.apis.default + url;
    }
    let cloneRequest: HttpRequest<any> = request.clone({
      headers,
      url
    });

    return next.handle(cloneRequest).pipe(
      mergeMap(res => {
        if (res instanceof HttpResponseBase) return this.hanldData(res);
        return of(res);
      }),
      catchError(err => this.hanldData(err))
    );
  }
}
