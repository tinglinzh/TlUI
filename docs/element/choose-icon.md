## 图标选择

点击按钮，弹出弹出框显示所有图标，点击图标即可复制图标代码
如:`<Apple/>`

### 按需引入

```js
import chooseIcon from "tl-element-plus/chooseIcon";
import "tl-element-plus/chooseIcon/style.css";
```

### 基础用法

<br/>
<div>
        <tl-choose-icon title="选择图标" v-model:visible="visible">选择图标</tl-choose-icon>
</div>

<script setup >
import { ref } from "vue";
let visible = ref(false)
</script>

### 代码示例

```js
<template>
  <div>
    <tl-choose-icon title="选择图标" v-model:visible="visible"
      >选择图标</tl-choose-icon
    >
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
let visible = ref<boolean>(false);
</script>
```
