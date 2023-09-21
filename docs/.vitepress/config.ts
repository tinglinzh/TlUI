import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Tl-UI",
    // 部署的基础路径
    base: "/",
    description: "个人播客",
    themeConfig: {
        search: {
            provider: "local",
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "使用指南", link: "/guide/introduce.md" },
            { text: "组件", link: "/element/choose-city.md" },
        ],

        sidebar: {
            '/guide/': [
                {
                    text: "指南",
                    items: [
                        { text: "介绍", link: "/guide/introduce.md" },
                        { text: "安装", link: "/guide/install.md" },
                        { text: "快速开始", link: "/guide/quick-start.md" },
                        { text: "GIT", link: "/GIT" },
                    ],
                }],
            '/element/': [
                {
                    "text": "组件",
                    items: [
                        {
                            text: "城市选择", link: "/element/choose-city.md"
                        }, {
                            text: "区域选择", link: "/element/choose-area.md"
                        }, {
                            text: "时间选择", link: "/element/choose-time.md"
                        }, {
                            text: "图标选择", link: "/element/choose-icon.md"
                        }, {
                            text: "预览通知", link: "/element/preview-notice.md"
                        }, {
                            text: "导航菜单", link: "/element/menu.md"
                        }, {
                            text: "进度条", link: "/element/progress-bar.md"
                        }, {
                            text: "表单", link: "/element/form.md"
                        }, {
                            text: "表格", link: "/element/table.md"
                        }, {
                            text: "日历", link: "/element/calendar.md"
                        }
                    ]
                }]
        },
        socialLinks: [{ icon: "github", link: "https://github.com/tinglinzh" }],
    },
});
