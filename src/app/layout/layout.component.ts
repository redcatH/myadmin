import { Component, OnInit } from '@angular/core';
import { OssQuery } from '../../store/oss/oss.query';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  constructor(private ossQuery:OssQuery) { }
   
  ngOnInit() {
    this.ossQuery.isExpired$; //获取token是否过期
  }

}
