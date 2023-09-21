<template>
  <el-scrollbar>
    <tl-menu
      :data="data"
      :collapse="props.collapse"
      router
      :defaultActive="$route.path"
    ></tl-menu>
  </el-scrollbar>
</template>
<script setup lang="ts">
let props = defineProps<{
  collapse: boolean;
}>();
let data = [
  {
    icon: "HomeFilled",
    name: "首页",
    index: "/",
  },
  {
    icon: "Check",
    name: "图标选择器",
    index: "/chooseIcon",
  },
  {
    icon: "LocationFilled",
    name: "省市区选择",
    index: "/chooseArea",
  },
  {
    icon: "Timer",
    name: "时间选择",
    index: "/chooseTime",
  },
  {
    icon: "BellFilled",
    name: "通知菜单",
    index: "/notice",
  },
  {
    icon: "ChromeFilled",
    name: "导航菜单",
    index: "/menu",
  },
  {
    icon: "School",
    name: "城市选择",
    index: "/chooseCity",
  },
  {
    icon: "Right",
    name: "进度条",
    index: "/progress",
  },
  {
    icon: "TakeawayBox",
    name: "日历",
    index: "/calendar",
  },
  {
    icon: "List",
    name: "表单",
    index: "/form",
  },
  {
    icon: "Histogram",
    name: "表格",
    index: "/table",
  },
];
</script>
<style scoped lang="scss"></style>
