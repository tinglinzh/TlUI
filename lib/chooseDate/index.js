import { defineComponent as g, ref as p, watch as c, resolveComponent as y, openBlock as b, createElementBlock as V, createElementVNode as m, createVNode as _, mergeProps as D, unref as r, isRef as f } from "vue";
const k = { class: "date_prick" }, x = { style: { "margin-right": "20px" } }, C = /* @__PURE__ */ g({
  __name: "index",
  props: {
    startDatePlaceholder: {
      type: String,
      default: "请选择开始日期"
    },
    endDatePlaceholder: {
      type: String,
      default: "请选择结束日期"
    },
    //   是否禁用选择今天之前的日期
    disableToday: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["startDateChange", "endDateChange"],
  setup(a, { emit: o }) {
    const n = a;
    let t = p(null), l = p(null), i = p(!0);
    const v = (e) => {
      if (n.disableToday)
        return e.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
    };
    let h = (e) => {
      if (t.value)
        return e.getTime() < t.value.getTime() + 1e3 * 60 * 60 * 24;
    };
    return c(
      () => t.value,
      (e) => {
        e ? (o("startDateChange", e), i.value = !1) : (l.value = null, i.value = !0);
      }
    ), c(
      () => l.value,
      (e) => {
        e && o("endDateChange", {
          startDate: t.value,
          endDate: e
        });
      }
    ), (e, s) => {
      const u = y("el-date-picker");
      return b(), V("div", k, [
        m("div", x, [
          _(u, D({
            modelValue: r(t),
            "onUpdate:modelValue": s[0] || (s[0] = (d) => f(t) ? t.value = d : t = d),
            type: "date",
            placeholder: a.startDatePlaceholder,
            size: "small",
            "disabled-date": v
          }, e.$attrs.startOptions, { "popper-class": "date_popover" }), null, 16, ["modelValue", "placeholder"])
        ]),
        m("div", null, [
          _(u, D({
            modelValue: r(l),
            "onUpdate:modelValue": s[1] || (s[1] = (d) => f(l) ? l.value = d : l = d),
            type: "date",
            placeholder: a.endDatePlaceholder,
            size: "small",
            disabled: r(i),
            "disabled-date": r(h)
          }, e.$attrs.endOptions, { "popper-class": "date_popover" }), null, 16, ["modelValue", "placeholder", "disabled", "disabled-date"])
        ])
      ]);
    };
  }
});
const P = (a, o) => {
  const n = a.__vccOpts || a;
  for (const [t, l] of o)
    n[t] = l;
  return n;
}, T = /* @__PURE__ */ P(C, [["__scopeId", "data-v-0e42cf41"]]), O = {
  install(a) {
    a.component("tl-choose-date", T);
  }
};
export {
  O as default
};
