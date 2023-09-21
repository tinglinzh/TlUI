<template>
  <el-form
    ref="form"
    v-if="model"
    :validate-on-rule-change="false"
    v-bind="$attrs"
    :model="model"
    :rules="rules"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        :label="item.label"
        :prop="item.prop"
        v-if="!item.children || !item.children!.length"
      >
        <component
          v-if="item.type !== 'upload'"
          v-bind="item.attrs"
          :placeholder="item.placeholder"
          v-model="model[item.prop!]"
          :is="`el-${item.type}`"
        >
        </component>
        <el-upload
          v-bind="item.uploadAttrs"
          v-else
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :on-exceed="onExceed"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
        >
          <slot name="trigger"></slot>
          <template #tip>
            <div class="el-upload__tip" v-if="item.tip">
              {{ item.tip }}
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-bind="item.attrs"
          :placeholder="item.placeholder"
          v-model="model[item.prop!]"
          :is="`el-${item.type}`"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :is="`el-${child.type}`"
            :label="child.label"
            :value="child.value"
          ></component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :form="form" :model="model"> </slot>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { PropType, ref, onMounted, watch } from "vue";
import { FormOptions } from "./types/type";
import cloneDeep from "lodash/cloneDeep";
import { FormInstance } from "element-plus";
let model = ref<any>(null);
let rules = ref<any>(null);
let form = ref<FormInstance | null>();
let emits = defineEmits([
  "on-preview",
  "on-remove",
  "on-success",
  "on-error",
  "on-progress",
  "on-change",
  "on-exceed",
  "before-upload",
  "before-remove",
]);
let props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  httpRequest: {
    type: Function,
  },
});
// 初始化表单
const initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {};
    let r: any = {};
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
};

onMounted(() => {
  initForm();
});
watch(
  () => props.options,
  () => {
    initForm();
  },
  { deep: true }
);

//上传组件的所有方法
let onPreview = (file: File) => {
  emits("on-preview", file);
};
let onRemove = (file: File, fileList: FileList) => {
  emits("on-remove", { file, fileList });
};
let onChange = (file: File, fileList: FileList) => {
  emits("on-change", { file, fileList });
};
let onError = (err: any, file: File, fileList: FileList) => {
  emits("on-error", { err, file, fileList });
};
let onExceed = (files: File, fileList: FileList) => {
  emits("on-exceed", { files, fileList });
};
let onProgress = (event: any, file: File, fileList: FileList) => {
  emits("on-progress", { event, file, fileList });
};
let onSuccess = (response: any, file: File, fileList: FileList) => {
  // 上传成功，给表单赋值
  let uploadItem = props.options.find((item) => item.type === "upload")!;
  model.value[uploadItem.prop!] = { response, file, fileList };
  emits("on-success", response, file, fileList);
};
let beforeUpload = (file: File) => {
  emits("before-upload", file);
};
let beforeRemove = (file: File, fileList: FileList) => {
  emits("before-remove", { file, fileList });
};
</script>
<style scoped lang="scss"></style>
