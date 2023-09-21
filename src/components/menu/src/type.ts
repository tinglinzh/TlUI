export interface MenuItem {
  //  导航的图标
  icon?: string;
  //   处理之后的图标
  i?: string;
  //   导航的标题
  name: string;
  //   导航的标识
  index: string;
  //   导航的子菜单
  children?: MenuItem[];
}
