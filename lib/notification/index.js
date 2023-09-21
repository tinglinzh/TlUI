import { defineComponent as i, resolveComponent as c, openBlock as r, createBlock as s, withCtx as l, renderSlot as p, createVNode as d, resolveDynamicComponent as _ } from "vue";
const u = /* @__PURE__ */ i({
  __name: "index",
  props: {
    // 显示图标
    icon: {
      type: String,
      default: "Bell"
    },
    // 通知数量
    value: {
      type: [String, Number],
      default: ""
    },
    // 最大值
    max: {
      type: Number
    },
    isDot: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, o) => {
      const n = c("el-badge"), a = c("el-popover");
      return r(), s(a, {
        placement: "bottom",
        width: 400,
        trigger: "click",
        "popper-class": "popper_style"
      }, {
        default: l(() => [
          p(t.$slots, "default", {}, void 0, !0)
        ]),
        reference: l(() => [
          d(n, {
            style: { cursor: "pointer" },
            value: e.value,
            max: e.max,
            "is-Dot": e.isDot
          }, {
            default: l(() => [
              (r(), s(_(e.icon), { class: "icon_size" }))
            ]),
            _: 1
          }, 8, ["value", "max", "is-Dot"])
        ]),
        _: 3
      });
    };
  }
});
const m = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, a] of t)
    o[n] = a;
  return o;
}, f = /* @__PURE__ */ m(u, [["__scopeId", "data-v-79d1d91e"]]), x = {
  install(e) {
    e.component("tl-notification", f);
  }
};
export {
  x as default
};
