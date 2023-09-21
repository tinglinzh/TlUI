## 日历组件

### 按需引入

```js
import calendar from "tl-element-plus/calendar";
import "tl-element-plus/calendar/style.css";
```

### 基础用法

<div>
<tl-calendar
displayEventEnd
@event-click="eventClick"
@date-click="dateClick"
:events="events"></tl-calendar>
</div>

<script setup>
import { ref } from "vue";
const events = ref([
  {
    title: "购物",
    start: "2023-08-18 00:00",
    end: "2023-08-22 24:00",
    editable: true,
  },
]);
const dateClick = (data) => {
  events.value.push({
    start: data.dateStr + " 12:00",
    end: data.dateStr + " 18:00",
    title: "学习",
  });
};
const eventClick = (data) => {
  console.log(data);
};
</script>
<style>
:deep(.vp-doc table){
 overflow:none;
}
.fc .fc-scrollgrid-section, .fc .fc-scrollgrid-section table, .fc .fc-scrollgrid-section > td{
    height:auto;
}
.fc .fc-scroller{
    height:50px !important;
    overflow:none !important;
}
.fc-scrollgrid-section-body .fc-scroller{
    height:400px !important;
    overflow:none !important;
}
</style>

### 代码示例

```js
<template>
  <tl-calendar
    displayEventEnd
    @event-click="eventClick"
    @date-click="dateClick"
    :events="events"
  ></tl-calendar>
</template>

<script setup lang="ts">
import { ref } from "vue";
const events = ref<EventItem[]>([
  {
    title: "购物",
    start: "2023-08-18 00:00",
    end: "2023-08-22 24:00",
    editable: true,
  },
]);
const dateClick = (data: any) => {
  events.value.push({
    start: data.dateStr + " 12:00",
    end: data.dateStr + " 18:00",
    title: "学习",
  });
};
const eventClick = (data: any) => {
  console.log(data);
};
</script>
```
