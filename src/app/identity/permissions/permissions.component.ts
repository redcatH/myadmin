import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import {
  NzTabPosition,
  NzTreeComponent,
  NzTreeNodeOptions,
  NzFormatEmitEvent,
  NzTabComponent,
  NzTabSetComponent
} from 'ng-zorro-antd';
import { PermissionService } from '../store/permissions.service';
import { PermissionListResultDto } from '../Model/permissionModel';
import { from, merge } from 'rxjs';
import { ViewPermissionGroup } from '../Model/permissionViewModel';
import { permissionQuery } from '../store/permissions.query';
import { map, tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  @ViewChild('tabs', { static: true }) tabs: NzTabSetComponent;
  checked: boolean = false;
  position: NzTabPosition = 'left';
  // tabs = [1, 2, 3];
  options = [
    { value: 'top', label: 'top' },
    { value: 'left', label: 'left' },
    { value: 'right', label: 'right' },
    { value: 'bottom', label: 'bottom' }
  ];
  defaultCheckedKeys: any[] = [];
  permissionModel: any[] = [];
  @Input() providerName: string;
  @Input() providerKey: string;

  constructor(
    private permissionApi: PermissionService,
    private permissionQuery: permissionQuery
  ) {}

  ngOnInit(): void {
    this.permissionApi
      .get(this.providerName, this.providerKey)
      .subscribe(() => {
        this.permissionQuery.permissionGroup$.subscribe(res => {
          res.forEach(item => {
            if (item.name === '') return;
            this.permissionModel = [
              ...this.permissionModel,
              {
                title: item.name,
                permissions: item.permissions
                  .filter((p, i, array) => p.parentName == null)
                  .map(ps => {
                    let temp =
                      item.permissions.filter(
                        children =>
                          children.parentName == ps.name && ps.isGranted
                      ).length ==
                      item.permissions.filter(
                        children => children.parentName == ps.name
                      ).length;
                    const tempArray = {
                      title: ps.displayName,
                      key: ps.name,
                      expanded: true,
                      //checked:temp,
                      children: item.permissions
                        .filter(children => children.parentName == ps.name)
                        .map(cp => {
                          return {
                            title: cp.displayName,
                            //checked: cp.isGranted,
                            key: cp.name,
                            isLeaf: true
                          };
                        })
                    };
                    console.log(tempArray);
                    return tempArray;
                  })
              }
            ];
          });
          
          this.permissionQuery.permissionGroup$
            .pipe(
              mergeMap(arr => from(arr)),
              map(p => p.permissions),
              mergeMap(arr => from(arr))
            )
            .subscribe(r => {
              if (r.isGranted != undefined) {
                if (r.isGranted && r.parentName != null)
                  this.defaultCheckedKeys.push('' + r.name);
              }
            });
          console.log(this.defaultCheckedKeys);
          //console.log(this.permissionModel);
        });
      });
  }

  clickChecked(e) {
    // console.log(this.tabs.nzSelectedIndex);

    this.permissionModel[
      this.tabs.nzSelectedIndex
    ].permissions = this.permissionModel[
      this.tabs.nzSelectedIndex
    ].permissions.map(p => {
      p.checked = e;
      p.children.map(pp => {
        pp.checked = e;
        return pp;
      });
      return p;
    });
    console.log(this.permissionModel[this.tabs.nzSelectedIndex]);
  }
  //为了外部访问
  @ViewChild('NzTabComponent', { static: true })
  nzTabComponent!: NzTabComponent;

  //树结构
  @ViewChild('nzTreeComponent', { static: false })
  nzTreeComponent!: NzTreeComponent;
  // defaultCheckedKeys = ['10020'];
  defaultSelectedKeys = ['10010'];
  defaultExpandedKeys = ['100', '1001'];

  nodes: NzTreeNodeOptions[] = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          disabled: true,
          children: [
            {
              title: 'leaf 1-0-0',
              key: '10010',
              disableCheckbox: true,
              isLeaf: true
            },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [
            { title: 'leaf 1-1-0', key: '10020', isLeaf: true },
            { title: 'leaf 1-1-1', key: '10021', isLeaf: true }
          ]
        }
      ]
    }
  ];

  nzClick(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  nzCheck(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  // nzSelectedKeys change
  nzSelect(keys: string[]): void {
    console.log(keys, this.nzTreeComponent.getSelectedNodeList());
  }

  ngAfterViewInit(): void {
    // get node by key: '10011'
    //console.log(this.nzTreeComponent.getTreeNodeByKey('10011'));
    // use tree methods
    console
      .log
      // this.nzTreeComponent.getTreeNodes(),
      // this.nzTreeComponent.getCheckedNodeList(),
      // this.nzTreeComponent.getSelectedNodeList(),
      // this.nzTreeComponent.getExpandedNodeList()
      ();
  }
}
