  /**
   * 用于页面显示
   */
  export interface ViewPermissionGroup {
    title?:string;
    permissions:ViewPermission[]
  }
  export interface ViewPermission{
    title?:string;
    key?:string;
    checked:boolean;
    isLeaf:boolean;
    children:[];
  }