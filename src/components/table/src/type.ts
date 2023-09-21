export interface TableOption {
    // 表头
    label: string
    // 字段名称
    prop: string
    // 列宽度
    width?: string | number
    // 对齐方式
    align?: 'left' | 'center' | 'right'
    // 自定义列表模板名称
    slot?: string
    // 是否带有操作项
    action?: boolean
    // 是否可编辑的单元格
    editable?: boolean
}
export interface LoadingOption {
    // 显示在加载图标下方的加载文案
    elementLoadingText?: string
    // 自定义加载图标
    elementLoadingSpinner?: string
    // 自定义加载图标 (与 element-loading-spinner 相同)
    elementLoadingSvg?: string
    // 背景遮罩的颜色
    elementLoadingBackground?: string,
    // 加载图标旋转角度
    elementLoadingSvgViewBox?: string
}
