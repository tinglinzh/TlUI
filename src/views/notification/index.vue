<template>
  <tl-notification :value="3">
    <template #default>
      <tl-notice-list
        @clickItem="clickItem"
        @clickAction="clickAction"
        :list="listData"
        :actions="actions"
      ></tl-notice-list>
    </template>
  </tl-notification>
  <br />
  <br />
  <br />
  <tl-notification :value="10" :max="9"></tl-notification>
  <br />
  <br />
  <br />
  <tl-notification :value="10" isDot></tl-notification>
  <br />
  <br />
  <br />
  <tl-notification :value="10" icon="Apple"></tl-notification>
</template>
<script setup lang="ts">
import { listData, actions } from "./data";

let clickItem = (val: any) => {
  console.log(val);
};
let clickAction = (val: any) => {
  console.log(val);
};
</script>
<style scoped lang="scss">

</style>
