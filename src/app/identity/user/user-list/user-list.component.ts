import { Component, OnInit } from '@angular/core';
import { UserProxyService } from '../../userApi';
import { UserService } from '../../store/user.service';
import { IdentityUserDto } from '../../Model/userModel';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { RolePrivateProxyService } from '../../identityApi';
import { PermissionsComponent } from '../../permissions/permissions.component';
import { PermissionService } from '../../store/permissions.service';
import { UpdatePermissionsDto } from '../../Model/permissionModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  dataItems: IdentityUserDto[] = [];

  constructor(
    private userService: UserService,
    private modalService: NzModalService,
    private message: NzMessageService,
    private roleService:RolePrivateProxyService,
    private permissionService:PermissionService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  pageingInfo = {
    totalItems: 0,
    pageNumber: 1,
    pageSize: 10,
    isTableLoading: false
  };

  edit(item: any) {
    this.userService.getUser(item.id).subscribe(res => {
      let userDtoTemp = res;
        this.userService.getUserRole(res.id).subscribe(p=>{
          let rolesChecked=p.items.map(m=> {return m.name});
          this.roleService.all().subscribe(p=>{
            let rolesCheckboxDataTemp=p.items.map(r=>{
              return {
                label:r.name,
                value:r.name,
                checked:rolesChecked.find(f=>f==r.name)
              }
            })

            const modal = this.modalService.create({
              nzTitle: 'User:  '+item.userName,
              nzContent: UserEditComponent,
              nzComponentParams: {
                userDto:userDtoTemp,
                rolesCheckboxData:rolesCheckboxDataTemp
              },
              nzFooter: [
                {
                  label: '确定',
                  type: 'primary',
                  onClick: instance => {
                    console.log('componentInstance', instance);
                    if (instance.validateForm.valid) {
                      // console.log(instance.validateForm.value);
        
                      let tempDto = {
                        ...instance.userDto,
                        password: instance.validateForm.value.password,
                        roleNames: instance.rolesCheckboxData.map(p=>{
                          if(p.checked){
                            return p.value;
                          }
                        })
                      };
                      tempDto.userName=instance.validateForm.value.userName;
                      tempDto.email=instance.validateForm.value.email;
                      console.log(tempDto);
                      this.userService.update(item.id,tempDto).subscribe(res => {
                         this.message.success("修改成功");
                         this.refresh();
                         modal.destroy();
                       })
                    }
                  }
                }
              ]
            });

          })
        });

    });
  }

  delete(item: any) {
     this.userService.delete(item.id).subscribe(() => {
      this.message.success("删除成功");
      this.refresh();
    })
  }

  create() {

    this.roleService.all().subscribe(p=>{
      let rolesCheckboxDataTemp=p.items.map(r=>{
        return {
          label:r.name,
          value:r.name,
          checked:r.isDefault
        }
      })


      const modal = this.modalService.create({
        nzTitle: 'Create User',
        nzContent: UserEditComponent,
        nzComponentParams: {
          userDto:{},
          rolesCheckboxData:rolesCheckboxDataTemp
        },
        nzFooter: [
          {
            label: '确定',
            type: 'primary',
            onClick: instance => {
              console.log('componentInstance', instance);
              if (instance.validateForm.valid) {
                // console.log(instance.validateForm.value);
  
                let tempDto = {
                  ...instance.userDto,
                  password: instance.validateForm.value.password,
                  roleNames: instance.rolesCheckboxData.filter(p=>p.checked).map(m=>m.value)
                };
                tempDto.userName=instance.validateForm.value.userName;
                tempDto.email=instance.validateForm.value.email;
                tempDto.password=instance.validateForm.value.password;
                

                this.userService.create(tempDto).subscribe(res => {
                   this.message.success("创建成功");
                   this.refresh();
                   modal.destroy();
                 })
              }
            }
          }
        ]
      });



    });
    // const modal = this.modalService.create({
    //   nzTitle: 'New Role',
    //   nzContent: RoleEditComponent,
    //   nzComponentParams: {
    //     roleDto: {
    //       name:"",
    //       isDefault:true,
    //       isPublic:false
    //       }
    //   },
    //   nzFooter: [
    //     {
    //       label: '确定',
    //       type: "primary",
    //       onClick: instance => {
    //         console.log("componentInstance", instance);
    //         if (instance.validateForm.valid) {
    //           this.api.createRole({
    //             body: instance.roleDto
    //           }).subscribe(res => {
    //             this.message.success("新建成功");
    //             this.refresh();
    //             modal.destroy();
    //           })
    //         }
    //       }
    //     }
    //   ]
    // });
  }

  refresh() {
    this.pageingInfo.isTableLoading = true;
    this.userService.getUsers({}).subscribe(res => {
      this.dataItems = res.items;
      this.pageingInfo.totalItems = res.totalCount;
      this.pageingInfo.isTableLoading = false;
    });
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

  showDeleteConfirm(item: any): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure delete this User?',
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



  initUser(){

  }




  permissions(item: any): void {
      console.log(item);
      console.log("permissions click")
      const modal=this.modalService.create(
        {
          nzTitle: item.name+' Permission',
          nzContent: PermissionsComponent,
          nzComponentParams:{
            providerName:"U",
            providerKey:item.id
          },
          nzWidth:"30vw",
          nzFooter: [
            {
              label: '确定',
              type: "primary",
              onClick: instance => {
                let permissions:UpdatePermissionsDto={
                  permissions:[]
                };
                instance.defaultTreeNodeKeys.forEach(item => {
                  instance.trees.forEach(t => {
                    let tempT = t.getTreeNodeByKey(item.name);
                    if (tempT == null) return;
                    if (tempT.isChecked != item.isGranted) {
                      if(tempT.children.length>0){
                        if (tempT.isHalfChecked != item.isGranted){
                          //console.log('父节点改变：' + item.name);
                          permissions.permissions.push({
                            name:item.name,
                            isGranted:tempT.isHalfChecked
                          })
                        }
                      }else{
                        permissions.permissions.push({
                          name:item.name,
                          isGranted:tempT.isChecked
                        })
                        //console.log('子节点改变' + item.name);
                      }
                    }
                  });
                });
                this.permissionService.Update({
                  providerName:"U",
                  providerKey:item.id,
                  },permissions).subscribe(()=>{
                    this.message.success("修改成功");
                  });
                console.log(permissions);
              }
            }
          ]
        }
      )
  }
}
