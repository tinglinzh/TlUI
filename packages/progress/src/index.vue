<template>
  <el-progress v-bind="$attrs" :percentage="p" :stroke-width="6"></el-progress>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
let props = defineProps({
  // 进度条进度
  percentage: {
    type: Number,
    default: 0,
  },
  isAnimation: {
    type: Boolean,
    default: false,
  },
  // 动画时长(毫秒)
  time: {
    type: Number,
    default: 3000,
  },
});
let p = ref(0);
onMounted(() => {
  if (props.isAnimation) {
    // 规定时间内加载完成
    let t = Math.ceil(props.time / props.percentage);
    let timer = setInterval(() => {
      p.value += 1;
      if (p.value >= props.percentage) {
        p.value = props.percentage;
        clearInterval(timer);
      }
    }, t);
  } else {
    p.value = props.percentage;
  }
});
</script>
<style scoped lang="scss">
svg {
  width: 40px;
  height: 40px;
}
</style>
