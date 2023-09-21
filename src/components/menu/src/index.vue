<template>
  <el-menu
    :default-active="defaultActive"
    :router="router"
    class="el-menu-vertical-demo"
    v-bind="$attrs"
  >
    <template v-for="item in props.data">
      <el-menu-item
        v-if="!item[children] || !item[children].length"
        :index="item[index]"
      >
        <component
          v-if="item[icon]"
          :is="item[icon]"
          style="margin-right: 10px"
        ></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <el-sub-menu
        v-if="item[children] && item[children].length"
        :index="item[index]"
      >
        <template #title>
          <component
            style="margin-right: 10px"
            v-if="item[icon]"
            :is="item[icon]"
          ></component>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item
          v-for="(item1, index1) in item[children]"
          :key="index1"
          :index="item1[index]"
        >
          <component
            style="margin-right: 10px"
            v-if="item1[icon]"
            :is="item1[icon]"
          ></component>
          <span>{{ item1[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>
<script setup lang="ts">
import { PropType } from "vue";
let props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  // 默认选中的菜单
  defaultActive: {
    type: String,
    default: "",
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false,
  },
  //  键名
  //   菜单标题
  name: {
    type: String,
    default: "name",
  },
  //   菜单标识
  index: {
    type: String,
    default: "index",
  },
  //   菜单图标
  icon: {
    type: String,
    default: "icon",
  },
  //   子菜单
  children: {
    type: String,
    default: "children",
  },
});
</script>
<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
svg {
  width: 1em;
  height: 1em;
}
</style>
