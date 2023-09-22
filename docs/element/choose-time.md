## 时间选择

### 按需引入

```js
import chooseTime from "tl-element-plus/chooseTime";
import "tl-element-plus/chooseTime/style.css";
```

### 基础用法

<div>
<tl-choose-time :startOptions="startOptions" :endOptions="startOptions"></tl-choose-time>
</div>

<div style="margin-top:20px">
<tl-choose-date></tl-choose-date>
</div>

<script setup>
 let startOptions={size:'small'}

</script>

### 代码示例

```js
<template>
  <tl-choose-time
    :startOptions="startOptions"
    :endOptions="startOptions"
    @startChange="startChange"
    @endChange="endChange"
  ></tl-choose-time>
  <tl-choose-date
    @startDateChange="startDateChange"
    @endDateChange="endDateChange"
  ></tl-choose-date>
</template>
<script setup lang="ts">
interface endChangeValue {
  startTime: string;
  endTime: string;
}
interface endDateChange {
  startDate: Date;
  endDate: Date;
}
const startChange = (val: string) => {
  console.log("startTime", val);
};
const endChange = (val: endChangeValue) => {
  console.log(val);
};
const startDateChange = (val: Date)=>{
  console.log(val);
};
const endDateChange = (val: endDateChange) => {
  console.log(val);
};
let startOptions = {
  size: "small",
};
</script>
```
