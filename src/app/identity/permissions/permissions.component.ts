import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  ViewChildren,
  QueryList,
  ViewContainerRef
} from '@angular/core';
import {
  NzTabPosition,
  NzTreeComponent,
  NzTreeNodeOptions,
  NzFormatEmitEvent,
  NzTabComponent,
  NzTabSetComponent
} from 'ng-zorro-antd';
import { PermissionService } from '../store/permissions.service';
import {
  PermissionListResultDto,
  PermissionGrantInfoDto
} from '../Model/permissionModel';
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
  @ViewChildren(NzTreeComponent) trees: QueryList<NzTreeComponent>;
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
  defaultTreeNodeKeys: PermissionGrantInfoDto[] = [];
  constructor(
    private permissionApi: PermissionService,
    private permissionQuery: permissionQuery
  ) {}

  ngOnInit(): void {
    //this.defaultTreeNodeKeys.length=0;

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
                      children: item.permissions
                        .filter(children => children.parentName == ps.name)
                        .map(cp => {
                          return {
                            title: cp.displayName,
                            key: cp.name,
                            isLeaf: true
                          };
                        })
                    };
                    return tempArray;
                  })
              }
            ];
          });

          //初始化选中的权限
          this.permissionQuery.permissionGroup$
            .pipe(
              mergeMap(arr => from(arr)),
              map(p => p.permissions),
              mergeMap(arr => from(arr))
            )
            .subscribe(r => {
              if (r.isGranted != undefined) {
                if (r.isGranted && r.parentName != null) {
                  //r.parentName != null 这里是为了不设置根节点 让他有半选中状态
                  this.defaultCheckedKeys.push('' + r.name);
                }
                this.defaultTreeNodeKeys.push(r);
              }
            });
        });
      });
  }

  CheckBoxChange(e) {
    console.log(e);
  }

  testClick() {
    this.defaultTreeNodeKeys.forEach(item => {
      this.trees.forEach(t => {
        let tempT = t.getTreeNodeByKey(item.name);
        if (tempT == null) return;
        if (tempT.isChecked != item.isGranted) {
          if(tempT.children.length>0){
            if (tempT.isHalfChecked != item.isGranted)
              console.log('父节点改变：' + item.name);
          }else{
            console.log('子节点改变' + item.name);
          }
        }
      });
    });
    // this.trees.forEach(item=>{
    //   var c=item.getTreeNodes();
    //   console.log(c);
    // })
  }
  clickChecked(e) {
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
