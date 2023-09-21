
// import { PropType, defineComponent, useAttrs } from "vue";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import { ElMenu, ElSubMenu, ElMenuItem } from "element-plus";

// export default defineComponent({
//     props: {
//         // 导航菜单的数据
//         data: {
//             type: Array as PropType<any[]>,
//             required: true,
//         },
//         // 默认选中的菜单
//         defaultActive: {
//             type: String,
//             default: "",
//         },
//         // 是否是路由模式
//         router: {
//             type: Boolean,
//             default: false,
//         },
//         name: {
//             type: String,
//             default: "name",
//         },
//         //   菜单标识
//         index: {
//             type: String,
//             default: "index",
//         },
//         //   菜单图标
//         icon: {
//             type: String,
//             default: "icon",
//         },
//         //   子菜单
//         children: {
//             type: String,
//             default: "children",
//         },
//     },

//     setup(props) {
//         //   封装一个渲染无限层级菜单的方法
//         // 函数返回一段jsx的代码
//         let renderMenu = (data: any[]) => {
//             return data.map((item: any) => {
//                 item.i = (ElementPlusIconsVue as any)[item[props.icon]];
//                 //处理sub-menu插槽
//                 let slots = {
//                     title: () => {
//                         return <>
//                             <item.i />
//                             <span>{item[props.name]}</span>
//                         </>
//                     },
//                 };
//                 // 递归渲染children
//                 if (item[props.children] && item[props.children].length) {
//                     return (
//                         <ElSubMenu index={item[props.index]} v-slots={slots}>
//                             {renderMenu(item[props.children])}
//                         </ElSubMenu>
//                     );
//                 }
//                 // 正常渲染普通菜单
//                 return (
//                     <ElMenuItem index={item[props.index]}>
//                         <item.i />
//                         <span>{item[props.name]}</span>
//                     </ElMenuItem>
//                 );
//             });
//         };
//         let attrs = useAttrs();

//         return () => {
//             return (
//                 <ElMenu router={props.router} {...attrs} default-active={props.defaultActive} >
//                     {renderMenu(props.data)}
//                 </ElMenu>

//             );
//         };
//     },
// });
