<template>
  <tl-table
    isEditRow
    pagination
    paginationAlign="center"
    :data="tableData"
    :options="options"
    :loading="isLoading"
    :loadingOptions="loadingOptions"
    @submitEdit="submitEdit"
    v-model:editRowIndex="editRowIndex"
    :currentPage="current"
    :pageSize="pageSize"
    :total="total"
    border
    @size-change="sizeChange"
    @current-change="currentChange"
  >
    <template #address="{ scope }">
      <AddLocation />
      {{ scope.row.address }}
    </template>
    <template #action="{}">
      <el-button type="primary" size="small" @click="editClick">编辑</el-button>
      <el-button type="danger" size="small">删除</el-button> </template
    ><template #editRow="{ scope }">
      <el-button type="primary" size="small" @click="editConfirm(scope)"
        >确认</el-button
      >
      <el-button type="danger" size="small">取消</el-button>
    </template>
    <!-- 自定义单个数据的编辑时，确认、取消样式 -->
    <!-- <template #editCell="{ scope }">
      <el-button type="primary" size="small" @click="">确认</el-button>
      <el-button type="danger" size="small" @click="">取消</el-button>
    </template> -->
  </tl-table>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { TableOption } from "../../components/table/src/type";
import axios from "axios";
interface TableData {
  ID: number;
  datename: string;
  name: string;
  address: string;
}

let tableData = ref<TableData[]>([]);
// 页数.默认为1
let current = ref<number>(1);
// 每页展示数据条数
let pageSize = ref<number>(10);
// 数据总数
let total = ref<number>(0);
// 获取数据
const getData = () => {
  isLoading.value = true;
  axios
    .get(
      `https://mock.presstime.cn/mock/64894cc93acfaff926286b1a/example/table/?current=${current.value}&pageSize=${pageSize.value}`
    )
    .then((res: any) => {
      isLoading.value = false;
      total.value = res.data.data.count;
      tableData.value = res.data.data.data;
    });
};
// 发送请求拿到数据
onMounted(() => {
  getData();
});
const sizeChange = (val: number) => {
  pageSize.value = val;
  getData();
};
const currentChange = (val: number) => {
  current.value = val;
  getData();
};
const isLoading = ref<boolean>(false);
// 表格配置
const options: TableOption[] = [
  {
    label: "日期",
    prop: "dateTime",
    align: "center",
    width: "180",
  },
  {
    label: "姓名",
    prop: "name",
    editable: true,
    align: "center",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
    slot: "address",
    editable: true,
  },
  { prop: "operator", label: "操作", align: "center", action: true },
];
let loadingOptions = {
  elementLoadingText: "加载中，请稍后",
};
let editRowIndex = ref<string>("");

let editClick = () => {
  editRowIndex.value = "edit";
};
const submitEdit = (res: any) => {
  console.log(res);

  isLoading.value = true;
  let i = tableData.value.find((item) => item.ID == res.ID);
  setTimeout(() => {
    tableData.value[tableData.value.indexOf(i!)] = res;
    isLoading.value = false;
    console.log(tableData);
  }, 1000);
};

const editConfirm = (scope: any) => {
  //   修改行数据后点击确认按钮可以通过插槽作用域scope拿到修改后这一行数据的值
  isLoading.value = true;
  let i = tableData.value.find((item) => item.ID == scope.row.ID);
  setTimeout(() => {
    tableData.value[tableData.value.indexOf(i!)] = scope.row;
    isLoading.value = false;
  }, 1000);
};
</script>
<style scoped lang="scss">
svg {
  width: 14px;
  height: 14px;
}
</style>
