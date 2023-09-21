<template>
  <tl-menu
    :data="data1"
    defaultActive="2"
    name="a"
    index="b"
    icon="c"
    children="d"
  ></tl-menu>
  <!-- <tl-infinite-menu
    :data="data2"
    defaultActive="1"
    name="a"
    index="b"
    icon="c"
    children="d"
  ></tl-infinite-menu> -->
</template>
<script setup lang="ts">
let data1 = [
  {
    a: "导航1",
    b: "1",
    c: "document",
  },
  {
    a: "导航2",
    b: "2",
    c: "document",
  },
  {
    a: "导航3",
    b: "3",
    c: "document",
    d: [
      {
        a: "导航3-1",
        b: "3-1",
        c: "document",
      },
    ],
  },
];
// let data2 = [
//   {
//     a: "tsx无限层级组件1",
//     b: "1",
//     c: "Document",
//   },
//   {
//     a: "组件2",
//     b: "2",
//     c: "Document",
//   },
//   {
//     a: "组件3",
//     b: "3",
//     c: "Document",
//   },
//   {
//     a: "组件4",
//     b: "4",
//     c: "Document",
//     d: [
//       {
//         a: "4-1",
//         b: "组件4-1",
//         c: "Document",
//       },
//     ],
//   },
// ];
</script>
<style scoped lang="scss">
:deep(svg) {
  width: 16px;
  height: 16px;
}
</style>
