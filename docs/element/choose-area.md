## 省市区选择

下拉选择实现省市区三级联动

### 按需引入

```js
import chooseArea from "tl-element-plus/chooseArea";
import "tl-element-plus/chooseArea/style.css";
```

### 基础用法

<br/>
<div>
  <tl-choose-area @change="changeArea" />
</div>

<script setup >
const changeArea = (val) => {
  console.log(val);
};
</script>

### 代码示例

```js
<template>
  <tl-choose-area @change="changeArea" />
</template>
<script setup lang="ts">
const changeArea = (val: any) => {
  console.log(val);
};
</script>
```

### API

#### 事件
