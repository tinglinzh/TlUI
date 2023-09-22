## 安装

### 环境支持

tl-element-plus 可以在支持 ES2018 和 ResizeObserver 的浏览器上运行。
由于 Vue 3 不再支持 IE11，tl-element-plus 也不支持 IE 浏览器。

### 版本

tl-element-plus 还处在开发阶段，作者会继续封装一些常用的组件。

### 安装

```bash
npm istall tl-element-plus


```

### 使用

安装完成后在` main.ts` 文件下添加以下代码

```ts
// main.ts
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 全局引入
import TlElementPlus from "tl-element-plus";
import "tl-element-plus/style.css";

import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(TlElementPlus);
app.mount("#app");
```
