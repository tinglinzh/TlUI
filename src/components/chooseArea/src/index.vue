<template>
  <el-select
    v-model="province"
    placeholder="请选择省份"
    clearable
    filterable
    style="margin-right: 10px"
  >
    <el-option v-for="item in allAreas" :key="item.code" :value="item.name">
    </el-option>
  </el-select>
  <el-select
    :disabled="!province"
    v-model="city"
    placeholder="请选择城市"
    clearable
    filterable
    style="margin-right: 10px"
  >
    <el-option v-for="item in selectCity" :key="item.code" :value="item.name">
    </el-option>
  </el-select>
  <el-select
    :disabled="!city"
    v-model="area"
    placeholder="请选择区域"
    clearable
    filterable
    style="margin-right: 10px"
    v-if="props.areaChooseShow"
  >
    <el-option v-for="item in selectArea" :key="item.code" :value="item.name">
    </el-option>
  </el-select>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
// 引入所有省市区的数据
import allAreas from "../lib/pca-code.json";
export interface AreaItem {
  name: string;
  code: string;
  children?: AreaItem[];
}
export interface Data {
  name: string;
  code: string;
}
let props = defineProps({
  areaChooseShow: {
    type: Boolean,
    default: true,
  },
});
// 下拉框选择省份的值
let province = ref<string>("");
// 城市
let city = ref<string>("");
// 区域
let area = ref<string>("");
// 城市下拉框的所有的值
let selectCity = ref<AreaItem[]>([]);
// 区域下拉框的所有值
let selectArea = ref<AreaItem[]>([]);
// 分发事件给父组件
let emits = defineEmits(["change"]);

watch(
  () => province.value,
  (val) => {
    if (val) {
      let cities = allAreas.find((item) => item.name === province.value)!
        .children!;
      selectCity.value = cities;
    }
    area.value = "";
    city.value = "";
  }
);
watch(
  () => city.value,
  (val) => {
    if (val) {
      let areas = selectCity.value.find((item) => item.name === city.value)!
        .children!;
      selectArea.value = areas;
    }
    area.value = "";
  }
);
// 监听选择区域
watch(
  () => area.value,
  (val) => {
    if (val) {
      let provinceData: Data = {
        name: province.value,
        code: allAreas.find((item: any) => item.name === province.value)!.code,
      };
      let cityData: Data = {
        name: city.value,
        code: selectCity.value.find((item) => item.name === city.value)!.code,
      };
      let areaData: Data = {
        name: val,
        code: selectArea.value.find((item) => item.name === area.value)!.code,
      };
      emits("change", {
        province: provinceData,
        city: cityData,
        area: areaData,
      });
    }
  }
);
</script>
<style scoped lang="scss">
:deep(.el-input__wrapper) {
  height: 30px;
  border-radius: 0;
  width: 100px;
}
</style>
