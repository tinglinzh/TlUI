<template>
  <el-popover
    placement="bottom"
    :width="400"
    trigger="click"
    popper-class="popper_style"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge
        style="cursor: pointer"
        :value="props.value"
        :max="max"
        :is-Dot="isDot"
      >
        <component :is="icon" class="icon_size"></component>
      </el-badge>
    </template>
  </el-popover>
</template>
<script setup lang="ts">
let props = defineProps({
  // 显示图标
  icon: {
    type: String,
    default: "Bell",
  },
  // 通知数量
  value: {
    type: [String, Number],
    default: "",
  },
  // 最大值
  max: {
    type: Number,
  },
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped lang="scss">
svg {
  width: 22px;
  height: 22px;
}
</style>
