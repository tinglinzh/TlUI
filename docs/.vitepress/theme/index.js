import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "tl-element-plus/style.css";
import "./rainbow.css";
import "./style.css";
import "./overrides.css";
export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    app.use(ElementPlus);

    if (!import.meta.env.SSR) {
      const zxUI = await import("tl-element-plus");
      app.use(zxUI.default);
    }
  },
};
