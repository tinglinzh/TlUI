<template>
  <el-table
    v-bind="$attrs"
    :data="tableData"
    v-loading="loading"
    :element-loading-text="loadingOptions.elementLoadingText"
    :element-loading-spinner="loadingOptions.elementLoadingSpinner"
    :element-loading-background="loadingOptions.elementLoadingBackground"
    :element-loading-svg-view-box="loadingOptions.elementLoadingSvgViewBox"
    @row-click="rowClick"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :algin="item.align"
        :width="item.width"
      >
        <template #default="scope">
          <!-- 可编辑行的表格 -->
          <template v-if="scope.row.rowEdit">
            <el-input v-model="scope.row[item.prop]" size="small"></el-input>
          </template>
          <!-- 没有编辑行的表格 -->
          <template v-else>
            <!-- 点击修改图标后显示输入框 -->
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div class="edit_input">
                <el-input v-model="editValue" size="small"></el-input>
                <slot
                  name="editCell"
                  :scope="scope"
                  v-if="$slots.editCell"
                ></slot>
                <div v-else style="display: flex">
                  <Close class="close" @click.stop="closeEdit" />
                  <!-- 点击时拿到当前修改的key值 -->
                  <Check class="check" @click.stop="submitEdit(item.prop)" />
                </div>
              </div>
            </template>
            <!-- 默认无点击状态下显示表格 -->
            <template v-else>
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <span v-else>{{ scope.row[item.prop] }}</span>
              <component
                :is="editIcon"
                @click.stop="clickEdit(scope, scope.row[item.prop])"
                v-if="item.editable"
              />
            </template>
          </template>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOptions?.label"
      :algin="actionOptions?.align"
      :width="actionOptions?.width"
    >
      <template #default="scope">
        <slot name="editRow" :scope="scope" v-if="scope.row.rowEdit"></slot>
        <slot name="action" :scope="scope" v-else @click="clickAction"></slot>
      </template>
    </el-table-column>
  </el-table>
  <div
    class="pagination"
    :style="{ justifyContent: paginationAlignJustify }"
    v-if="pagination"
  >
    <el-pagination
      :currentPage="currentPage"
      :total="Number(total)"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      layout="sizes,prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script setup lang="ts">
import { PropType, computed, ref, onMounted, watch } from "vue";
import { TableOption, LoadingOption } from "./type";
import cloneDeep from "lodash/cloneDeep";
let props = defineProps({
  //   表格配置
  options: {
    type: Array as PropType<TableOption[]>,
    required: true,
  },
  //   表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  //   加载loading配置
  loadingOptions: {
    type: Object as PropType<LoadingOption>,
    default: null,
  },
  //   加载中的图标
  editIcon: {
    type: String,
    default: "edit",
  },
  //   加载loading的状态
  loading: {
    type: Boolean,
    default: false,
  },
  //   是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false,
  },
  //   编辑行的按钮标识
  editRowIndex: {
    type: String,
    default: "",
  },
  //   是否启用分页
  pagination: {
    type: Boolean,
    default: false,
  },
  //   当前页数
  currentPage: {
    type: Number,
    default: 1,
  },
  //   当前一页多少条数据
  pageSize: {
    type: Number,
    default: 10,
  },
  // 分页的排列方式
  paginationAlign: {
    type: String as PropType<"left" | "center" | "right">,
    default: "center",
  },
  //   总数据
  total: {
    type: Number,
    default: 1,
  },
  //   每页显示多少条数据选择器
  pageSizes: {
    type: Array,
    default: () => [10, 20, 30, 40],
  },
  pageCount: {
    type: Number,
  },
});
// 分发事件
let emits = defineEmits([
  "submitEdit",
  "update:editRowIndex",
  "current-change",
  "size-change",
]);
onMounted(() => {
  tableData.value.map((item) => {
    // 代表当前是否是可编辑的状态
    item.rowEdit = false;
  });
});
// 监听父组件传递过来的数据
watch(
  () => props.data,
  (val) => {
    tableData.value = cloneDeep(val);
    tableData.value.map((item) => {
      // 代表当前是否是可编辑的状态
      item.rowEdit = false;
    });
  },
  { deep: true }
);
// 监听父组件传递过来的标识;
watch(
  () => props.editRowIndex,
  (val) => {
    // 如果父组件传过来按钮的标识 将按钮的标识赋值给cloneEditRowIndex，
    if (val) cloneEditRowIndex.value = val;
  }
);

// 分页的每一页数据变化
let handleSizeChange = (val: number) => {
  emits("size-change", val);
};
// 分页页数改变
let handleCurrentChange = (val: number) => {
  emits("current-change", val);
};
// 拷贝一份表格的数据
let tableData = ref<any[]>(cloneDeep(props.data));
// 按钮的标识
let cloneEditRowIndex = ref<any>(null);
// 表单空对象
let formData = ref<any>(null);
// 修改框的value值
let editValue = ref<any>("");
// 当前点击的单元格
let currentEdit = ref<string>("");
// 点击编辑图标
let clickEdit = (scope: any, value: any) => {
  // 拿到当前点击对象的所有数据
  formData.value = scope.row;
  currentEdit.value = scope.$index + scope.column.id;
  editValue.value = value;
};

// 关闭修改框
const closeEdit = () => {
  currentEdit.value = "";
};
// 提交修改后的值
const submitEdit = (key: any) => {
  formData.value[key] = editValue.value;
  emits("submitEdit", formData);
  currentEdit.value = "";
};
// 点击每一行的事件
let rowClick = (row: any, column: any) => {
  // 判断是否是点击的操作项
  if (column.label === actionOptions.value!.label) {
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      //   如果点击编辑行之前先点击了单个单元格的修改，并且没有提交，那么先清空单个修改框的状态
      if (currentEdit) {
        currentEdit.value = "";
      }
      // 编辑行的操作
      row.rowEdit = !row.rowEdit;
      // 重置其他数据的rowEdit
      tableData.value.map((item) => {
        if (item !== row) item.rowEdit = false;
      });
      // 重置按钮的标识
      if (!row.rowEdit) emits("update:editRowIndex", "");
    }
  }
};

let paginationAlignJustify = computed(() => {
  if (props.paginationAlign === "left") return "flex-start";
  if (props.paginationAlign === "center") return "center";
  else {
    return "flex-start";
  }
});
// 过滤操作选项之后的配置
let tableOptions = computed(() => props.options.filter((item) => !item.action));
// 找出操作项的配置
let actionOptions = computed(() => props.options.find((item) => item.action));
</script>
<style scoped lang="scss">
svg {
  position: relative;
  top: 3px;
  left: 4px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.edit_input {
  display: flex;
  svg {
    width: 18px;
    height: 18px;
    margin-left: 10px;
  }
  .check {
    color: rgba(17, 153, 26, 0.904);
  }
  .close {
    color: rgba(255, 4, 4, 0.945);
  }
}
.pagination {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
</style>
