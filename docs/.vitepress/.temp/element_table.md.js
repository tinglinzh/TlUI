import { useSSRContext, ref, onMounted, resolveComponent, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import axios from "axios";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const table_md_vue_type_style_index_0_scoped_ca55e159_lang = "";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"element/table.md","filePath":"element/table.md"}');
const __default__ = { name: "element/table.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    let tableData = ref([]);
    let current = ref(1);
    let pageSize = ref(10);
    let total = ref(0);
    const getData = () => {
      isLoading.value = true;
      axios.get(
        `https://mock.presstime.cn/mock/64894cc93acfaff926286b1a/example/table/?current=${current.value}&pageSize=${pageSize.value}`
      ).then((res) => {
        isLoading.value = false;
        total.value = res.data.data.count;
        tableData.value = res.data.data.data;
      });
    };
    onMounted(() => {
      getData();
    });
    const sizeChange = (val) => {
      pageSize.value = val;
      getData();
    };
    const currentChange = (val) => {
      current.value = val;
      getData();
    };
    const isLoading = ref(false);
    const options = [
      {
        label: "日期",
        prop: "dateTime",
        align: "center",
        width: "180"
      },
      {
        label: "姓名",
        prop: "name",
        editable: true,
        align: "center"
      },
      {
        label: "地址",
        prop: "address",
        align: "center",
        slot: "address",
        editable: true
      },
      { prop: "operator", label: "操作", align: "center", action: true }
    ];
    let loadingOptions = {
      elementLoadingText: "加载中，请稍后"
    };
    let editRowIndex = ref("");
    let editClick = () => {
      editRowIndex.value = "edit";
    };
    const submitEdit = (res) => {
      console.log(res);
      isLoading.value = true;
      let i = tableData.value.find((item) => item.ID == res.ID);
      setTimeout(() => {
        tableData.value[tableData.value.indexOf(i)] = res;
        isLoading.value = false;
        console.log(tableData);
      }, 1e3);
    };
    const editConfirm = (scope) => {
      isLoading.value = true;
      let i = tableData.value.find((item) => item.ID == scope.row.ID);
      setTimeout(() => {
        tableData.value[tableData.value.indexOf(i)] = scope.row;
        isLoading.value = false;
      }, 1e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_tl_table = resolveComponent("tl-table");
      const _component_AddLocation = resolveComponent("AddLocation");
      const _component_el_button = resolveComponent("el-button");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ca55e159><h2 id="表格" tabindex="-1" data-v-ca55e159>表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;" data-v-ca55e159>​</a></h2><h3 id="按需引入" tabindex="-1" data-v-ca55e159>按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;" data-v-ca55e159>​</a></h3><h3 id="基础使用" tabindex="-1" data-v-ca55e159>基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;" data-v-ca55e159>​</a></h3><div data-v-ca55e159>`);
      _push(ssrRenderComponent(_component_tl_table, {
        isEditRow: "",
        pagination: "",
        paginationAlign: "center",
        data: unref(tableData),
        options,
        loading: isLoading.value,
        loadingOptions: unref(loadingOptions),
        onSubmitEdit: submitEdit,
        editRowIndex: unref(editRowIndex),
        "onUpdate:editRowIndex": ($event) => isRef(editRowIndex) ? editRowIndex.value = $event : editRowIndex = $event,
        currentPage: unref(current),
        pageSize: unref(pageSize),
        total: unref(total),
        border: "",
        onSizeChange: sizeChange,
        onCurrentChange: currentChange
      }, {
        address: withCtx(({ scope }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AddLocation, null, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(scope.row.address)}`);
          } else {
            return [
              createVNode(_component_AddLocation),
              createTextVNode(" " + toDisplayString(scope.row.address), 1)
            ];
          }
        }),
        action: withCtx(({}, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              size: "small",
              onClick: unref(editClick)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`编辑`);
                } else {
                  return [
                    createTextVNode("编辑")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              type: "danger",
              size: "small"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`删除`);
                } else {
                  return [
                    createTextVNode("删除")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_button, {
                type: "primary",
                size: "small",
                onClick: unref(editClick)
              }, {
                default: withCtx(() => [
                  createTextVNode("编辑")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_el_button, {
                type: "danger",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode("删除")
                ]),
                _: 1
              })
            ];
          }
        }),
        editRow: withCtx(({ scope }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              size: "small",
              onClick: ($event) => editConfirm(scope)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`确认`);
                } else {
                  return [
                    createTextVNode("确认")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              type: "danger",
              size: "small"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`取消`);
                } else {
                  return [
                    createTextVNode("取消")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_button, {
                type: "primary",
                size: "small",
                onClick: ($event) => editConfirm(scope)
              }, {
                default: withCtx(() => [
                  createTextVNode("确认")
                ]),
                _: 2
              }, 1032, ["onClick"]),
              createVNode(_component_el_button, {
                type: "danger",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode("取消")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("element/table.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const table = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca55e159"]]);
export {
  __pageData,
  table as default
};
