<template>
  <div class="header">
    <span @click="toggle">
      <Expand v-if="collapse" />
      <Fold v-else />
    </span>
  </div>
</template>

<script setup lang="ts">
let props = defineProps<{ collapse: boolean }>();
let emits = defineEmits(["update:collapse"]);
let toggle = () => {
  // 需要修改父组件的数据
  emits("update:collapse", !props.collapse);
};
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
:deep(svg) {
  width: 16px;
  height: 16px;
}
</style>
