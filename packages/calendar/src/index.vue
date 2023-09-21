<template>
  <div id="calendar"></div>
</template>
<script setup lang="ts">
import { Calendar, EventClickArg } from "@fullcalendar/core";
import daygrid from "@fullcalendar/daygrid";
import interaction, { DateClickArg } from "@fullcalendar/interaction";
import { onMounted, ref, PropType, watch } from "vue";
import { EventItem } from "./type.ts";
let props = defineProps({
  // 语言
  local: {
    type: String,
    default: "zh-cn",
  },
  //   视图模式
  initialView: {
    type: String,
    default: "dayGridMonth",
  },
  //   按钮文字
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: "今天",
        month: "月",
        week: "周",
        day: "日",
        prevYear: "上一年",
        nextYear: "下一年",
        prev: "上一月",
        next: "下一月",
      };
    },
  },
  //   头部工具栏
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        start: "title",
        center: "",
        end: "prev today next",
      };
    },
  },
  //   底部工具栏
  footerToolbar: {
    type: Object,
  },
  //   事件源
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => [],
  },
  //   日历显示结束时间
  displayEventEnd: {
    type: Boolean,
    default: true,
  },
  //  自定义渲染日历内容
  eventContent: {
    type: Function,
  },
});
onMounted(() => {
  renderCalendar();
});
// 分发事件
let emits = defineEmits(["date-click", "event-click"]);
// 日历实例
let calendar = ref<Calendar>();
// 渲染日历的方法
let renderCalendar = () => {
  let el = document.getElementById("calendar");
  if (el) {
    calendar.value = new Calendar(el, {
      plugins: [daygrid, interaction],
      locale: props.local,
      initialView: props.initialView,
      buttonText: props.buttonText,
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,
      displayEventEnd: props.displayEventEnd,
      eventSources: [
        {
          // 渲染日历的事件
          events(e, callback) {
            if (props.events.length) callback(props.events);
            else callback([]);
          },
        },
      ],
      //   点击日历上的某一天
      dateClick(info: DateClickArg) {
        emits("date-click", info);
      },
      //   点击日历上的事件
      eventClick(info: EventClickArg) {
        emits("event-click", info);
      },
      //   自定义渲染
      eventContent: props.eventContent,
    });
    calendar.value.render();
  }
};

// 监听父组件传递的事件源
watch(
  () => props.events,
  (val) => {
    console.log(val);
    renderCalendar();
  },
  { deep: true }
);
</script>
<style scoped lang="scss"></style>
