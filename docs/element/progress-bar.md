## 进度条

### 按需引入

```js
import progressBar from "tl-element-plus/progressBar";
import "tl-element-plus/progressBar/style.css";
```

### 基础用法

<br/>
<div>
  <tl-progress :percentage="60" isAnimation></tl-progress>
  </div>
  <div style="margin-top:30px">
  <tl-progress type="circle" :percentage="60" isAnimation></tl-progress></div>

### 代码示例

```js

<template>
  <tl-progress :percentage="60" isAnimation></tl-progress>
  <tl-progress type="circle" :percentage="60" isAnimation></tl-progress>
</template>

```
