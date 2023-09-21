import { defineComponent as g, ref as m, watch as u, resolveComponent as h, openBlock as T, createElementBlock as y, createElementVNode as p, createVNode as f, mergeProps as c, unref as d, isRef as S } from "vue";
const v = { style: { display: "flex" } }, V = { style: { "margin-right": "20px" } }, x = /* @__PURE__ */ g({
  __name: "index",
  props: {
    // 开始时间占位符
    startPlaceholder: {
      type: String,
      default: "请选择开始时间"
    },
    //   开始时间的初始化选择
    startTimeStart: {
      type: String,
      default: "08:00"
    },
    //   开始时间的步进
    startStep: {
      type: String,
      default: "00:30"
    },
    //   开始时间的结束选择
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    // 结束时间占位符
    endPlaceholder: {
      type: String,
      default: "请选择结束时间"
    },
    //   结束时间的初始化选择
    endTimeStart: {
      type: String,
      default: "08:00"
    },
    //   结束时间的步进
    endStep: {
      type: String,
      default: "00:30"
    },
    //   结束时间的结束选择
    endtTimeEnd: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: s }) {
    let l = m(""), a = m(""), r = m(!0);
    return u(
      () => l.value,
      (t) => {
        t === "" && (a.value = "", r.value = !0), t && (r.value = !1, s("startChange", t));
      }
    ), u(
      () => a.value,
      (t) => {
        s("endChange", {
          startTime: l.value,
          endTime: t
        });
      }
    ), (t, i) => {
      const o = h("el-time-select");
      return T(), y("div", v, [
        p("div", V, [
          f(o, c({
            modelValue: d(l),
            "onUpdate:modelValue": i[0] || (i[0] = (n) => S(l) ? l.value = n : l = n),
            "max-time": d(a),
            placeholder: e.startPlaceholder,
            start: e.startTimeStart,
            step: e.startStep
          }, t.$attrs.startOptions, { end: e.startTimeEnd }), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"])
        ]),
        p("div", null, [
          f(o, c({
            modelValue: d(a),
            "onUpdate:modelValue": i[1] || (i[1] = (n) => S(a) ? a.value = n : a = n),
            "min-time": d(l),
            placeholder: e.endPlaceholder,
            start: e.endTimeStart,
            step: e.endStep,
            end: e.endtTimeEnd,
            disabled: d(r)
          }, t.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
}), E = {
  install(e) {
    e.component("tl-choose-time", x);
  }
};
export {
  E as default
};
