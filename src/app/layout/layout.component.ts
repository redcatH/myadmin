import { Component, OnInit } from '@angular/core';
import { OssQuery } from '../../store/oss/oss.query';
import { MenuService } from '../core/menu/menu.service';
import { UserInfoQuery } from 'src/store/oauth/userInfo.query';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  nickname:string;
  menus:Array<any>;
  constructor(
    private ossQuery:OssQuery,
    private menuService:MenuService,
    public userInfoQuer:UserInfoQuery,
    ) { 

    // this.userInfoQuer.nickname$.subscribe(p=>{
    //   this.nickname=p
    // });
  }
   
  ngOnInit() {
    this.menus=this.menuService.getMenu();
    console.log(this.menus);
    //this.ossQuery.isExpired$; //获取token是否过期
  }
}
