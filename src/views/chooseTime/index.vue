<template>
  <tl-choose-time
    :startOptions="startOptions"
    @startChange="startChange"
    @endChange="endChange"
  ></tl-choose-time>
  <br />
  <br />
  <br />
  <tl-choose-date
    @startDateChange="startDateChange"
    @endDateChange="endDateChange"
  ></tl-choose-date>
</template>
<script setup lang="ts">
interface endChangeValue {
  startTime: string;
  endTime: string;
}
interface endDateChange {
  startDate: Date;
  endDate: Date;
}
const startChange = (val: string) => {
  console.log("startTime", val);
};
const endChange = (val: endChangeValue) => {
  console.log(val);
};
const startDateChange = (val: Date) => {
  console.log(val);
};
const endDateChange = (val: endDateChange) => {
  console.log(val);
};
let startOptions = {
  size: "small",
};
</script>
<style scoped lang="scss"></style>
