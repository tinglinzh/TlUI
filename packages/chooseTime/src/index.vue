<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <!-- 使用$attrs.startOptions,$attrs.endOptions单独为两个选项配置 -->
      <el-time-select
        v-model="startTime"
        :max-time="endTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        v-bind="$attrs.startOptions"
        :end="startTimeEnd"
      />
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endtTimeEnd"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

let props = defineProps({
  // 开始时间占位符
  startPlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  //   开始时间的初始化选择
  startTimeStart: {
    type: String,
    default: "08:00",
  },
  //   开始时间的步进
  startStep: {
    type: String,
    default: "00:30",
  },
  //   开始时间的结束选择
  startTimeEnd: {
    type: String,
    default: "24:00",
  }, // 结束时间占位符
  endPlaceholder: {
    type: String,
    default: "请选择结束时间",
  },
  //   结束时间的初始化选择
  endTimeStart: {
    type: String,
    default: "08:00",
  },
  //   结束时间的步进
  endStep: {
    type: String,
    default: "00:30",
  },
  //   结束时间的结束选择
  endtTimeEnd: {
    type: String,
    default: "24:00",
  },
});
let emits = defineEmits(["startChange", "endChange"]);
// 开始时间
let startTime = ref<string>("");
// 结束时间
let endTime = ref<string>("");
// 结束时间点击状态值
let endTimeDisabled = ref<boolean>(true);
// 监听开始时间的变化
watch(
  () => startTime.value,
  (val) => {
    if (val === "") {
      endTime.value = "";
      endTimeDisabled.value = true;
    }
    if (val) {
      endTimeDisabled.value = false;
      //   给父组件分发事件
      emits("startChange", val);
    }
  }
);
// 监听结束时间的变化
watch(
  () => endTime.value,
  (val) => {
    emits("endChange", {
      startTime: startTime.value,
      endTime: val,
    });
  }
);
</script>
<style scoped lang="scss"></style>
