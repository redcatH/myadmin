import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { IconsProviderModule } from './icons-provider.module';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { DefaultInterceptor } from './core/net/default.interceptor';
const INTERCEPTOR_PROVIDES = [
  {provide:HTTP_INTERCEPTORS, useClass:DefaultInterceptor,multi:true}
]
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    IconsProviderModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutesModule,
    LayoutModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
  ...INTERCEPTOR_PROVIDES],
  bootstrap: [AppComponent]
})
export class AppModule { }
