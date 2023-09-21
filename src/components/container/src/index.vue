<template>
  <el-container>
    <NavSide :collapse="collapse" />
    <el-container>
      <el-header>
        <NavHeader v-model:collapse="collapse" />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import { ref } from "vue";
import NavHeader from "./navHeader/index.vue";
import NavSide from "./navSide/index.vue";
let collapse = ref(false);
</script>
<style scoped lang="scss">
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
