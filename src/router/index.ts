import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Container from "../components/container/src/index.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Container,
        children: [
            {
                path: "/",
                name: "Home",
                component: Home,
            },
            {
                path: "/chooseIcon",
                name: "icon图标选择器",
                component: () => import("../views/chooseIcon/index.vue"),
            },
            {
                path: "/chooseArea",
                name: "区域选择",
                component: () => import("../views/chooseArea/index.vue"),
            },
            {
                path: "/notice",
                name: "通知组件",
                component: () => import("../views/notification/index.vue"),
            },
            {
                path: "/menu",
                name: "导航栏组件",
                component: () => import("../views/menu/index.vue"),
            },
            {
                path: "/progress",
                name: "进度条组件",
                component: () => import("../views/progress/index.vue"),
            },
            {
                path: "/chooseTime",
                name: "时间选择",
                component: () => import("../views/chooseTime/index.vue"),
            },
            {
                path: "/chooseCity",
                name: "城市选择",
                component: () => import("../views/chooseCity/index.vue"),
            }, {
                path: "/form",
                name: "表单",
                component: () => import("../views/form/index.vue"),
            }, {
                path: "/table",
                name: "表格",
                component: () => import("../views/table/index.vue"),
            }, {
                path: "/calendar",
                name: "日历",
                component: () => import("../views/calendar/index.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
