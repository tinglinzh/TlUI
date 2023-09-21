import { defineComponent as a, ref as p, onMounted as l, resolveComponent as c, openBlock as _, createBlock as i, mergeProps as u, unref as d } from "vue";
const f = /* @__PURE__ */ a({
  __name: "index",
  props: {
    // 进度条进度
    percentage: {
      type: Number,
      default: 0
    },
    isAnimation: {
      type: Boolean,
      default: !1
    },
    // 动画时长(毫秒)
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(n) {
    const e = n;
    let t = p(0);
    return l(() => {
      if (e.isAnimation) {
        let o = Math.ceil(e.time / e.percentage), r = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(r));
        }, o);
      } else
        t.value = e.percentage;
    }), (o, r) => {
      const s = c("el-progress");
      return _(), i(s, u(o.$attrs, {
        percentage: d(t),
        "stroke-width": 6
      }), null, 16, ["percentage"]);
    };
  }
});
const m = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [o, r] of e)
    t[o] = r;
  return t;
}, g = /* @__PURE__ */ m(f, [["__scopeId", "data-v-8d98bf65"]]), x = {
  install(n) {
    n.component("tl-progress", g);
  }
};
export {
  x as default
};
