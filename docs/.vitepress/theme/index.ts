// https://vitepress.dev/guide/custom-theme
import Theme from "vitepress/theme";
import ElementPlus from 'element-plus'
import TlEementPlus from 'tl-element-plus'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import 'element-plus/dist/index.css'
import 'tl-element-plus/style.css'
import "./rainbow.css";
import "./style.css";
import "./overrides.css";
// 全局注册图标

export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(ElementPlus)
        app.use(TlEementPlus)
        // app.use(ElementPlus, {
        //     locale: zhCn,
        // });
    }
};
