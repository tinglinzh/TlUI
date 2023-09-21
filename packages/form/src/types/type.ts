// 可配置的表单
import { CSSProperties } from "vue";
import { RuleItem } from "./rule";
// 表单每一项的配置选项
export interface FormOptions {
    // 表单项的显示元素
    type:
    | "cascader"
    | "checkox"
    | "checkox-group"
    | "checkbox-button"
    | "color-picker"
    | "date-picker"
    | "input"
    | "input-number"
    | "radio"
    | "radio-group"
    | "radio-button"
    | "rate"
    | "select"
    | "option"
    | "slider"
    | "switch"
    | "time-picker"
    | "time-select"
    | "transfer"
    | "upload";
    // 表单项的值
    value?: any;
    //   表单label
    label?: string;
    //   表单的标识
    prop?: string;
    //   表单验证规则
    rules?: RuleItem[];
    //   表单项的占位符
    placeholder?: string;
    // 上传组件tip提示说明文字
    tip?: string
    //   表单元素特有的属性
    attrs?: {
        clearable?: boolean;
        showPassword?: boolean;
        disabled?: boolean;
        // css样式
        style?: CSSProperties
    };
    // 表单项的子元素：
    children?: FormOptions[]
    // 上传组件的事件和方法
    uploadAttrs?: {
        actions: string,
        headers?: object,
        method?: 'post' | 'put' | 'patch',
        multiple?: boolean,
        data?: any,
        name?: string,
        withCredentials?: boolean,
        showFileList?: boolean,
        drag?: boolean,
        accept?: string,
        thumbnallMode?: boolean,
        fileList?: any,
        listType?: 'text' | 'picture' | 'picture-card'
        autoUpload?: boolean,
        disabled?: boolean,
        limit?: number,
    }

}
