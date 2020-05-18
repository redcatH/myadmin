import { Component, OnInit } from '@angular/core';
import { TenantsService } from '../../store/tenant.service';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { TenantDto } from '../../Model/tenantModel';
import { TenantEditOrUpdateComponent } from '../tenant-edit-or-update/tenant-edit-or-update.component';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})
export class TenantListComponent implements OnInit {
  constructor(
    private tenantsService:TenantsService,
    private modal:NzModalService,
    private message:NzMessageService
  ) {}

  dataItems: any[] = [];
  pageingInfo = {
    totalItems: 0,
    pageNumber: 1,
    pageSize: 10,
    isTableLoading: false
  };

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.tenantsService.getTenants().subscribe(p=>{
      this.dataItems=p.items;
    });
  }

  create() {
    let modal=this.modal.create({
      nzTitle: 'New Teanant',
      nzContent: TenantEditOrUpdateComponent,
      nzComponentParams: {
        options:"create"
      },
      nzFooter: [
        {
          label: '确定',
          type: "primary",
          onClick: instance => {
            console.log("componentInstance", instance);
            if (instance.validateForm.valid) {
              console.log(instance.validateForm.value);
              this.tenantsService.create({
                body:instance.validateForm.value
              }
              ).subscribe(res => {
                this.message.success("新建成功");
                this.refresh();
                modal.destroy();
              })
            }
          }
        }
      ]
    })
  }

  edit(item:TenantDto) {
    this.tenantsService.getTenantById(item.id).subscribe(p=>{
      let modal=this.modal.create({
        nzTitle: 'New Role',
        nzContent: TenantEditOrUpdateComponent,
        nzComponentParams: {
          tenantDto:p
        },
        nzFooter: [
          {
            label: '确定',
            type: "primary",
            onClick: instance => {
              console.log("componentInstance", instance);
              if (instance.validateForm.valid) {
                this.tenantsService.update(item.id,
                 instance.validateForm.value
                ).subscribe(res => {
                  this.message.success("新建成功");
                  this.refresh();
                  modal.destroy();
                })
              }
            }
          }
        ]
      })
    })
  }

  showDeleteConfirm(item) {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this tenant?',
      nzContent: '<b style="color: red;">delete can not be restored!</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.tenantsService.delete(item.id).subscribe(p=>{
          console.log('OK');
          this.refresh();
        })

        
    },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
