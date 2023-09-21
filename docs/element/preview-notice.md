## 通知预览

### 按需引入

```js
import previewNotice from "tl-element-plus/previewNotice";
import "tl-element-plus/previewNotice/style.css";
```

### 基础用法

<br/>
<div style='display:flex; flex-direction: column;'>
  <tl-notification :value="3">
    <template #default>
      <tl-notice-list
        @clickItem="clickItem"
        @clickAction="clickAction"
        :list="listData"
        :actions="actions"
      ></tl-notice-list>
    </template>
  </tl-notification>
  <br/>
  <tl-notification :value="10" icon="Apple">
  </tl-notification> 
</div>

 <script setup>
 const listData= [
  {
    title: "通知",
    content: [
      {
        title: "库克回复了你的邮件",
        time: "2023-07-09 16:33:12",
        avatar:
          "https://pica.zhimg.com/v2-44919459e9d14ca2f2a49ee731920d5a_xll.jpg?source=32738c0c",
      },
      {
        title: "贾跃亭邀请你参加北京时间上午10点的会议",
        time: "2020-07-09 8:50:12",
        avatar:
          "https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_61d8a6c0cc7893381e3d771e0d5015f2~c5_300x300.jpeg?from=2956013662",
      },
      {
        title: "李强批准了你的休假申请",
        time: "2023-07-08 14:24:32",
        avatar:
          "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_ac5eb6bb1ffb48ab9776e66987602796~tplv-8yspqt5zfm-300x300.webp?x-expires=1691737200&x-signature=LvhLGwk46BMD2kd0p5iKjDnHd%2FA%3D&from=2480802190",
      },
    ],
  },
  {
    title: "关注",
    content: [
      {
        title: "白夜评论了你",
        time: "2小时前",
        avatar:
          "https://pica.zhimg.com/v2-44919459e9d14ca2f2a49ee731920d5a_xll.jpg?source=32738c0c",
      },
      {
        title: "贾跃亭关注了你",
        desc: "",
        time: "4小时前",
        avatar:
          "https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_61d8a6c0cc7893381e3d771e0d5015f2~c5_300x300.jpeg?from=2956013662",
      },
      {
        title: "tinglin点赞了你的图文",
        desc: "",
        time: "2023-07-08 12:32:21",
        avatar:
          "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_ac5eb6bb1ffb48ab9776e66987602796~tplv-8yspqt5zfm-300x300.webp?x-expires=1691737200&x-signature=LvhLGwk46BMD2kd0p5iKjDnHd%2FA%3D&from=2480802190",
      },
    ],
  },
  {
    title: "待办",
    content: [
      {
        title: "环境配置",
        desc: "任务将于2023-07-13发布",
        tagType: "info",
        tag: "未开始",
      },
      {
        title: "代码bug紧急处理",
        desc: "请于2023-07-12前完成",
        tagType: "danger",
        tag: "进行中",
      },
      {
        title: "信息安全考试",
        desc: "请于2023-07-08前完成",
        tagType: "success",
        tag: "已完成",
      },
    ],
  },
];
 const actions= [
{ text: "清空", icon: "delete" },
{ text: "查看全部", icon: "Edit" },
];
let clickItem = (val) => {console.log(val);
};
let clickAction = (val) => {
console.log(val);
};
</script>

### 代码示例

```js
<br/>
<div style='display:flex; flex-direction: column;'>
  <tl-notification :value="3">
      <template #default>
       <tl-notice-list @clickItem="clickItem"
        @clickAction="clickAction"
        :list="listData"
        :actions="actions"
        >
       </tl-notice-list>
      </template>
  </tl-notification>
  <br/>
  <tl-notification :value="10" icon="Apple" ></tl-notification>
</div>
<script setup lang="ts">
const listData = [
  {
    title: "通知",
    content: [
      {
        title: "库克回复了你的邮件",
        time: "2023-07-09 16:33:12",
        avatar:
          "https://pica.zhimg.com/v2-44919459e9d14ca2f2a49ee731920d5a_xll.jpg?source=32738c0c",
      },
      {
        title: "贾跃亭邀请你参加北京时间上午10点的会议",
        time: "2020-07-09 8:50:12",
        avatar:
          "https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_61d8a6c0cc7893381e3d771e0d5015f2~c5_300x300.jpeg?from=2956013662",
      },
      {
        title: "李强批准了你的休假申请",
        time: "2023-07-08 14:24:32",
        avatar:
          "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_ac5eb6bb1ffb48ab9776e66987602796~tplv-8yspqt5zfm-300x300.webp?x-expires=1691737200&x-signature=LvhLGwk46BMD2kd0p5iKjDnHd%2FA%3D&from=2480802190",
      },
    ],
  },
  {
    title: "关注",
    content: [
      {
        title: "白夜评论了你",
        time: "2小时前",
        avatar:
          "https://pica.zhimg.com/v2-44919459e9d14ca2f2a49ee731920d5a_xll.jpg?source=32738c0c",
      },
      {
        title: "贾跃亭关注了你",
        desc: "",
        time: "4小时前",
        avatar:
          "https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_61d8a6c0cc7893381e3d771e0d5015f2~c5_300x300.jpeg?from=2956013662",
      },
      {
        title: "tinglin点赞了你的图文",
        desc: "",
        time: "2023-07-08 12:32:21",
        avatar:
          "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_ac5eb6bb1ffb48ab9776e66987602796~tplv-8yspqt5zfm-300x300.webp?x-expires=1691737200&x-signature=LvhLGwk46BMD2kd0p5iKjDnHd%2FA%3D&from=2480802190",
      },
    ],
  },
  {
    title: "待办",
    content: [
      {
        title: "环境配置",
        desc: "任务将于2023-07-13发布",
        tagType: "info",
        tag: "未开始",
      },
      {
        title: "代码bug紧急处理",
        desc: "请于2023-07-12前完成",
        tagType: "danger",
        tag: "进行中",
      },
      {
        title: "信息安全考试",
        desc: "请于2023-07-08前完成",
        tagType: "success",
        tag: "已完成",
      },
    ],
  },
];

 const actions= [
  { text: "清空", icon: "delete" },
  { text: "查看全部", icon: "Edit" },
];

let clickItem = (val: any) => {
  console.log(val);
};
let clickAction = (val: any) => {
  console.log(val);
};
</script>
```
