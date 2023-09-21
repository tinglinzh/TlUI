<template>
  <tl-choose-area @change="changeArea" />
</template>
<script setup lang="ts">
const changeArea = (val: any) => {
  console.log(val);
};
</script>
<style scoped lang="scss"></style>
