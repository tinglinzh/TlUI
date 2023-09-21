import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 全局引入自己编写的全局组件
import mUI from './components';
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const app = createApp(App);
// 全局注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(ElementPlus, {
    locale: zhCn,
});
app.use(router);
app.mount("#app");
// 全局注册自定义组件
app.use(mUI);
