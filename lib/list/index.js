import { defineComponent as N, resolveComponent as a, openBlock as t, createElementBlock as c, createVNode as k, withCtx as p, Fragment as y, renderList as m, createBlock as h, createCommentVNode as o, createElementVNode as x, toDisplayString as _, createTextVNode as V, resolveDynamicComponent as B } from "vue";
const D = { class: "list-tabs__item" }, E = ["onClick"], T = {
  key: 0,
  class: "avatar"
}, $ = { class: "content" }, q = {
  key: 0,
  class: "title"
}, w = {
  key: 1,
  class: "time"
}, z = {
  key: 2,
  class: "time"
}, F = { class: "actions" }, L = ["onClick"], O = {
  key: 0,
  class: "a-icon"
}, S = {
  key: 1,
  class: "a-text"
}, j = /* @__PURE__ */ N({
  __name: "index",
  props: {
    // 列表的内容
    list: {
      type: Array,
      required: !0
    },
    // 操作的内容
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(n, { emit: i }) {
    const r = (l, d) => {
      i("clickItem", { item: l, index: d });
    }, v = (l, d) => {
      i("clickAction", { item: l, index: d });
    };
    return (l, d) => {
      const f = a("el-avatar"), g = a("el-tag"), C = a("el-tab-pane"), A = a("el-scrollbar"), I = a("el-tabs");
      return t(), c("div", D, [
        k(I, { class: "tab-item" }, {
          default: p(() => [
            k(A, { height: "200px" }, {
              default: p(() => [
                (t(!0), c(y, null, m(n.list, (s, u) => (t(), h(C, {
                  key: u,
                  label: s.title,
                  class: "tab-title"
                }, {
                  default: p(() => [
                    (t(!0), c(y, null, m(s.content, (e, b) => (t(), c("div", {
                      class: "container",
                      key: b,
                      onClick: (J) => r(e, b)
                    }, [
                      e.avatar ? (t(), c("div", T, [
                        k(f, {
                          size: 40,
                          src: e.avatar
                        }, null, 8, ["src"])
                      ])) : o("", !0),
                      x("div", $, [
                        e.title ? (t(), c("div", q, [
                          x("div", null, _(e.title), 1),
                          e.tag ? (t(), h(g, {
                            key: 0,
                            type: e.tagType
                          }, {
                            default: p(() => [
                              V(_(e.tag), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])) : o("", !0)
                        ])) : o("", !0),
                        e.desc ? (t(), c("div", w, _(e.desc), 1)) : o("", !0),
                        e.time ? (t(), c("div", z, _(e.time), 1)) : o("", !0)
                      ])
                    ], 8, E))), 128))
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 1
            }),
            x("div", F, [
              (t(!0), c(y, null, m(n.actions, (s, u) => (t(), c("div", {
                class: "a-item",
                key: u,
                onClick: (e) => v(s, u)
              }, [
                s.icon ? (t(), c("div", O, [
                  (t(), h(B(s.icon)))
                ])) : o("", !0),
                s.text ? (t(), c("div", S, _(s.text), 1)) : o("", !0)
              ], 8, L))), 128))
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const G = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [v, l] of i)
    r[v] = l;
  return r;
}, H = /* @__PURE__ */ G(j, [["__scopeId", "data-v-363a764e"]]), M = {
  install(n) {
    n.component("tl-notice-list", H);
  }
};
export {
  M as default
};
