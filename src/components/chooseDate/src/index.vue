<template>
  <div class="date_prick">
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startDatePlaceholder"
        size="small"
        :disabled-date="startDisabledDate"
        v-bind="$attrs.startOptions"
        popper-class="date_popover"
      />
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endDatePlaceholder"
        size="small"
        :disabled="endDateDisabled"
        :disabled-date="endDateDisabledDate"
        v-bind="$attrs.endOptions"
        popper-class="date_popover"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

let props = defineProps({
  startDatePlaceholder: {
    type: String,
    default: "请选择开始日期",
  },
  endDatePlaceholder: {
    type: String,
    default: "请选择结束日期",
  },
  //   是否禁用选择今天之前的日期
  disableToday: {
    type: Boolean,
    default: true,
  },
});

let emits = defineEmits(["startDateChange", "endDateChange"]);
// 开始日期
let startDate = ref<Date | null>(null);
// 结束日期
let endDate = ref<Date | null>(null);

let endDateDisabled = ref<boolean>(true);
// 禁用开始日期之前的函数
const startDisabledDate = (time: Date) => {
  if (props.disableToday)
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24;
};

// 禁用结束日期的函数
let endDateDisabledDate = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24;
  }
};
// 监听开始的日期
watch(
  () => startDate.value,
  (val) => {
    if (!val) {
      endDate.value = null;
      endDateDisabled.value = true;
    } else {
      emits("startDateChange", val);
      endDateDisabled.value = false;
    }
  }
);
// 监听结束的日期
watch(
  () => endDate.value,
  (val) => {
    if (val) {
      emits("endDateChange", {
        startDate: startDate.value,
        endDate: val,
      });
    }
  }
);
</script>
<style scoped lang="scss">
.date_prick {
  display: flex;
  :deep(.el-input__wrapper) {
    font-size: 14px;
    font-weight: 400;
  }
}
body {
  :deep(.el-picker-panel__body) {
    font-size: 14px;
    font-weight: 400 !important;
  }
}
</style>
