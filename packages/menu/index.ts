import { App } from "vue";
import menu from "./src/index.vue";
import infiniteMenu from "./src/menu.tsx";

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component("tl-menu", menu);
    app.component("tl-infinite-menu", infiniteMenu);
  },
};
