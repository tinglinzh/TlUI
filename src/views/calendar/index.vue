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
import { EventItem } from "../../components/calendar/src/type";
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
<style scoped lang="scss"></style>
