export const menu = [
  {
    text: '主导航',
    heading: true,
    icon:'home',
    children: [
      {
        text: '工作台',
        link: '/dashboard/workplace',
        icon: 'dashboard'
      },
      {
        text: '应用管理',
        link: '/app-management/apps',
        icon: 'appstore'
      }
    ]
  },{
    text: '权限管理',
    heading: true,
    icon:'apartment',
    children:[
      {
        text: '用户组管理',
        link: '/identity/roles',
        icon: 'usergroup-delete'
      }
    ]
  }
];
