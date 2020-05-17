import { Component, OnInit } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
import { RoleEditComponent } from './Role-edit.component';
import { IdentityService } from '../store/identity.service';
import {IdentityQuery} from '../store/identity.query'
import { Observable, from } from 'rxjs';
import { RolePrivateProxyService } from '../identityApi';
import { map } from 'rxjs/operators';
import { PermissionsComponent } from '../permissions/permissions.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent implements OnInit {

  dataItems$: Observable<any[]>;
  pageingInfo = {
    totalItems: 0,
    pageNumber: 1,
    pageSize: 10,
    isTableLoading: false
  };
  constructor(
    private modalService: NzModalService,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private api: RolePrivateProxyService,
    private identityService:IdentityService,
    private identityQuery:IdentityQuery,
    // private modal: NzModalService
  ) {

  }

  ngOnInit() {
    this.refresh();
    this.dataItems$=this.identityQuery.user$;
    from([1, 2, 3, 4,5])
    .pipe(
      map(param => this.getData(param)),
    )
    .subscribe(val => console.log(val));
    console.log("321");

    console.log("321412");
    console.log("54645");
    console.log("43242");
    console.log("456456");
  }

  getData(s:any){
    return s;
  }


  refresh() {
    this.identityService.getRoles({});
    // this.pageingInfo.isTableLoading = true;
    // this.api.getList({
    //   maxResultCount: this.pageingInfo.pageSize,
    //   skipCount: (this.pageingInfo.pageNumber - 1) * this.pageingInfo.pageSize
    // }).subscribe(res => {
    //   console.log(res);
    //   this.dataItems = res.items;
    //   this.pageingInfo.totalItems = res.totalCount;
    //   this.pageingInfo.isTableLoading = false;
    // })
  }


  guid = '00000000-0000-0000-0000-000000000000';
  create(){

      const modal = this.modalService.create({
        nzTitle: 'New Role',
        nzContent: RoleEditComponent,
        nzComponentParams: {
          roleDto: {
            name:"",
            isDefault:true,
            isPublic:false
            }
        },
        nzFooter: [
          {
            label: '确定',
            type: "primary",
            onClick: instance => {
              console.log("componentInstance", instance);
              if (instance.validateForm.valid) {
                this.api.createRole({
                  body: instance.roleDto
                }).subscribe(res => {
                  this.message.success("新建成功");
                  this.refresh();
                  modal.destroy();
                })
              }
            }
          }
        ]
      });
   
  }

  edit(item:any){
    this.api.getRole(item.id).subscribe(res => {
      const modal = this.modalService.create({
        nzTitle: 'New Role',
        nzContent: RoleEditComponent,
        nzComponentParams: {
          roleDto: res
        },
        nzFooter: [
          {
            label: '确定',
            type: "primary",
            onClick: instance => {
              console.log("componentInstance", instance);
              if (instance.validateForm.valid) {
                this.api.updateRole({
                  id:item.id,
                  body: instance.roleDto
                }).subscribe(res => {
                  this.message.success("编程成功");
                  this.refresh();
                  modal.destroy();
                })
              }
            }
          }
        ]
      });
    })
  }

  delete(item:any){
    this.identityService.delete(item.id).subscribe(() => {
      this.message.success("删除成功");
      this.refresh();
    })
  }


  showDeleteConfirm(item:any): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure delete this role?',
      nzContent: '<b style="color: red;">delete can not be restored!</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.delete(item);
        console.log('OK');
    },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  permissions(item:any):void{
    console.log(item);
    console.log("permissions click")
    const modal=this.modalService.create(
      {
        nzTitle: item.name+' Permission',
        nzContent: PermissionsComponent,
        nzComponentParams:{
          providerName:"R",
          providerKey:item.name
        },
        nzWidth:"30vw",
        nzFooter: [
          {
            label: '确定',
            type: "primary",
            onClick: instance => {
              console.log("componentInstance", instance);
              console.log(instance.permissionModel);
              console.log()
              // if (instance.validateForm.valid) {
              //   this.api.createRole({
              //     body: instance.roleDto
              //   }).subscribe(res => {
              //     this.message.success("修改成功");
              modal.destroy();
              //   })
              // }
            }
          }
        ]
      }
    )
  }

}