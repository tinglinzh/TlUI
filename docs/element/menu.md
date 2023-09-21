## 导航菜单

### 按需引入

```js
import menu from "tl-element-plus/menu";
import "tl-element-plus/menu/style.css";
```

### 基础用法

<div>
<tl-menu
:data="data1"
defaultActive="2"
name="a"
index="b"
icon="c"
children="d"
> </tl-menu></div>

<script setup>
let data1 = [
  {
    a: "导航1",
    b: "1",
    c: "document",
  },
  {
    a: "导航2",
    b: "2",
    c: "document",
  },
  {
    a: "导航3",
    b: "3",
    c: "document",
    d: [
      {
        a: "导航3-1",
        b: "3-1",
        c: "document",
      },
    ],
  },
];

</script>

### 代码示例

```js

<template>
  <tl-menu
    :data="data1"
    defaultActive="2"
    name="a"
    index="b"
    icon="c"
    children="d"
  ></tl-menu>
</template>
<script setup lang="ts">
let data1 = [
  {
    a: "导航1",
    b: "1",
    c: "document",
  },
  {
    a: "导航2",
    b: "2",
    c: "document",
  },
  {
    a: "导航3",
    b: "3",
    c: "document",
    d: [
      {
        a: "导航3-1",
        b: "3-1",
        c: "document",
      },
    ],
  },
];

</script>
```
