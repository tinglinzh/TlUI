// https://vitepress.dev/guide/custom-theme
import Theme from "vitepress/theme";
import ElementPlus from 'element-plus'
import TlEementPlus from 'tl-element-plus'
import 'element-plus/dist/index.css'
import 'tl-element-plus/style.css'
import "./rainbow.css";
import "./style.css";
import "./overrides.css";


export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(ElementPlus)
        app.use(TlEementPlus)
    }
};
