<template>
  <tl-form :options="options" label-width="100px">
    <template #trigger>
      <el-button type="primary" size="default" @click="">点击上传 </el-button>
    </template>
    <template #action="scope">
      <el-button type="primary" size="default" @click="submitForm(scope)"
        >提交</el-button
      >
      <el-button size="default" @click="resetForm(scope)">Reset</el-button>
    </template>
  </tl-form>
</template>
<script setup lang="ts">
import { ElMessage, FormInstance } from "element-plus";
import { FormOptions } from "../../components/form/src/types/type";

interface Scope {
  form: FormInstance;
  model: any;
}
let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "username",
    placeholder: "请设置用户名",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名在2-6位之间",
        trigger: "blur",
      },
    ],
    attrs: { clearable: true },
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    placeholder: "请设置密码",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 6,
        max: 15,
        message: "密码在6-15位之间",
        trigger: "blur",
      },
    ],
    attrs: { showPassword: true, clearable: true },
  },
  {
    type: "select",
    value: "",
    prop: "role",
    placeholder: "请选择职位",
    label: "职位",
    attrs: {
      style: {
        width: "100%",
      },
    },
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "option",
        label: "经理",
        value: "1",
      },
      {
        type: "option",
        label: "主管",
        value: "2",
      },
      {
        type: "option",
        label: "员工",
        value: "3",
      },
    ],
  },
  {
    type: "radio-group",
    value: "",
    prop: "gender",
    label: "性别",
    rules: [
      {
        required: true,
        message: "性别不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "radio",
        label: "男",
        value: "male",
      },
      {
        type: "radio",
        label: "女",
        value: "female",
      },
      {
        type: "radio",
        label: "保密",
        value: "not",
      },
    ],
  },

  {
    type: "upload",
    label: "点击上传",
    prop: "pic",
    tip: "上传文件不能大于500kb",
    uploadAttrs: {
      actions: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
    },
  },
];
let resetForm = (scope: Scope) => {
  scope.form.resetFields();
};
let submitForm = (scope: Scope) => {
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model);
    } else {
      ElMessage.error("表单填写有误");
    }
  });
};
</script>
<style scoped lang="scss"></style>
