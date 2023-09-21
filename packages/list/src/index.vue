<template>
  <div class="list-tabs__item">
    <el-tabs class="tab-item">
      <el-scrollbar height="200px">
        <el-tab-pane
          v-for="(item, index) in list"
          :key="index"
          :label="item.title"
          class="tab-title"
        >
          <div
            class="container"
            v-for="(item1, index1) in item.content"
            :key="index1"
            @click="clickItem(item1, index1)"
          >
            <div class="avatar" v-if="item1.avatar">
              <el-avatar :size="40" :src="item1.avatar" />
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>{{ item1.title }}</div>
                <el-tag :type="item1.tagType" v-if="item1.tag">{{
                  item1.tag
                }}</el-tag>
              </div>
              <div v-if="item1.desc" class="time">{{ item1.desc }}</div>
              <div v-if="item1.time" class="time">{{ item1.time }}</div>
            </div>
          </div>
        </el-tab-pane>
      </el-scrollbar>
      <div class="actions">
        <div
          class="a-item"
          v-for="(action, i) in actions"
          :key="i"
          @click="clickAction(action, i)"
        >
          <div class="a-icon" v-if="action.icon">
            <component :is="action.icon"></component>
          </div>
          <div class="a-text" v-if="action.text">{{ action.text }}</div>
        </div>
      </div>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { ListOptions, ActionOpions, ListItem } from "./type.ts";
let props = defineProps({
  // 列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOpions[]>,
    default: () => [],
  },
});
let emits = defineEmits(["clickItem", "clickAction"]);
const clickItem = (item: ListItem, index: number) => {
  emits("clickItem", { item, index });
};
const clickAction = (item: ActionOpions, index: number) => {
  emits("clickAction", { item, index });
};
</script>
<style scoped lang="scss">
.container {
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  background-color: #fff;

  .avatar {
    width: 40px;
    height: 40px;
  }
  .content {
    flex: 1;
    margin-left: 10px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
    }
    .time {
      margin-top: 10px;
      font-size: 12px;
      color: #999;
    }
  }
}
.container:hover {
  opacity: 0.8;
}
.actions {
  height: 20px;
  padding-top: 5px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  .a-item {
    cursor: pointer;
    flex: 1;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    .a-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
}
</style>
