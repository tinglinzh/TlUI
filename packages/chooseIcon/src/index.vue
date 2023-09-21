<template>
    <el-button @click="handleClick" type="primary">
        <slot></slot>
    </el-button>
    <el-dialog :title="title" :modelValue="visible" :before-Close="colseDialog" class="tl-dialog__body" top="12.5vh">
        <el-scrollbar>
            <div class="icons">
                <div v-for=" (item, index) in Object.keys(ElementPlusIconsVue)" :key="index" class="icon_item"
                    @click="clickItem(item)">
                    <!-- 使用component动态组件 -->
                    <component :is="item"></component>
                    <div class="icon_name">{{ item }}</div>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>
<script setup lang='ts'>
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { useCopy } from "../../hooks/useCopy/index";
let props = defineProps<{
    // 弹出框的标题
    title: string,
    // 控制弹出框的显示与隐藏
    visible: boolean
}>()
let emits = defineEmits(['update:visible'])
const handleClick = () => {
    // 需要修改父组件的数据
    emits('update:visible', !props.visible)
}
// 关闭dialog的时候修改visible的值
const colseDialog = () => {
    emits('update:visible', !props.visible)
}

// 点击复制
const clickItem = (item: string) => {
    let text = `<${item}/>`
    useCopy(text)
}
</script>
<style scoped lang='scss'>
.icons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.icon_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    width: 25%;
    margin-bottom: 20px;
    box-sizing: border-box;
    height: 75px;
}

.icon_name {
    flex: 1;
    word-break: break-all
}

svg {
    cursor: pointer;
    width: 2em;
    height: 2em;
}
</style>