import { defineComponent as Zi, onMounted as $i, ref as Xi, watch as Ji, openBlock as Ki, createElementBlock as es } from "vue";
var st, A, br, me, te, pn, yr, Er, Qe = {}, Ar = [], ts = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function G(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Sr(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function p(t, e, n) {
  var r, i, s, l = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : l[s] = e[s];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? st.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      l[s] === void 0 && (l[s] = t.defaultProps[s]);
  return Ve(t, l, r, i, null);
}
function Ve(t, e, n, r, i) {
  var s = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++br };
  return i == null && A.vnode != null && A.vnode(s), s;
}
function V() {
  return { current: null };
}
function M(t) {
  return t.children;
}
function ns(t, e, n, r, i) {
  var s;
  for (s in n)
    s === "children" || s === "key" || s in e || Ye(t, s, null, n[s], r);
  for (s in e)
    i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === e[s] || Ye(t, s, e[s], n[s], r);
}
function mn(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || ts.test(e) ? n : n + "px";
}
function Ye(t, e, n, r, i) {
  var s;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || mn(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || mn(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? r || t.addEventListener(e, s ? bn : vn, s) : t.removeEventListener(e, s ? bn : vn, s);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function vn(t) {
  me = !0;
  try {
    return this.l[t.type + !1](A.event ? A.event(t) : t);
  } finally {
    me = !1;
  }
}
function bn(t) {
  me = !0;
  try {
    return this.l[t.type + !0](A.event ? A.event(t) : t);
  } finally {
    me = !1;
  }
}
function L(t, e) {
  this.props = t, this.context = e;
}
function we(t, e) {
  if (e == null)
    return t.__ ? we(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? we(t) : null;
}
function Dr(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Dr(t);
  }
}
function rs(t) {
  me ? setTimeout(t) : yr(t);
}
function Mt(t) {
  (!t.__d && (t.__d = !0) && te.push(t) && !qe.__r++ || pn !== A.debounceRendering) && ((pn = A.debounceRendering) || rs)(qe);
}
function qe() {
  var t, e, n, r, i, s, l, o;
  for (te.sort(function(a, d) {
    return a.__v.__b - d.__v.__b;
  }); t = te.shift(); )
    t.__d && (e = te.length, r = void 0, i = void 0, l = (s = (n = t).__v).__e, (o = n.__P) && (r = [], (i = G({}, s)).__v = s.__v + 1, Vt(o, s, i, n.__n, o.ownerSVGElement !== void 0, s.__h != null ? [l] : null, r, l ?? we(s), s.__h), Tr(r, s), s.__e != l && Dr(s)), te.length > e && te.sort(function(a, d) {
      return a.__v.__b - d.__v.__b;
    }));
  qe.__r = 0;
}
function Cr(t, e, n, r, i, s, l, o, a, d) {
  var c, h, f, u, m, b, v, y = r && r.__k || Ar, E = y.length;
  for (n.__k = [], c = 0; c < e.length; c++)
    if ((u = n.__k[c] = (u = e[c]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Ve(null, u, null, null, u) : Array.isArray(u) ? Ve(M, { children: u }, null, null, null) : u.__b > 0 ? Ve(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v) : u) != null) {
      if (u.__ = n, u.__b = n.__b + 1, (f = y[c]) === null || f && u.key == f.key && u.type === f.type)
        y[c] = void 0;
      else
        for (h = 0; h < E; h++) {
          if ((f = y[h]) && u.key == f.key && u.type === f.type) {
            y[h] = void 0;
            break;
          }
          f = null;
        }
      Vt(t, u, f = f || Qe, i, s, l, o, a, d), m = u.__e, (h = u.ref) && f.ref != h && (v || (v = []), f.ref && v.push(f.ref, null, u), v.push(h, u.__c || m, u)), m != null ? (b == null && (b = m), typeof u.type == "function" && u.__k === f.__k ? u.__d = a = _r(u, a, t) : a = wr(t, u, f, y, m, a), typeof n.type == "function" && (n.__d = a)) : a && f.__e == a && a.parentNode != t && (a = we(f));
    }
  for (n.__e = b, c = E; c--; )
    y[c] != null && (typeof n.type == "function" && y[c].__e != null && y[c].__e == n.__d && (n.__d = Rr(r).nextSibling), Mr(y[c], y[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      Ir(v[c], v[++c], v[++c]);
}
function _r(t, e, n) {
  for (var r, i = t.__k, s = 0; i && s < i.length; s++)
    (r = i[s]) && (r.__ = t, e = typeof r.type == "function" ? _r(r, e, n) : wr(n, r, r, i, r.__e, e));
  return e;
}
function Ze(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    Ze(n, e);
  }) : e.push(t)), e;
}
function wr(t, e, n, r, i, s) {
  var l, o, a;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != s || i.parentNode == null)
    e:
      if (s == null || s.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (o = s, a = 0; (o = o.nextSibling) && a < r.length; a += 1)
          if (o == i)
            break e;
        t.insertBefore(i, s), l = s;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Rr(t) {
  var e, n, r;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (r = Rr(n)))
        return r;
  }
  return null;
}
function Vt(t, e, n, r, i, s, l, o, a) {
  var d, c, h, f, u, m, b, v, y, E, S, D, k, O, x, C = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, o = e.__e = n.__e, e.__h = null, s = [o]), (d = A.__b) && d(e);
  try {
    e:
      if (typeof C == "function") {
        if (v = e.props, y = (d = C.contextType) && r[d.__c], E = d ? y ? y.props.value : d.__ : r, n.__c ? b = (c = e.__c = n.__c).__ = c.__E : ("prototype" in C && C.prototype.render ? e.__c = c = new C(v, E) : (e.__c = c = new L(v, E), c.constructor = C, c.render = ss), y && y.sub(c), c.props = v, c.state || (c.state = {}), c.context = E, c.__n = r, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), C.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = G({}, c.__s)), G(c.__s, C.getDerivedStateFromProps(v, c.__s))), f = c.props, u = c.state, c.__v = e, h)
          C.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (C.getDerivedStateFromProps == null && v !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, E), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, E) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(ue) {
              ue && (ue.__ = e);
            }), S = 0; S < c._sb.length; S++)
              c.__h.push(c._sb[S]);
            c._sb = [], c.__h.length && l.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, E), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, u, m);
          });
        }
        if (c.context = E, c.props = v, c.__P = t, D = A.__r, k = 0, "prototype" in C && C.prototype.render) {
          for (c.state = c.__s, c.__d = !1, D && D(e), d = c.render(c.props, c.state, c.context), O = 0; O < c._sb.length; O++)
            c.__h.push(c._sb[O]);
          c._sb = [];
        } else
          do
            c.__d = !1, D && D(e), d = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++k < 25);
        c.state = c.__s, c.getChildContext != null && (r = G(G({}, r), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(f, u)), x = d != null && d.type === M && d.key == null ? d.props.children : d, Cr(t, Array.isArray(x) ? x : [x], e, n, r, i, s, l, o, a), c.base = e.__e, e.__h = null, c.__h.length && l.push(c), b && (c.__E = c.__ = null), c.__e = !1;
      } else
        s == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = is(n.__e, e, n, r, i, s, l, a);
    (d = A.diffed) && d(e);
  } catch (ue) {
    e.__v = null, (a || s != null) && (e.__e = o, e.__h = !!a, s[s.indexOf(o)] = null), A.__e(ue, e, n);
  }
}
function Tr(t, e) {
  A.__c && A.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      A.__e(r, n.__v);
    }
  });
}
function is(t, e, n, r, i, s, l, o) {
  var a, d, c, h = n.props, f = e.props, u = e.type, m = 0;
  if (u === "svg" && (i = !0), s != null) {
    for (; m < s.length; m++)
      if ((a = s[m]) && "setAttribute" in a == !!u && (u ? a.localName === u : a.nodeType === 3)) {
        t = a, s[m] = null;
        break;
      }
  }
  if (t == null) {
    if (u === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, f.is && f), s = null, o = !1;
  }
  if (u === null)
    h === f || o && t.data === f || (t.data = f);
  else {
    if (s = s && st.call(t.childNodes), d = (h = n.props || Qe).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !o) {
      if (s != null)
        for (h = {}, m = 0; m < t.attributes.length; m++)
          h[t.attributes[m].name] = t.attributes[m].value;
      (c || d) && (c && (d && c.__html == d.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""));
    }
    if (ns(t, f, h, i, o), c)
      e.__k = [];
    else if (m = e.props.children, Cr(t, Array.isArray(m) ? m : [m], e, n, r, i && u !== "foreignObject", s, l, s ? s[0] : n.__k && we(n, 0), o), s != null)
      for (m = s.length; m--; )
        s[m] != null && Sr(s[m]);
    o || ("value" in f && (m = f.value) !== void 0 && (m !== t.value || u === "progress" && !m || u === "option" && m !== h.value) && Ye(t, "value", m, h.value, !1), "checked" in f && (m = f.checked) !== void 0 && m !== t.checked && Ye(t, "checked", m, h.checked, !1));
  }
  return t;
}
function Ir(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    A.__e(r, n);
  }
}
function Mr(t, e, n) {
  var r, i;
  if (A.unmount && A.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Ir(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        A.__e(s, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Mr(r[i], e, n || typeof t.type != "function");
  n || t.__e == null || Sr(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ss(t, e, n) {
  return this.constructor(t, n);
}
function Re(t, e, n) {
  var r, i, s;
  A.__ && A.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, s = [], Vt(e, t = (!r && n || e).__k = p(M, null, [t]), i || Qe, Qe, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? st.call(e.childNodes) : null, s, !r && n ? n : i ? i.__e : e.firstChild, r), Tr(s, t);
}
function ls(t, e) {
  var n = { __c: e = "__cC" + Er++, __: t, Consumer: function(r, i) {
    return r.children(i);
  }, Provider: function(r) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && i.some(function(o) {
        o.__e = !0, Mt(o);
      });
    }, this.sub = function(l) {
      i.push(l);
      var o = l.componentWillUnmount;
      l.componentWillUnmount = function() {
        i.splice(i.indexOf(l), 1), o && o.call(l);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
st = Ar.slice, A = { __e: function(t, e, n, r) {
  for (var i, s, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), l = i.__d), l)
          return i.__E = i;
      } catch (o) {
        t = o;
      }
  throw t;
} }, br = 0, me = !1, L.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = G({}, this.state), typeof t == "function" && (t = t(G({}, n), this.props)), t && G(n, t), t != null && this.__v && (e && this._sb.push(e), Mt(this));
}, L.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Mt(this));
}, L.prototype.render = M, te = [], yr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, qe.__r = 0, Er = 0;
var U, gt, yn, kr = [], pt = [], En = A.__b, An = A.__r, Sn = A.diffed, Dn = A.__c, Cn = A.unmount;
function os() {
  for (var t; t = kr.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(ze), t.__H.__h.forEach(kt), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], A.__e(e, t.__v);
      }
}
A.__b = function(t) {
  U = null, En && En(t);
}, A.__r = function(t) {
  An && An(t);
  var e = (U = t.__c).__H;
  e && (gt === U ? (e.__h = [], U.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = pt, n.__N = n.i = void 0;
  })) : (e.__h.forEach(ze), e.__h.forEach(kt), e.__h = [])), gt = U;
}, A.diffed = function(t) {
  Sn && Sn(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (kr.push(e) !== 1 && yn === A.requestAnimationFrame || ((yn = A.requestAnimationFrame) || as)(os)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== pt && (n.__ = n.__V), n.i = void 0, n.__V = pt;
  })), gt = U = null;
}, A.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(ze), n.__h = n.__h.filter(function(r) {
        return !r.__ || kt(r);
      });
    } catch (r) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], A.__e(r, n.__v);
    }
  }), Dn && Dn(t, e);
}, A.unmount = function(t) {
  Cn && Cn(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      ze(r);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && A.__e(e, n.__v));
};
var _n = typeof requestAnimationFrame == "function";
function as(t) {
  var e, n = function() {
    clearTimeout(r), _n && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  _n && (e = requestAnimationFrame(n));
}
function ze(t) {
  var e = U, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), U = e;
}
function kt(t) {
  var e = U;
  t.__c = t.__(), U = e;
}
function cs(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function wn(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function Rn(t) {
  this.props = t;
}
(Rn.prototype = new L()).isPureReactComponent = !0, Rn.prototype.shouldComponentUpdate = function(t, e) {
  return wn(this.props, t) || wn(this.state, e);
};
var Tn = A.__b;
A.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Tn && Tn(t);
};
var ds = A.__e;
A.__e = function(t, e, n, r) {
  if (t.then) {
    for (var i, s = e; s = s.__; )
      if ((i = s.__c) && i.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  ds(t, e, n, r);
};
var In = A.unmount;
function xr(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = cs({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return xr(r, e, n);
  })), t;
}
function Or(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Or(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function mt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Nr(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function Ne() {
  this.u = null, this.o = null;
}
A.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), In && In(t);
}, (mt.prototype = new L()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var i = Nr(r.__v), s = !1, l = function() {
    s || (s = !0, n.__R = null, i ? i(o) : o());
  };
  n.__R = l;
  var o = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var d = r.state.__a;
        r.__v.__k[0] = Or(d, d.__c.__P, d.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.t.pop(); )
        c.forceUpdate();
    }
  }, a = e.__h === !0;
  r.__u++ || a || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(l, l);
}, mt.prototype.componentWillUnmount = function() {
  this.t = [];
}, mt.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = xr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var i = e.__a && p(M, null, t.fallback);
  return i && (i.__h = null), [p(M, null, e.__a ? null : t.children), i];
};
var Mn = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function us(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function fs(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    Re(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, i) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), Re(p(us, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function hs(t, e) {
  var n = p(fs, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(Ne.prototype = new L()).__a = function(t) {
  var e = this, n = Nr(e.__v), r = e.o.get(t);
  return r[0]++, function(i) {
    var s = function() {
      e.props.revealOrder ? (r.push(i), Mn(e, t, r)) : i();
    };
    n ? n(s) : s();
  };
}, Ne.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Ze(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, Ne.prototype.componentDidUpdate = Ne.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    Mn(t, n, e);
  });
};
var gs = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ps = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ms = typeof document < "u", vs = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
L.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(L.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var kn = A.event;
function bs() {
}
function ys() {
  return this.cancelBubble;
}
function Es() {
  return this.defaultPrevented;
}
A.event = function(t) {
  return kn && (t = kn(t)), t.persist = bs, t.isPropagationStopped = ys, t.isDefaultPrevented = Es, t.nativeEvent = t;
};
var xn = { configurable: !0, get: function() {
  return this.class;
} }, On = A.vnode;
A.vnode = function(t) {
  var e = t.type, n = t.props, r = n;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var s in r = {}, n) {
      var l = n[s];
      ms && s === "children" && e === "noscript" || s === "value" && "defaultValue" in n && l == null || (s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && l === !0 ? l = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + e) && !vs(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && ps.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : l === null && (l = void 0), /^oninput$/i.test(s) && (s = s.toLowerCase(), r[s] && (s = "oninputCapture")), r[s] = l);
    }
    e == "select" && r.multiple && Array.isArray(r.value) && (r.value = Ze(n.children).forEach(function(o) {
      o.props.selected = r.value.indexOf(o.props.value) != -1;
    })), e == "select" && r.defaultValue != null && (r.value = Ze(n.children).forEach(function(o) {
      o.props.selected = r.multiple ? r.defaultValue.indexOf(o.props.value) != -1 : r.defaultValue == o.props.value;
    })), t.props = r, n.class != n.className && (xn.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", xn));
  }
  t.$$typeof = gs, On && On(t);
};
var Nn = A.__r;
A.__r = function(t) {
  Nn && Nn(t), t.__c;
};
const Hr = [], xt = /* @__PURE__ */ new Map();
function Pr(t) {
  Hr.push(t), xt.forEach((e) => {
    Lr(e, t);
  });
}
function As(t) {
  t.isConnected && Br(t.getRootNode());
}
function Br(t) {
  let e = xt.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const n = Ds();
      n && (e.nonce = n);
      const r = t === document ? document.head : t, i = t === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
      r.insertBefore(e, i);
    }
    xt.set(t, e), Ss(e);
  }
}
function Ss(t) {
  for (const e of Hr)
    Lr(t, e);
}
function Lr(t, e) {
  const { sheet: n } = t, r = n.cssRules.length;
  e.split("}").forEach((i, s) => {
    i = i.trim(), i && n.insertRule(i + "}", r + s);
  });
}
let vt;
function Ds() {
  return vt === void 0 && (vt = Cs()), vt;
}
function Cs() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && Br(document);
var _s = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
Pr(_s);
function zt(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function H(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (ws(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function ws(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function Rs(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, r = [];
  for (let i = 0; i < n.length; i += 1) {
    let s = n[i].querySelectorAll(e);
    for (let l = 0; l < s.length; l += 1)
      r.push(s[l]);
  }
  return r;
}
const Ts = /(top|left|right|bottom|width|height)$/i;
function Ae(t, e) {
  for (let n in e)
    jr(t, n, e[n]);
}
function jr(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && Ts.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function Ur(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let Hn = 0;
function lt() {
  return Hn += 1, "fc-dom-" + Hn;
}
function ot(t) {
  t.preventDefault();
}
function Is(t, e) {
  return (n) => {
    let r = H(n.target, t);
    r && e.call(r, n, r);
  };
}
function Fr(t, e, n, r) {
  let i = Is(n, r);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function Ms(t, e, n, r) {
  let i;
  return Fr(t, "mouseover", e, (s, l) => {
    if (l !== i) {
      i = l, n(s, l);
      let o = (a) => {
        i = null, r(a, l), l.removeEventListener("mouseleave", o);
      };
      l.addEventListener("mouseleave", o);
    }
  });
}
const Pn = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function ks(t, e) {
  let n = (r) => {
    e(r), Pn.forEach((i) => {
      t.removeEventListener(i, n);
    });
  };
  Pn.forEach((r) => {
    t.addEventListener(r, n);
  });
}
function Vr(t) {
  return Object.assign({ onClick: t }, zr(t));
}
function zr(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let Bn = 0;
function le() {
  return Bn += 1, String(Bn);
}
function Wt() {
  document.body.classList.add("fc-not-allowed");
}
function Gt() {
  document.body.classList.remove("fc-not-allowed");
}
function xs(t) {
  t.style.userSelect = "none", t.addEventListener("selectstart", ot);
}
function Os(t) {
  t.style.userSelect = "", t.removeEventListener("selectstart", ot);
}
function Ns(t) {
  t.addEventListener("contextmenu", ot);
}
function Hs(t) {
  t.removeEventListener("contextmenu", ot);
}
function Ps(t) {
  let e = [], n = [], r, i;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), r = 0; r < n.length; r += 1)
    i = n[r], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function Bs(t, e, n) {
  let r, i;
  for (r = 0; r < n.length; r += 1)
    if (i = Ls(t, e, n[r]), i)
      return i;
  return 0;
}
function Ls(t, e, n) {
  return n.func ? n.func(t, e) : js(t[n.field], e[n.field]) * (n.order || 1);
}
function js(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function bt(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function Se(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((r, i, s) => r.replace("$" + s, i || ""), t) : n;
}
function Us(t, e) {
  return t - e;
}
function yt(t) {
  return t % 1 === 0;
}
function Fs(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  n.getBoundingClientRect().width;
}
const Vs = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function _(t, e) {
  return typeof t == "string" ? zs(t) : typeof t == "object" && t ? Ln(t) : typeof t == "number" ? Ln({ [e || "milliseconds"]: t }) : null;
}
function zs(t) {
  let e = Vs.exec(t);
  if (e) {
    let n = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: n * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: n * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + // hours
      (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + // minutes
      (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + // seconds
      (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function Ln(t) {
  let e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + // hours
    (t.minutes || t.minute || 0) * 60 * 1e3 + // minutes
    (t.seconds || t.second || 0) * 1e3 + // seconds
    (t.milliseconds || t.millisecond || t.ms || 0)
    // ms
  }, n = t.weeks || t.week;
  return n && (e.days += n * 7, e.specifiedWeeks = !0), e;
}
function Ws(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function Gs(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function Qs(t) {
  return ge(t) / 365;
}
function Ys(t) {
  return ge(t) / 30;
}
function ge(t) {
  return Te(t) / 864e5;
}
function Te(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Ot(t) {
  let e = t.milliseconds;
  if (e) {
    if (e % 1e3 !== 0)
      return { unit: "millisecond", value: e };
    if (e % (1e3 * 60) !== 0)
      return { unit: "second", value: e / 1e3 };
    if (e % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: e / (1e3 * 60) };
    if (e)
      return { unit: "hour", value: e / (1e3 * 60 * 60) };
  }
  return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? { unit: "week", value: t.days / 7 } : { unit: "day", value: t.days } : t.months ? { unit: "month", value: t.months } : t.years ? { unit: "year", value: t.years } : { unit: "millisecond", value: 0 };
}
const { hasOwnProperty: $e } = Object.prototype;
function Qt(t, e) {
  let n = {};
  if (e) {
    for (let r in e)
      if (e[r] === ee) {
        let i = [];
        for (let s = t.length - 1; s >= 0; s -= 1) {
          let l = t[s][r];
          if (typeof l == "object" && l)
            i.unshift(l);
          else if (l !== void 0) {
            n[r] = l;
            break;
          }
        }
        i.length && (n[r] = Qt(i));
      }
  }
  for (let r = t.length - 1; r >= 0; r -= 1) {
    let i = t[r];
    for (let s in i)
      s in n || (n[s] = i[s]);
  }
  return n;
}
function ie(t, e) {
  let n = {};
  for (let r in t)
    e(t[r], r) && (n[r] = t[r]);
  return n;
}
function oe(t, e) {
  let n = {};
  for (let r in t)
    n[r] = e(t[r], r);
  return n;
}
function Wr(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function Yt(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function F(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if ($e.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if ($e.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
const qs = /^on[A-Z]/;
function Zs(t, e) {
  const n = Nt(t, e);
  for (let r of n)
    if (!qs.test(r))
      return !1;
  return !0;
}
function Nt(t, e) {
  let n = [];
  for (let r in t)
    $e.call(t, r) && (r in e || n.push(r));
  for (let r in e)
    $e.call(e, r) && t[r] !== e[r] && n.push(r);
  return n;
}
function Et(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let r in e)
    if (!(r in t && $s(t[r], e[r], n[r])))
      return !1;
  for (let r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function $s(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function Xs(t, e = 0, n, r = 1) {
  let i = [];
  n == null && (n = Object.keys(t).length);
  for (let s = e; s < n; s += r) {
    let l = t[s];
    l !== void 0 && i.push(l);
  }
  return i;
}
function Z(t, e, n) {
  if (t === e)
    return !0;
  let r = t.length, i;
  if (r !== e.length)
    return !1;
  for (i = 0; i < r; i += 1)
    if (!(n ? n(t[i], e[i]) : t[i] === e[i]))
      return !1;
  return !0;
}
const Js = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function jn(t, e) {
  let n = Q(t);
  return n[2] += e * 7, B(n);
}
function P(t, e) {
  let n = Q(t);
  return n[2] += e, B(n);
}
function $(t, e) {
  let n = Q(t);
  return n[6] += e, B(n);
}
function Ks(t, e) {
  return ye(t, e) / 7;
}
function ye(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function el(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function tl(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function nl(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function rl(t, e) {
  let n = R(t), r = R(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(ye(n, r)),
    milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function il(t, e) {
  let n = Xe(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function Xe(t, e) {
  return Y(t) === Y(e) ? Math.round(ye(t, e)) : null;
}
function R(t) {
  return B([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function sl(t) {
  return B([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function ll(t) {
  return B([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function ol(t) {
  return B([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function al(t, e, n) {
  let r = t.getUTCFullYear(), i = At(t, r, e, n);
  if (i < 1)
    return At(t, r - 1, e, n);
  let s = At(t, r + 1, e, n);
  return s >= 1 ? Math.min(i, s) : i;
}
function At(t, e, n, r) {
  let i = B([e, 0, 1 + cl(e, n, r)]), s = R(t), l = Math.round(ye(i, s));
  return Math.floor(l / 7) + 1;
}
function cl(t, e, n) {
  let r = 7 + e - n;
  return -((7 + B([t, 0, r]).getUTCDay() - e) % 7) + r - 1;
}
function Un(t) {
  return [
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ];
}
function Fn(t) {
  return new Date(
    t[0],
    t[1] || 0,
    t[2] == null ? 1 : t[2],
    // day of month
    t[3] || 0,
    t[4] || 0,
    t[5] || 0
  );
}
function Q(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function B(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function Gr(t) {
  return !isNaN(t.valueOf());
}
function Y(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function dl(t, e, n = !1) {
  let r = t.toISOString();
  return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (e == null ? r = r.replace("Z", "") : e !== 0 && (r = r.replace("Z", Zt(e, !0)))), r;
}
function qt(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function ul(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function Zt(t, e = !1) {
  let n = t < 0 ? "-" : "+", r = Math.abs(t), i = Math.floor(r / 60), s = Math.round(r % 60);
  return e ? `${n + bt(i, 2)}:${bt(s, 2)}` : `GMT${n}${i}${s ? `:${bt(s, 2)}` : ""}`;
}
function w(t, e, n) {
  let r, i;
  return function(...s) {
    if (!r)
      i = t.apply(this, s);
    else if (!Z(r, s)) {
      n && n(i);
      let l = t.apply(this, s);
      (!e || !e(l, i)) && (i = l);
    }
    return r = s, i;
  };
}
function We(t, e, n) {
  let r, i;
  return (s) => {
    if (!r)
      i = t.call(this, s);
    else if (!F(r, s)) {
      n && n(i);
      let l = t.call(this, s);
      (!e || !e(l, i)) && (i = l);
    }
    return r = s, i;
  };
}
const Vn = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, Je = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, He = /\s*([ap])\.?m\.?/i, fl = /,/g, hl = /\s+/g, gl = /\u200e/g, pl = /UTC|GMT/;
class ml {
  constructor(e) {
    let n = {}, r = {}, i = 0;
    for (let s in e)
      s in Vn ? (r[s] = e[s], i = Math.max(Vn[s], i)) : (n[s] = e[s], s in Je && (i = Math.max(Je[s], i)));
    this.standardDateProps = n, this.extendedSettings = r, this.severity = i, this.buildFormattingFunc = w(zn);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, r, i) {
    let { standardDateProps: s, extendedSettings: l } = this, o = Sl(e.marker, n.marker, r.calendarSystem);
    if (!o)
      return this.format(e, r);
    let a = o;
    a > 1 && // the two dates are different in a way that's larger scale than time
    (s.year === "numeric" || s.year === "2-digit") && (s.month === "numeric" || s.month === "2-digit") && (s.day === "numeric" || s.day === "2-digit") && (a = 1);
    let d = this.format(e, r), c = this.format(n, r);
    if (d === c)
      return d;
    let h = Dl(s, a), f = zn(h, l, r), u = f(e), m = f(n), b = Cl(d, u, c, m), v = l.separator || i || r.defaultSeparator || "";
    return b ? b.before + u + v + m + b.after : d + v + c;
  }
  getLargestUnit() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }
}
function zn(t, e, n) {
  let r = Object.keys(t).length;
  return r === 1 && t.timeZoneName === "short" ? (i) => Zt(i.timeZoneOffset) : r === 0 && e.week ? (i) => Al(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : vl(t, e, n);
}
function vl(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), bl(t, e), t.timeZone = "UTC";
  let r = new Intl.DateTimeFormat(n.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let s = Object.assign({}, t);
    delete s.minute, i = new Intl.DateTimeFormat(n.locale.codes, s);
  }
  return (s) => {
    let { marker: l } = s, o;
    i && !l.getUTCMinutes() ? o = i : o = r;
    let a = o.format(l);
    return yl(a, s, t, e, n);
  };
}
function bl(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function yl(t, e, n, r, i) {
  return t = t.replace(gl, ""), n.timeZoneName === "short" && (t = El(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    Zt(e.timeZoneOffset)
  ))), r.omitCommas && (t = t.replace(fl, "").trim()), r.omitZeroMinute && (t = t.replace(":00", "")), r.meridiem === !1 ? t = t.replace(He, "").trim() : r.meridiem === "narrow" ? t = t.replace(He, (s, l) => l.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace(He, (s, l) => `${l.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace(He, (s) => s.toLocaleLowerCase())), t = t.replace(hl, " "), t = t.trim(), t;
}
function El(t, e) {
  let n = !1;
  return t = t.replace(pl, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function Al(t, e, n, r, i) {
  let s = [];
  return i === "long" ? s.push(n) : (i === "short" || i === "narrow") && s.push(e), (i === "long" || i === "short") && s.push(" "), s.push(r.simpleNumberFormat.format(t)), r.options.direction === "rtl" && s.reverse(), s.join("");
}
function Sl(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : Y(t) !== Y(e) ? 1 : 0;
}
function Dl(t, e) {
  let n = {};
  for (let r in t)
    (!(r in Je) || // not a date part prop (like timeZone)
    Je[r] <= e) && (n[r] = t[r]);
  return n;
}
function Cl(t, e, n, r) {
  let i = 0;
  for (; i < t.length; ) {
    let s = t.indexOf(e, i);
    if (s === -1)
      break;
    let l = t.substr(0, s);
    i = s + e.length;
    let o = t.substr(i), a = 0;
    for (; a < n.length; ) {
      let d = n.indexOf(r, a);
      if (d === -1)
        break;
      let c = n.substr(0, d);
      a = d + r.length;
      let h = n.substr(a);
      if (l === c && o === h)
        return {
          before: l,
          after: o
        };
    }
  }
  return null;
}
function Wn(t, e) {
  let n = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: n,
    year: n[0],
    month: n[1],
    day: n[2],
    hour: n[3],
    minute: n[4],
    second: n[5],
    millisecond: n[6]
  };
}
function Ke(t, e, n, r) {
  let i = Wn(t, n.calendarSystem), s = e ? Wn(e, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: s,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: r || n.defaultSeparator
  };
}
class _l {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, r) {
    return n.cmdFormatter(this.cmdStr, Ke(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return r.cmdFormatter(this.cmdStr, Ke(e, n, r, i));
  }
}
class wl {
  constructor(e) {
    this.func = e;
  }
  format(e, n, r) {
    return this.func(Ke(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return this.func(Ke(e, n, r, i));
  }
}
function N(t) {
  return typeof t == "object" && t ? new ml(t) : typeof t == "string" ? new _l(t) : typeof t == "function" ? new wl(t) : null;
}
const Gn = {
  navLinkDayClick: g,
  navLinkWeekClick: g,
  duration: _,
  bootstrapFontAwesome: g,
  buttonIcons: g,
  customButtons: g,
  defaultAllDayEventDuration: _,
  defaultTimedEventDuration: _,
  nextDayThreshold: _,
  scrollTime: _,
  scrollTimeReset: Boolean,
  slotMinTime: _,
  slotMaxTime: _,
  dayPopoverFormat: N,
  slotDuration: _,
  snapDuration: _,
  headerToolbar: g,
  footerToolbar: g,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: N,
  dayHeaderClassNames: g,
  dayHeaderContent: g,
  dayHeaderDidMount: g,
  dayHeaderWillUnmount: g,
  dayCellClassNames: g,
  dayCellContent: g,
  dayCellDidMount: g,
  dayCellWillUnmount: g,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: g,
  weekNumbers: Boolean,
  weekNumberClassNames: g,
  weekNumberContent: g,
  weekNumberDidMount: g,
  weekNumberWillUnmount: g,
  editable: Boolean,
  viewClassNames: g,
  viewDidMount: g,
  viewWillUnmount: g,
  nowIndicator: Boolean,
  nowIndicatorClassNames: g,
  nowIndicatorContent: g,
  nowIndicatorDidMount: g,
  nowIndicatorWillUnmount: g,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: g,
  locale: g,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: g,
  eventOrder: Ps,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: g,
  contentHeight: g,
  direction: String,
  weekNumberFormat: N,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: g,
  initialDate: g,
  now: g,
  eventDataTransform: g,
  stickyHeaderDates: g,
  stickyFooterScrollbar: g,
  viewHeight: g,
  defaultAllDay: Boolean,
  eventSourceFailure: g,
  eventSourceSuccess: g,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: g,
  eventConstraint: g,
  eventAllow: g,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: g,
  eventContent: g,
  eventDidMount: g,
  eventWillUnmount: g,
  selectConstraint: g,
  selectOverlap: g,
  selectAllow: g,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: g,
  slotLaneClassNames: g,
  slotLaneContent: g,
  slotLaneDidMount: g,
  slotLaneWillUnmount: g,
  slotLabelClassNames: g,
  slotLabelContent: g,
  slotLabelDidMount: g,
  slotLabelWillUnmount: g,
  dayMaxEvents: g,
  dayMaxEventRows: g,
  dayMinWidth: Number,
  slotLabelInterval: _,
  allDayText: String,
  allDayClassNames: g,
  allDayContent: g,
  allDayDidMount: g,
  allDayWillUnmount: g,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: N,
  rerenderDelay: Number,
  moreLinkText: g,
  moreLinkHint: g,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: g,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: _,
  hiddenDays: g,
  fixedWeekCount: Boolean,
  validRange: g,
  visibleRange: g,
  titleFormat: g,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: g,
  navLinkHint: g,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: g,
  moreLinkClassNames: g,
  moreLinkContent: g,
  moreLinkDidMount: g,
  moreLinkWillUnmount: g,
  monthStartFormat: N,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: g,
  customRenderingMetaMap: g,
  customRenderingReplacesEl: Boolean
}, De = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " – ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30,
  monthStartFormat: { month: "long", day: "numeric" }
}, Qn = {
  datesSet: g,
  eventsSet: g,
  eventAdd: g,
  eventChange: g,
  eventRemove: g,
  windowResize: g,
  eventClick: g,
  eventMouseEnter: g,
  eventMouseLeave: g,
  select: g,
  unselect: g,
  loading: g,
  // internal
  _unmount: g,
  _beforeprint: g,
  _afterprint: g,
  _noEventDrop: g,
  _noEventResize: g,
  _resize: g,
  _scrollRequest: g
}, Yn = {
  buttonText: g,
  buttonHints: g,
  views: g,
  plugins: g,
  initialEvents: g,
  events: g,
  eventSources: g
}, K = {
  headerToolbar: ee,
  footerToolbar: ee,
  buttonText: ee,
  buttonHints: ee,
  buttonIcons: ee,
  dateIncrement: ee,
  plugins: Pe,
  events: Pe,
  eventSources: Pe,
  resources: Pe
};
function ee(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? F(t, e) : t === e;
}
function Pe(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? Z(t, e) : t === e;
}
const Rl = {
  type: String,
  component: g,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: g,
  usesMinMaxTime: Boolean,
  classNames: g,
  content: g,
  didMount: g,
  willUnmount: g
};
function St(t) {
  return Qt(t, K);
}
function $t(t, e) {
  let n = {}, r = {};
  for (let i in e)
    i in t && (n[i] = e[i](t[i]));
  for (let i in t)
    i in e || (r[i] = t[i]);
  return { refined: n, extra: r };
}
function g(t) {
  return t;
}
function Xt(t, e, n, r) {
  return {
    instanceId: le(),
    defId: t,
    range: e,
    forcedStartTzo: n ?? null,
    forcedEndTzo: r ?? null
  };
}
function Tl(t, e, n, r) {
  for (let i = 0; i < r.length; i += 1) {
    let s = r[i].parse(t, n);
    if (s) {
      let { allDay: l } = t;
      return l == null && (l = e, l == null && (l = s.allDayGuess, l == null && (l = !1))), {
        allDay: l,
        duration: s.duration,
        typeData: s.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function se(t, e, n) {
  let { dateEnv: r, pluginHooks: i, options: s } = n, { defs: l, instances: o } = t;
  o = ie(o, (a) => !l[a.defId].recurringDef);
  for (let a in l) {
    let d = l[a];
    if (d.recurringDef) {
      let { duration: c } = d.recurringDef;
      c || (c = d.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);
      let h = Il(d, c, e, r, i.recurringTypes);
      for (let f of h) {
        let u = Xt(a, {
          start: f,
          end: r.add(f, c)
        });
        o[u.instanceId] = u;
      }
    }
  }
  return { defs: l, instances: o };
}
function Il(t, e, n, r, i) {
  let l = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: r.subtract(n.start, e),
    end: n.end
  }, r);
  return t.allDay && (l = l.map(R)), l;
}
function Ie(t, e, n, r, i, s) {
  let l = j(), o = en(n);
  for (let a of t) {
    let d = Yr(a, e, n, r, o, i, s);
    d && Ht(d, l);
  }
  return l;
}
function Ht(t, e = j()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function Jt(t, e) {
  let n = t.instances[e];
  if (n) {
    let r = t.defs[n.defId], i = at(t, (s) => Ml(r, s));
    return i.defs[r.defId] = r, i.instances[n.instanceId] = n, i;
  }
  return j();
}
function Ml(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function j() {
  return { defs: {}, instances: {} };
}
function Kt(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function at(t, e) {
  let n = ie(t.defs, e), r = ie(t.instances, (i) => n[i.defId]);
  return { defs: n, instances: r };
}
function kl(t, e) {
  let { defs: n, instances: r } = t, i = {}, s = {};
  for (let l in n)
    e.defs[l] || (i[l] = n[l]);
  for (let l in r)
    !e.instances[l] && // not explicitly excluded
    i[r[l].defId] && (s[l] = r[l]);
  return {
    defs: i,
    instances: s
  };
}
function xl(t, e) {
  return Array.isArray(t) ? Ie(t, null, e, !0) : typeof t == "object" && t ? Ie([t], null, e, !0) : t != null ? String(t) : null;
}
function qn(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const et = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: g,
  overlap: g,
  allow: g,
  className: qn,
  classNames: qn,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Ol = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function tt(t, e) {
  let n = xl(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: n != null ? [n] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
    // join singular and plural
  };
}
function Nl(t) {
  return t.reduce(Hl, Ol);
}
function Hl(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
const Ge = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, Qr = {
  start: g,
  end: g,
  date: g,
  allDay: Boolean
}, Pl = Object.assign(Object.assign(Object.assign({}, Ge), Qr), { extendedProps: g });
function Yr(t, e, n, r, i = en(n), s, l) {
  let { refined: o, extra: a } = qr(t, n, i), d = Ll(e, n), c = Tl(o, d, n.dateEnv, n.pluginHooks.recurringTypes);
  if (c) {
    let f = Pt(o, a, e ? e.sourceId : "", c.allDay, !!c.duration, n, s);
    return f.recurringDef = {
      typeId: c.typeId,
      typeData: c.typeData,
      duration: c.duration
    }, { def: f, instance: null };
  }
  let h = Bl(o, d, n, r);
  if (h) {
    let f = Pt(o, a, e ? e.sourceId : "", h.allDay, h.hasEnd, n, s), u = Xt(f.defId, h.range, h.forcedStartTzo, h.forcedEndTzo);
    return l && f.publicId && l[f.publicId] && (u.instanceId = l[f.publicId]), { def: f, instance: u };
  }
  return null;
}
function qr(t, e, n = en(e)) {
  return $t(t, n);
}
function en(t) {
  return Object.assign(Object.assign(Object.assign({}, et), Pl), t.pluginHooks.eventRefiners);
}
function Pt(t, e, n, r, i, s, l) {
  let o = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (l && t.id ? l[t.id] : "") || le(),
    sourceId: n,
    allDay: r,
    hasEnd: i,
    interactive: t.interactive,
    ui: tt(t, s),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let a of s.pluginHooks.eventDefMemberAdders)
    Object.assign(o, a(t));
  return Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), o;
}
function Bl(t, e, n, r) {
  let { allDay: i } = t, s, l = null, o = !1, a, d = null, c = t.start != null ? t.start : t.date;
  if (s = n.dateEnv.createMarkerMeta(c), s)
    l = s.marker;
  else if (!r)
    return null;
  return t.end != null && (a = n.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!s || s.isTimeUnspecified) && (!a || a.isTimeUnspecified)), i && l && (l = R(l)), a && (d = a.marker, i && (d = R(d)), l && d <= l && (d = null)), d ? o = !0 : r || (o = n.options.forceEventDuration || !1, d = n.dateEnv.add(l, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: o,
    range: { start: l, end: d },
    forcedStartTzo: s ? s.forcedTzo : null,
    forcedEndTzo: a ? a.forcedTzo : null
  };
}
function Ll(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
const jl = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function Ul(t, e) {
  return Ie(Fl(t), null, e);
}
function Fl(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, jl), n)), e;
}
function Zr(t) {
  let e = Math.floor(ye(t.start, t.end)) || 1, n = R(t.start), r = P(n, e);
  return { start: n, end: r };
}
function $r(t, e = _(0)) {
  let n = null, r = null;
  if (t.end) {
    r = R(t.end);
    let i = t.end.valueOf() - r.valueOf();
    i && i >= Te(e) && (r = P(r, 1));
  }
  return t.start && (n = R(t.start), r && r <= n && (r = P(n, 1))), { start: n, end: r };
}
function he(t, e, n, r) {
  return r === "year" ? _(n.diffWholeYears(t, e), "year") : r === "month" ? _(n.diffWholeMonths(t, e), "month") : rl(t, e);
}
function Vl(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function Xr(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function zl(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function Wl(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function Gl(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
let Dt;
function Jr() {
  return Dt == null && (Dt = Ql()), Dt;
}
function Ql() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
function Yl(t, e) {
  let n = null, r = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (r = e.createMarker(t.end)), !n && !r || n && r && r < n ? null : { start: n, end: r };
}
function Zn(t, e) {
  let n = [], { start: r } = e, i, s;
  for (t.sort(ql), i = 0; i < t.length; i += 1)
    s = t[i], s.start > r && n.push({ start: r, end: s.start }), s.end > r && (r = s.end);
  return r < e.end && n.push({ start: r, end: e.end }), n;
}
function ql(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function ve(t, e) {
  let { start: n, end: r } = t, i = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))), (n === null || r === null || n < r) && (i = { start: n, end: r }), i;
}
function Zl(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function tn(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function ct(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function q(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function $l(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function Kr(t, e, n, r) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(r && !q(r.activeRange, t)),
    isOther: !!(r && !q(r.currentRange, t)),
    isToday: !!(e && q(e, t)),
    isPast: !!(n ? t < n : e && t < e.start),
    isFuture: !!(n ? t > n : e && t >= e.end)
  };
}
function nn(t, e) {
  let n = [
    "fc-day",
    `fc-day-${Js[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const Xl = N({ year: "numeric", month: "long", day: "numeric" }), Jl = N({ week: "long" });
function Bt(t, e, n = "day", r = !0) {
  const { dateEnv: i, options: s, calendarApi: l } = t;
  let o = i.format(e, n === "week" ? Jl : Xl);
  if (s.navLinks) {
    let a = i.toDate(e);
    const d = (c) => {
      let h = n === "day" ? s.navLinkDayClick : n === "week" ? s.navLinkWeekClick : null;
      typeof h == "function" ? h.call(l, i.toDate(e), c) : (typeof h == "string" && (n = h), l.zoomTo(e, n));
    };
    return Object.assign({ title: Se(s.navLinkHint, [o, a], o), "data-navlink": "" }, r ? Vr(d) : { onClick: d });
  }
  return { "aria-label": o };
}
let Ct = null;
function Kl() {
  return Ct === null && (Ct = eo()), Ct;
}
function eo() {
  let t = document.createElement("div");
  Ae(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return zt(t), n;
}
let _t;
function to() {
  return _t || (_t = no()), _t;
}
function no() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = ei(t);
  return document.body.removeChild(t), e;
}
function ei(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function ro(t, e = !1) {
  let n = window.getComputedStyle(t), r = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, s = parseInt(n.borderTopWidth, 10) || 0, l = parseInt(n.borderBottomWidth, 10) || 0, o = ei(t), a = o.y - r - i, d = o.x - s - l, c = {
    borderLeft: r,
    borderRight: i,
    borderTop: s,
    borderBottom: l,
    scrollbarBottom: d,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return Kl() && n.direction === "rtl" ? c.scrollbarLeft = a : c.scrollbarRight = a, e && (c.paddingLeft = parseInt(n.paddingLeft, 10) || 0, c.paddingRight = parseInt(n.paddingRight, 10) || 0, c.paddingTop = parseInt(n.paddingTop, 10) || 0, c.paddingBottom = parseInt(n.paddingBottom, 10) || 0), c;
}
function io(t, e = !1, n) {
  let r = n ? t.getBoundingClientRect() : rn(t), i = ro(t, e), s = {
    left: r.left + i.borderLeft + i.scrollbarLeft,
    right: r.right - i.borderRight - i.scrollbarRight,
    top: r.top + i.borderTop,
    bottom: r.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (s.left += i.paddingLeft, s.right -= i.paddingRight, s.top += i.paddingTop, s.bottom -= i.paddingBottom), s;
}
function rn(t) {
  let e = t.getBoundingClientRect();
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  };
}
function so(t) {
  let e = ti(t), n = t.getBoundingClientRect();
  for (let r of e) {
    let i = Xr(n, r.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function ti(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
function lo(t, e, n) {
  let r = !1, i = function(o) {
    r || (r = !0, e(o));
  }, s = function(o) {
    r || (r = !0, n(o));
  }, l = t(i, s);
  l && typeof l.then == "function" && l.then(i, s);
}
class dt {
  constructor() {
    this.handlers = {}, this.thisContext = null;
  }
  setThisContext(e) {
    this.thisContext = e;
  }
  setOptions(e) {
    this.options = e;
  }
  on(e, n) {
    oo(this.handlers, e, n);
  }
  off(e, n) {
    ao(this.handlers, e, n);
  }
  trigger(e, ...n) {
    let r = this.handlers[e] || [], i = this.options && this.options[e], s = [].concat(i || [], r);
    for (let l of s)
      l.apply(this.thisContext, n);
  }
  hasHandlers(e) {
    return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }
}
function oo(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function ao(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((r) => r !== n)) : delete t[e];
}
class nt {
  constructor(e, n, r, i) {
    this.els = n;
    let s = this.originClientRect = e.getBoundingClientRect();
    r && this.buildElHorizontals(s.left), i && this.buildElVerticals(s.top);
  }
  // Populates the left/right internal coordinate arrays
  buildElHorizontals(e) {
    let n = [], r = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      n.push(s.left - e), r.push(s.right - e);
    }
    this.lefts = n, this.rights = r;
  }
  // Populates the top/bottom internal coordinate arrays
  buildElVerticals(e) {
    let n = [], r = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      n.push(s.top - e), r.push(s.bottom - e);
    }
    this.tops = n, this.bottoms = r;
  }
  // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.
  leftToIndex(e) {
    let { lefts: n, rights: r } = this, i = n.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= n[s] && e < r[s])
        return s;
  }
  // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.
  topToIndex(e) {
    let { tops: n, bottoms: r } = this, i = n.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= n[s] && e < r[s])
        return s;
  }
  // Gets the width of the element at the given index
  getWidth(e) {
    return this.rights[e] - this.lefts[e];
  }
  // Gets the height of the element at the given index
  getHeight(e) {
    return this.bottoms[e] - this.tops[e];
  }
  similarTo(e) {
    return Be(this.tops || [], e.tops || []) && Be(this.bottoms || [], e.bottoms || []) && Be(this.lefts || [], e.lefts || []) && Be(this.rights || [], e.rights || []);
  }
}
function Be(t, e) {
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (Math.round(t[r]) !== Math.round(e[r]))
      return !1;
  return !0;
}
class sn {
  getMaxScrollTop() {
    return this.getScrollHeight() - this.getClientHeight();
  }
  getMaxScrollLeft() {
    return this.getScrollWidth() - this.getClientWidth();
  }
  canScrollVertically() {
    return this.getMaxScrollTop() > 0;
  }
  canScrollHorizontally() {
    return this.getMaxScrollLeft() > 0;
  }
  canScrollUp() {
    return this.getScrollTop() > 0;
  }
  canScrollDown() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }
  canScrollLeft() {
    return this.getScrollLeft() > 0;
  }
  canScrollRight() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }
}
class co extends sn {
  constructor(e) {
    super(), this.el = e;
  }
  getScrollTop() {
    return this.el.scrollTop;
  }
  getScrollLeft() {
    return this.el.scrollLeft;
  }
  setScrollTop(e) {
    this.el.scrollTop = e;
  }
  setScrollLeft(e) {
    this.el.scrollLeft = e;
  }
  getScrollWidth() {
    return this.el.scrollWidth;
  }
  getScrollHeight() {
    return this.el.scrollHeight;
  }
  getClientHeight() {
    return this.el.clientHeight;
  }
  getClientWidth() {
    return this.el.clientWidth;
  }
}
class uo extends sn {
  getScrollTop() {
    return window.pageYOffset;
  }
  getScrollLeft() {
    return window.pageXOffset;
  }
  setScrollTop(e) {
    window.scroll(window.pageXOffset, e);
  }
  setScrollLeft(e) {
    window.scroll(e, window.pageYOffset);
  }
  getScrollWidth() {
    return document.documentElement.scrollWidth;
  }
  getScrollHeight() {
    return document.documentElement.scrollHeight;
  }
  getClientHeight() {
    return document.documentElement.clientHeight;
  }
  getClientWidth() {
    return document.documentElement.clientWidth;
  }
}
class Me {
  constructor(e) {
    this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
  }
  setIconOverride(e) {
    let n, r;
    if (typeof e == "object" && e) {
      n = Object.assign({}, this.iconClasses);
      for (r in e)
        n[r] = this.applyIconOverridePrefix(e[r]);
      this.iconClasses = n;
    } else
      e === !1 && (this.iconClasses = {});
  }
  applyIconOverridePrefix(e) {
    let n = this.iconOverridePrefix;
    return n && e.indexOf(n) !== 0 && (e = n + e), e;
  }
  getClass(e) {
    return this.classes[e] || "";
  }
  getIconClass(e, n) {
    let r;
    return n && this.rtlIconClasses ? r = this.rtlIconClasses[e] || this.iconClasses[e] : r = this.iconClasses[e], r ? `${this.baseIconClass} ${r}` : "";
  }
  getCustomButtonIconClass(e) {
    let n;
    return this.iconOverrideCustomButtonOption && (n = e[this.iconOverrideCustomButtonOption], n) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(n)}` : "";
  }
}
Me.prototype.classes = {};
Me.prototype.iconClasses = {};
Me.prototype.baseIconClass = "";
Me.prototype.iconOverridePrefix = "";
function $n(t) {
  t();
  let e = A.debounceRendering, n = [];
  function r(i) {
    n.push(i);
  }
  for (A.debounceRendering = r, Re(p(fo, {}), document.createElement("div")); n.length; )
    n.shift()();
  A.debounceRendering = e;
}
class fo extends L {
  render() {
    return p("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function ni(t) {
  let e = ls(t), n = e.Provider;
  return e.Provider = function() {
    let r = !this.getChildContext, i = n.apply(this, arguments);
    if (r) {
      let s = [];
      this.shouldComponentUpdate = (l) => {
        this.props.value !== l.value && s.forEach((o) => {
          o.context = l.value, o.forceUpdate();
        });
      }, this.sub = (l) => {
        s.push(l);
        let o = l.componentWillUnmount;
        l.componentWillUnmount = () => {
          s.splice(s.indexOf(l), 1), o && o.call(l);
        };
      };
    }
    return i;
  }, e;
}
class ho {
  constructor(e, n, r, i) {
    this.execFunc = e, this.emitter = n, this.scrollTime = r, this.scrollTimeReset = i, this.handleScrollRequest = (s) => {
      this.queuedRequest = Object.assign({}, this.queuedRequest || {}, s), this.drain();
    }, n.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  detach() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }
  update(e) {
    e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }
  fireInitialScroll() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }
  drain() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }
}
const ae = ni({});
function go(t, e, n, r, i, s, l, o, a, d, c, h, f) {
  return {
    dateEnv: i,
    options: n,
    pluginHooks: l,
    emitter: d,
    dispatch: o,
    getCurrentData: a,
    calendarApi: c,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: r,
    theme: s,
    isRtl: n.direction === "rtl",
    addResizeHandler(u) {
      d.on("_resize", u);
    },
    removeResizeHandler(u) {
      d.off("_resize", u);
    },
    createScrollResponder(u) {
      return new ho(u, d, _(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: h,
    unregisterInteractiveComponent: f
  };
}
class ce extends L {
  shouldComponentUpdate(e, n) {
    return this.debug && console.log(Nt(e, this.props), Nt(n, this.state)), !Et(this.props, e, this.propEquality) || !Et(this.state, n, this.stateEquality);
  }
  // HACK for freakin' React StrictMode
  safeSetState(e) {
    Et(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
ce.addPropsEquality = po;
ce.addStateEquality = mo;
ce.contextType = ae;
ce.prototype.propEquality = {};
ce.prototype.stateEquality = {};
class I extends ce {
}
I.contextType = ae;
function po(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function mo(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function z(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class de extends I {
  constructor() {
    super(...arguments), this.uid = le();
  }
  // Hit System
  // -----------------------------------------------------------------------------------------------------------------
  prepareHits() {
  }
  queryHit(e, n, r, i) {
    return null;
  }
  // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------
  isValidSegDownEl(e) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !H(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !H(e, ".fc-event:not(.fc-bg-event)") && !H(e, ".fc-more-link") && // a "more.." link
    !H(e, "a[data-navlink]") && // a clickable nav link
    !H(e, ".fc-popover");
  }
}
function vo(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function bo(t, e) {
  let n = t.initialDate;
  return n != null ? e.createMarker(n) : ke(t.now, e);
}
function ke(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
class ri {
  constructor(e) {
    this.props = e, this.nowDate = ke(e.nowInput, e.dateEnv), this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.
  buildPrev(e, n, r) {
    let { dateEnv: i } = this.props, s = i.subtract(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(s, -1, r);
  }
  // Builds a structure with info about what the dates/ranges will be for the "next" view.
  buildNext(e, n, r) {
    let { dateEnv: i } = this.props, s = i.add(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(s, 1, r);
  }
  // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).
  build(e, n, r = !0) {
    let { props: i } = this, s, l, o, a, d, c;
    return s = this.buildValidRange(), s = this.trimHiddenDays(s), r && (e = $l(e, s)), l = this.buildCurrentRangeInfo(e, n), o = /^(year|month|week|day)$/.test(l.unit), a = this.buildRenderRange(this.trimHiddenDays(l.range), l.unit, o), a = this.trimHiddenDays(a), d = a, i.showNonCurrentDates || (d = ve(d, l.range)), d = this.adjustActiveRange(d), d = ve(d, s), c = tn(l.range, s), q(a, e) || (e = a.start), {
      currentDate: e,
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange: s,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: l.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: l.unit,
      isRangeAllDay: o,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange: d,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange: a,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: i.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: i.slotMaxTime,
      isValid: c,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(l.duration)
      // pass a fallback (might be null) ^
    };
  }
  // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.
  buildValidRange() {
    let e = this.props.validRangeInput, n = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
    return this.refineRange(n) || { start: null, end: null };
  }
  // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.
  buildCurrentRangeInfo(e, n) {
    let { props: r } = this, i = null, s = null, l = null, o;
    return r.duration ? (i = r.duration, s = r.durationUnit, l = this.buildRangeFromDuration(e, n, i, s)) : (o = this.props.dayCount) ? (s = "day", l = this.buildRangeFromDayCount(e, n, o)) : (l = this.buildCustomVisibleRange(e)) ? s = r.dateEnv.greatestWholeUnit(l.start, l.end).unit : (i = this.getFallbackDuration(), s = Ot(i).unit, l = this.buildRangeFromDuration(e, n, i, s)), { duration: i, unit: s, range: l };
  }
  getFallbackDuration() {
    return _({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: r, slotMinTime: i, slotMaxTime: s } = this.props, { start: l, end: o } = e;
    return r && (ge(i) < 0 && (l = R(l), l = n.add(l, i)), ge(s) > 1 && (o = R(o), o = P(o, -1), o = n.add(o, s))), { start: l, end: o };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(e, n, r, i) {
    let { dateEnv: s, dateAlignment: l } = this.props, o, a, d;
    if (!l) {
      let { dateIncrement: h } = this.props;
      h && Te(h) < Te(r) ? l = Ot(h).unit : l = i;
    }
    ge(r) <= 1 && this.isHiddenDay(o) && (o = this.skipHiddenDays(o, n), o = R(o));
    function c() {
      o = s.startOf(e, l), a = s.add(o, r), d = { start: o, end: a };
    }
    return c(), this.trimHiddenDays(d) || (e = this.skipHiddenDays(e, n), c()), d;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(e, n, r) {
    let { dateEnv: i, dateAlignment: s } = this.props, l = 0, o = e, a;
    s && (o = i.startOf(o, s)), o = R(o), o = this.skipHiddenDays(o, n), a = o;
    do
      a = P(a, 1), this.isHiddenDay(a) || (l += 1);
    while (l < r);
    return { start: o, end: a };
  }
  // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.
  buildCustomVisibleRange(e) {
    let { props: n } = this, r = n.visibleRangeInput, i = typeof r == "function" ? r.call(n.calendarApi, n.dateEnv.toDate(e)) : r, s = this.refineRange(i);
    return s && (s.start == null || s.end == null) ? null : s;
  }
  // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.
  buildRenderRange(e, n, r) {
    return e;
  }
  // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.
  buildDateIncrement(e) {
    let { dateIncrement: n } = this.props, r;
    return n || ((r = this.props.dateAlignment) ? _(1, r) : e || _({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let n = Yl(e, this.props.dateEnv);
      return n && (n = $r(n)), n;
    }
    return null;
  }
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week
  initHiddenDays() {
    let e = this.props.hiddenDays || [], n = [], r = 0, i;
    for (this.props.weekends === !1 && e.push(0, 6), i = 0; i < 7; i += 1)
      (n[i] = e.indexOf(i) !== -1) || (r += 1);
    if (!r)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = n;
  }
  // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null
  trimHiddenDays(e) {
    let { start: n, end: r } = e;
    return n && (n = this.skipHiddenDays(n)), r && (r = this.skipHiddenDays(r, -1, !0)), n == null || r == null || n < r ? { start: n, end: r } : null;
  }
  // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)
  isHiddenDay(e) {
    return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
  }
  // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)
  skipHiddenDays(e, n = 1, r = !1) {
    for (; this.isHiddenDayHash[(e.getUTCDay() + (r ? n : 0) + 7) % 7]; )
      e = P(e, n);
    return e;
  }
}
function ii(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, ln(t, n)), { jsEvent: e ? e.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function yo(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function ln(t, e) {
  let n = {};
  for (let r of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, No(t, e.dateEnv)), n;
}
function Xn(t, e, n) {
  let { dateEnv: r, options: i } = n, s = e;
  return t ? (s = R(s), s = r.add(s, i.defaultAllDayEventDuration)) : s = r.add(s, i.defaultTimedEventDuration), s;
}
function on(t, e, n, r) {
  let i = rt(t.defs, e), s = j();
  for (let l in t.defs) {
    let o = t.defs[l];
    s.defs[l] = Eo(o, i[l], n, r);
  }
  for (let l in t.instances) {
    let o = t.instances[l], a = s.defs[o.defId];
    s.instances[l] = Ao(o, a, i[o.defId], n, r);
  }
  return s;
}
function Eo(t, e, n, r) {
  let i = n.standardProps || {};
  i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
  let s = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
  for (let l of r.pluginHooks.eventDefMutationAppliers)
    l(s, n, r);
  return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
}
function Ao(t, e, n, r, i) {
  let { dateEnv: s } = i, l = r.standardProps && r.standardProps.allDay === !0, o = r.standardProps && r.standardProps.hasEnd === !1, a = Object.assign({}, t);
  return l && (a.range = Zr(a.range)), r.datesDelta && n.startEditable && (a.range = {
    start: s.add(a.range.start, r.datesDelta),
    end: s.add(a.range.end, r.datesDelta)
  }), r.startDelta && n.durationEditable && (a.range = {
    start: s.add(a.range.start, r.startDelta),
    end: a.range.end
  }), r.endDelta && n.durationEditable && (a.range = {
    start: a.range.start,
    end: s.add(a.range.end, r.endDelta)
  }), o && (a.range = {
    start: a.range.start,
    end: Xn(e.allDay, a.range.start, i)
  }), e.allDay && (a.range = {
    start: R(a.range.start),
    end: R(a.range.end)
  }), a.range.end < a.range.start && (a.range.end = Xn(e.allDay, a.range.start, i)), a;
}
class fe {
  constructor(e, n) {
    this.context = e, this.internalEventSource = n;
  }
  remove() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }
  refetch() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format;
  }
}
class T {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(e, n, r) {
    this._context = e, this._def = n, this._instance = r || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(e, n) {
    if (e in Qr)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = Ge[e](n), this.mutate({
        standardProps: { publicId: n }
        // hardcoded internal name
      });
    else if (e in Ge)
      n = Ge[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in et) {
      let r = et[e](n);
      e === "color" ? r = { backgroundColor: n, borderColor: n } : e === "editable" ? r = { startEditable: n, durationEditable: n } : r = { [e]: n }, this.mutate({
        standardProps: { ui: r }
      });
    } else
      console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
  }
  setExtendedProp(e, n) {
    this.mutate({
      extendedProps: { [e]: n }
    });
  }
  setStart(e, n = {}) {
    let { dateEnv: r } = this._context, i = r.createMarker(e);
    if (i && this._instance) {
      let s = this._instance.range, l = he(s.start, i, r, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: l }) : this.mutate({ startDelta: l });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: r } = this._context, i;
    if (!(e != null && (i = r.createMarker(e), !i)) && this._instance)
      if (i) {
        let s = he(this._instance.range.end, i, r, n.granularity);
        this.mutate({ endDelta: s });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, r = {}) {
    let { dateEnv: i } = this._context, s = { allDay: r.allDay }, l = i.createMarker(e), o;
    if (l && !(n != null && (o = i.createMarker(n), !o)) && this._instance) {
      let a = this._instance.range;
      r.allDay === !0 && (a = Zr(a));
      let d = he(a.start, l, i, r.granularity);
      if (o) {
        let c = he(a.end, o, i, r.granularity);
        Ws(d, c) ? this.mutate({ datesDelta: d, standardProps: s }) : this.mutate({ startDelta: d, endDelta: c, standardProps: s });
      } else
        s.hasEnd = !1, this.mutate({ datesDelta: d, standardProps: s });
    }
  }
  moveStart(e) {
    let n = _(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = _(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = _(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let r = { allDay: e }, { maintainDuration: i } = n;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (r.hasEnd = i), this.mutate({ standardProps: r });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, r = this._instance, i = N(e);
    return this._def.hasEnd ? n.formatRange(r.range.start, r.range.end, i, {
      forcedStartTzo: r.forcedStartTzo,
      forcedEndTzo: r.forcedEndTzo
    }) : n.format(r.range.start, i, {
      forcedTzo: r.forcedStartTzo
    });
  }
  mutate(e) {
    let n = this._instance;
    if (n) {
      let r = this._def, i = this._context, { eventStore: s } = i.getCurrentData(), l = Jt(s, n.instanceId);
      l = on(l, {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      }, e, i);
      let a = new T(i, r, n);
      this._def = l.defs[r.defId], this._instance = l.instances[n.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: l
      }), i.emitter.trigger("eventChange", {
        oldEvent: a,
        event: this,
        relatedEvents: re(l, i, n),
        revert() {
          i.dispatch({
            type: "RESET_EVENTS",
            eventStore: s
            // the ORIGINAL store
          });
        }
      });
    }
  }
  remove() {
    let e = this._context, n = si(this);
    e.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: n
    }), e.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert() {
        e.dispatch({
          type: "MERGE_EVENTS",
          eventStore: n
        });
      }
    });
  }
  get source() {
    let { sourceId: e } = this._def;
    return e ? new fe(this._context, this._context.getCurrentData().eventSources[e]) : null;
  }
  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
  }
  get end() {
    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
  }
  get startStr() {
    let e = this._instance;
    return e ? this._context.dateEnv.formatIso(e.range.start, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedStartTzo
    }) : "";
  }
  get endStr() {
    let e = this._instance;
    return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedEndTzo
    }) : "";
  }
  // computable props that all access the def
  // TODO: find a TypeScript-compatible way to do this at scale
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || "auto";
  }
  // bad. just normalize the type earlier
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }
  get borderColor() {
    return this._def.ui.borderColor;
  }
  get textColor() {
    return this._def.ui.textColor;
  }
  // NOTE: user can't modify these because Object.freeze was called in event-def parsing
  get classNames() {
    return this._def.ui.classNames;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(e = {}) {
    let n = this._def, { ui: r } = n, { startStr: i, endStr: s } = this, l = {
      allDay: n.allDay
    };
    return n.title && (l.title = n.title), i && (l.start = i), s && (l.end = s), n.publicId && (l.id = n.publicId), n.groupId && (l.groupId = n.groupId), n.url && (l.url = n.url), r.display && r.display !== "auto" && (l.display = r.display), e.collapseColor && r.backgroundColor && r.backgroundColor === r.borderColor ? l.color = r.backgroundColor : (r.backgroundColor && (l.backgroundColor = r.backgroundColor), r.borderColor && (l.borderColor = r.borderColor)), r.textColor && (l.textColor = r.textColor), r.classNames.length && (l.classNames = r.classNames), Object.keys(n.extendedProps).length && (e.collapseExtendedProps ? Object.assign(l, n.extendedProps) : l.extendedProps = n.extendedProps), l;
  }
  toJSON() {
    return this.toPlainObject();
  }
}
function si(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function re(t, e, n) {
  let { defs: r, instances: i } = t, s = [], l = n ? n.instanceId : "";
  for (let o in i) {
    let a = i[o], d = r[a.defId];
    a.instanceId !== l && s.push(new T(e, d, a));
  }
  return s;
}
function Jn(t, e, n, r) {
  let i = {}, s = {}, l = {}, o = [], a = [], d = rt(t.defs, e);
  for (let c in t.defs) {
    let h = t.defs[c];
    d[h.defId].display === "inverse-background" && (h.groupId ? (i[h.groupId] = [], l[h.groupId] || (l[h.groupId] = h)) : s[c] = []);
  }
  for (let c in t.instances) {
    let h = t.instances[c], f = t.defs[h.defId], u = d[f.defId], m = h.range, b = !f.allDay && r ? $r(m, r) : m, v = ve(b, n);
    v && (u.display === "inverse-background" ? f.groupId ? i[f.groupId].push(v) : s[h.defId].push(v) : u.display !== "none" && (u.display === "background" ? o : a).push({
      def: f,
      ui: u,
      instance: h,
      range: v,
      isStart: b.start && b.start.valueOf() === v.start.valueOf(),
      isEnd: b.end && b.end.valueOf() === v.end.valueOf()
    }));
  }
  for (let c in i) {
    let h = i[c], f = Zn(h, n);
    for (let u of f) {
      let m = l[c], b = d[m.defId];
      o.push({
        def: m,
        ui: b,
        instance: null,
        range: u,
        isStart: !1,
        isEnd: !1
      });
    }
  }
  for (let c in s) {
    let h = s[c], f = Zn(h, n);
    for (let u of f)
      o.push({
        def: t.defs[c],
        ui: d[c],
        instance: null,
        range: u,
        isStart: !1,
        isEnd: !1
      });
  }
  return { bg: o, fg: a };
}
function Kn(t, e) {
  t.fcSeg = e;
}
function be(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function rt(t, e) {
  return oe(t, (n) => li(n, e));
}
function li(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), Nl(n);
}
function So(t, e) {
  let n = t.map(Do);
  return n.sort((r, i) => Bs(r, i, e)), n.map((r) => r._seg);
}
function Do(t) {
  let { eventRange: e } = t, n = e.def, r = e.instance ? e.instance.range : e.range, i = r.start ? r.start.valueOf() : 0, s = r.end ? r.end.valueOf() : 0;
  return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
    id: n.publicId,
    start: i,
    end: s,
    duration: s - i,
    allDay: Number(n.allDay),
    _seg: t
  });
}
function Co(t, e) {
  let { pluginHooks: n } = e, r = n.isDraggableTransformers, { def: i, ui: s } = t.eventRange, l = s.startEditable;
  for (let o of r)
    l = o(l, i, s, e);
  return l;
}
function _o(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function wo(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function oi(t, e, n, r, i, s, l) {
  let { dateEnv: o, options: a } = n, { displayEventTime: d, displayEventEnd: c } = a, h = t.eventRange.def, f = t.eventRange.instance;
  d == null && (d = r !== !1), c == null && (c = i !== !1);
  let u = f.range.start, m = f.range.end, b = s || t.start || t.eventRange.range.start, v = l || t.end || t.eventRange.range.end, y = R(u).valueOf() === R(b).valueOf(), E = R($(m, -1)).valueOf() === R($(v, -1)).valueOf();
  return d && !h.allDay && (y || E) ? (b = y ? u : b, v = E ? m : v, c && h.hasEnd ? o.formatRange(b, v, e, {
    forcedStartTzo: s ? null : f.forcedStartTzo,
    forcedEndTzo: l ? null : f.forcedEndTzo
  }) : o.format(b, e, {
    forcedTzo: s ? null : f.forcedStartTzo
    // nooooo, same
  })) : "";
}
function Ce(t, e, n) {
  let r = t.eventRange.range;
  return {
    isPast: r.end < (n || e.start),
    isFuture: r.start >= (n || e.end),
    isToday: e && q(e, r.start)
  };
}
function Ro(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function To(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function ai(t, e) {
  let { def: n, instance: r } = t.eventRange, { url: i } = n;
  if (i)
    return { href: i };
  let { emitter: s, options: l } = e, { eventInteractive: o } = l;
  return o == null && (o = n.interactive, o == null && (o = !!s.hasHandlers("eventClick"))), o ? zr((a) => {
    s.trigger("eventClick", {
      el: a.target,
      event: new T(e, n, r),
      jsEvent: a,
      view: e.viewApi
    });
  }) : {};
}
const Io = {
  start: g,
  end: g,
  allDay: Boolean
};
function Mo(t, e, n) {
  let r = ko(t, e), { range: i } = r;
  if (!i.start)
    return null;
  if (!i.end) {
    if (n == null)
      return null;
    i.end = e.add(i.start, n);
  }
  return r;
}
function ko(t, e) {
  let { refined: n, extra: r } = $t(t, Io), i = n.start ? e.createMarkerMeta(n.start) : null, s = n.end ? e.createMarkerMeta(n.end) : null, { allDay: l } = n;
  return l == null && (l = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: s ? s.marker : null
  }, allDay: l }, r);
}
function xo(t, e) {
  return Zl(t.range, e.range) && t.allDay === e.allDay && Oo(t, e);
}
function Oo(t, e) {
  for (let n in e)
    if (n !== "range" && n !== "allDay" && t[n] !== e[n])
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function No(t, e) {
  return Object.assign(Object.assign({}, di(t.range, e, t.allDay)), { allDay: t.allDay });
}
function ci(t, e, n) {
  return Object.assign(Object.assign({}, di(t, e, n)), { timeZone: e.timeZone });
}
function di(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function Ho(t, e, n) {
  let r = qr({ editable: !1 }, n), i = Pt(
    r.refined,
    r.extra,
    "",
    // sourceId
    t.allDay,
    !0,
    // hasEnd
    n
  );
  return {
    def: i,
    ui: li(i, e),
    instance: Xt(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
let ui = {};
function Po(t, e) {
  ui[t] = e;
}
function Bo(t) {
  return new ui[t]();
}
class Lo {
  getMarkerYear(e) {
    return e.getUTCFullYear();
  }
  getMarkerMonth(e) {
    return e.getUTCMonth();
  }
  getMarkerDay(e) {
    return e.getUTCDate();
  }
  arrayToMarker(e) {
    return B(e);
  }
  markerToArray(e) {
    return Q(e);
  }
}
Po("gregory", Lo);
const jo = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Uo(t) {
  let e = jo.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
    if (Gr(n)) {
      let r = null;
      return e[13] && (r = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: n,
        isTimeUnspecified: !e[6],
        timeZoneOffset: r
      };
    }
  }
  return null;
}
class Fo {
  constructor(e) {
    let n = this.timeZone = e.timeZone, r = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!r || this.namedTimeZoneImpl), this.calendarSystem = Bo(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : B(Un(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = B(e)), n === null || !Gr(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = Uo(e);
    if (n === null)
      return null;
    let { marker: r } = n, i = null;
    return n.timeZoneOffset !== null && (this.canComputeOffset ? r = this.timestampToMarker(r.valueOf() - n.timeZoneOffset * 60 * 1e3) : i = n.timeZoneOffset), { marker: r, isTimeUnspecified: n.isTimeUnspecified, forcedTzo: i };
  }
  // Accessors
  getYear(e) {
    return this.calendarSystem.getMarkerYear(e);
  }
  getMonth(e) {
    return this.calendarSystem.getMarkerMonth(e);
  }
  getDay(e) {
    return this.calendarSystem.getMarkerDay(e);
  }
  // Adding / Subtracting
  add(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n.years, r[1] += n.months, r[2] += n.days, r[6] += n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  subtract(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] -= n.years, r[1] -= n.months, r[2] -= n.days, r[6] -= n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  addYears(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n, this.calendarSystem.arrayToMarker(r);
  }
  addMonths(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[1] += n, this.calendarSystem.arrayToMarker(r);
  }
  // Diffing Whole Units
  diffWholeYears(e, n) {
    let { calendarSystem: r } = this;
    return Y(e) === Y(n) && r.getMarkerDay(e) === r.getMarkerDay(n) && r.getMarkerMonth(e) === r.getMarkerMonth(n) ? r.getMarkerYear(n) - r.getMarkerYear(e) : null;
  }
  diffWholeMonths(e, n) {
    let { calendarSystem: r } = this;
    return Y(e) === Y(n) && r.getMarkerDay(e) === r.getMarkerDay(n) ? r.getMarkerMonth(n) - r.getMarkerMonth(e) + (r.getMarkerYear(n) - r.getMarkerYear(e)) * 12 : null;
  }
  // Range / Duration
  greatestWholeUnit(e, n) {
    let r = this.diffWholeYears(e, n);
    return r !== null ? { unit: "year", value: r } : (r = this.diffWholeMonths(e, n), r !== null ? { unit: "month", value: r } : (r = il(e, n), r !== null ? { unit: "week", value: r } : (r = Xe(e, n), r !== null ? { unit: "day", value: r } : (r = el(e, n), yt(r) ? { unit: "hour", value: r } : (r = tl(e, n), yt(r) ? { unit: "minute", value: r } : (r = nl(e, n), yt(r) ? { unit: "second", value: r } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, r) {
    let i;
    return r.years && (i = this.diffWholeYears(e, n), i !== null) ? i / Qs(r) : r.months && (i = this.diffWholeMonths(e, n), i !== null) ? i / Ys(r) : r.days && (i = Xe(e, n), i !== null) ? i / ge(r) : (n.valueOf() - e.valueOf()) / Te(r);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? R(e) : n === "hour" ? sl(e) : n === "minute" ? ll(e) : n === "second" ? ol(e) : null;
  }
  startOfYear(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e)
    ]);
  }
  startOfMonth(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e)
    ]);
  }
  startOfWeek(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e),
      e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }
  // Week Number
  computeWeekNumber(e) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : al(e, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(e, n, r = {}) {
    return n.format({
      marker: e,
      timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, n, r, i = {}) {
    return i.isEndExclusive && (n = $(n, -1)), r.formatRange({
      marker: e,
      timeZoneOffset: i.forcedStartTzo != null ? i.forcedStartTzo : this.offsetForMarker(e)
    }, {
      marker: n,
      timeZoneOffset: i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(n)
    }, this, i.defaultSeparator);
  }
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */
  formatIso(e, n = {}) {
    let r = null;
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? r = n.forcedTzo : r = this.offsetForMarker(e)), dl(e, r, n.omitTime);
  }
  // TimeZone
  timestampToMarker(e) {
    return this.timeZone === "local" ? B(Un(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : B(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -Fn(Q(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Q(e)) : null;
  }
  // Conversion
  toDate(e, n) {
    return this.timeZone === "local" ? Fn(Q(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(Q(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
  }
}
class Vo {
  constructor() {
    this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  addSegs(e) {
    let n = [];
    for (let r of e)
      this.insertEntry(r, n);
    return n;
  }
  insertEntry(e, n) {
    let r = this.findInsertion(e);
    return this.isInsertionValid(r, e) ? (this.insertEntryAt(e, r), 1) : this.handleInvalidInsertion(r, e, n);
  }
  isInsertionValid(e, n) {
    return (this.maxCoord === -1 || e.levelCoord + n.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
  }
  // returns number of new entries inserted
  handleInvalidInsertion(e, n, r) {
    return this.allowReslicing && e.touchingEntry ? this.splitEntry(n, e.touchingEntry, r) : (r.push(n), 0);
  }
  splitEntry(e, n, r) {
    let i = 0, s = [], l = e.span, o = n.span;
    return l.start < o.start && (i += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: l.start, end: o.start }
    }, s)), l.end > o.end && (i += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: o.end, end: l.end }
    }, s)), i ? (r.push({
      index: e.index,
      thickness: e.thickness,
      span: fi(o, l)
      // guaranteed to intersect
    }, ...s), i) : (r.push(e), 0);
  }
  insertEntryAt(e, n) {
    let { entriesByLevel: r, levelCoords: i } = this;
    n.lateral === -1 ? (wt(i, n.level, n.levelCoord), wt(r, n.level, [e])) : wt(r[n.level], n.lateral, e), this.stackCnts[_e(e)] = n.stackCnt;
  }
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: r, strictOrder: i, stackCnts: s } = this, l = n.length, o = 0, a = -1, d = -1, c = null, h = 0;
    for (let m = 0; m < l; m += 1) {
      let b = n[m];
      if (!i && b >= o + e.thickness)
        break;
      let v = r[m], y, E = tr(v, e.span.start, er), S = E[0] + E[1];
      for (
        ;
        // loop through entries that horizontally intersect
        (y = v[S]) && // but not past the whole entry list
        y.span.start < e.span.end;
      ) {
        let D = b + y.thickness;
        D > o && (o = D, c = y, a = m, d = S), D === o && (h = Math.max(h, s[_e(y)] + 1)), S += 1;
      }
    }
    let f = 0;
    if (c)
      for (f = a + 1; f < l && n[f] < o; )
        f += 1;
    let u = -1;
    return f < l && n[f] === o && (u = tr(r[f], e.span.end, er)[0]), {
      touchingLevel: a,
      touchingLateral: d,
      touchingEntry: c,
      stackCnt: h,
      levelCoord: o,
      level: f,
      lateral: u
    };
  }
  // sorted by levelCoord (lowest to highest)
  toRects() {
    let { entriesByLevel: e, levelCoords: n } = this, r = e.length, i = [];
    for (let s = 0; s < r; s += 1) {
      let l = e[s], o = n[s];
      for (let a of l)
        i.push(Object.assign(Object.assign({}, a), { levelCoord: o }));
    }
    return i;
  }
}
function er(t) {
  return t.span.end;
}
function _e(t) {
  return t.index + ":" + t.span.start;
}
function fi(t, e) {
  let n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n < r ? { start: n, end: r } : null;
}
function wt(t, e, n) {
  t.splice(e, 0, n);
}
function tr(t, e, n) {
  let r = 0, i = t.length;
  if (!i || e < n(t[r]))
    return [0, 0];
  if (e > n(t[i - 1]))
    return [i, 0];
  for (; r < i; ) {
    let s = Math.floor(r + (i - r) / 2), l = n(t[s]);
    if (e < l)
      i = s;
    else if (e > l)
      r = s + 1;
    else
      return [s, 1];
  }
  return [r, 0];
}
class Ee {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function zo(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function an(t) {
  return {
    [t.component.uid]: t
  };
}
const Lt = {};
class Wo {
  constructor(e, n) {
    this.emitter = new dt();
  }
  destroy() {
  }
  setMirrorIsVisible(e) {
  }
  setMirrorNeedsRevert(e) {
  }
  setAutoScrollEnabled(e) {
  }
}
const cn = {};
class Go extends I {
  constructor() {
    super(...arguments), this.state = {
      forPrint: !1
    }, this.handleBeforePrint = () => {
      this.setState({ forPrint: !0 });
    }, this.handleAfterPrint = () => {
      this.setState({ forPrint: !1 });
    };
  }
  render() {
    let { props: e } = this, { options: n } = e, { forPrint: r } = this.state, i = r || n.height === "auto" || n.contentHeight === "auto", s = !i && n.height != null ? n.height : "", l = [
      "fc",
      r ? "fc-media-print" : "fc-media-screen",
      `fc-direction-${n.direction}`,
      e.theme.getClass("root")
    ];
    return Jr() || l.push("fc-liquid-hack"), e.children(l, s, i, r);
  }
  componentDidMount() {
    let { emitter: e } = this.props;
    e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
  }
  componentWillUnmount() {
    let { emitter: e } = this.props;
    e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
  }
}
function Qo(t, e) {
  return !t || e > 10 ? N({ weekday: "short" }) : e > 1 ? N({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : N({ weekday: "long" });
}
const hi = "fc-col-header-cell";
function gi(t) {
  return t.text;
}
class dn extends I {
  constructor() {
    super(...arguments), this.id = le(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      this.props.elRef && z(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { customGenerator: i, defaultGenerator: s, renderProps: l } = e, o = mi(e);
    let a = !1, d, c = [], h;
    if (i != null) {
      const f = typeof i == "function" ? i(l, p) : i;
      if (f === !0)
        a = !0;
      else {
        const u = f && typeof f == "object";
        u && "html" in f ? o.dangerouslySetInnerHTML = { __html: f.html } : u && "domNodes" in f ? c = Array.prototype.slice.call(f.domNodes) : !u && typeof f != "function" ? d = f : h = f;
      }
    } else
      a = !pi(e.generatorName, r);
    return a && s && (d = s(l)), this.queuedDomNodes = c, this.currentGeneratorMeta = h, p(e.elTag, o, d);
  }
  componentDidMount() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(!1);
  }
  triggerCustomRendering(e) {
    var n;
    const { props: r, context: i } = this, { handleCustomRendering: s, customRenderingMetaMap: l } = i.options;
    if (s) {
      const o = (n = this.currentGeneratorMeta) !== null && n !== void 0 ? n : l == null ? void 0 : l[r.generatorName];
      o && s(Object.assign(Object.assign({
        id: this.id,
        isActive: e,
        containerEl: this.base,
        reportNewContainerEl: this.handleEl,
        // for customRenderingReplacesEl
        generatorMeta: o
      }, r), { elClasses: (r.elClasses || []).filter(Yo) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, r = this.base;
    if (!Z(e, n)) {
      n.forEach(zt);
      for (let i of e)
        r.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
dn.addPropsEquality({
  elClasses: Z,
  elStyle: F,
  elAttrs: Zs,
  renderProps: F
});
function pi(t, e) {
  var n;
  return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
}
function mi(t, e) {
  const n = Object.assign(Object.assign({}, t.elAttrs), { ref: t.elRef });
  return (t.elClasses || e) && (n.className = (t.elClasses || []).concat(e || []).concat(n.className || []).filter(Boolean).join(" ")), t.elStyle && (n.style = t.elStyle), n;
}
function Yo(t) {
  return !!t;
}
const vi = ni(0);
class W extends L {
  constructor() {
    super(...arguments), this.InnerContent = qo.bind(void 0, this), this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && z(this.props.elRef, e);
    };
  }
  render() {
    const { props: e } = this, n = Zo(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const r = mi(e, n), i = e.children(this.InnerContent, e.renderProps, r);
      return e.elTag ? p(e.elTag, r, i) : i;
    } else
      return p(dn, Object.assign(Object.assign({}, e), { elRef: this.handleRootEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
  }
  componentDidMount() {
    var e, n;
    (n = (e = this.props).didMount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.rootEl || this.base }));
  }
  componentWillUnmount() {
    var e, n;
    (n = (e = this.props).willUnmount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.rootEl || this.base }));
  }
}
W.contextType = vi;
function qo(t, e) {
  const n = t.props;
  return p(dn, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function Zo(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class $o extends I {
  render() {
    let { dateEnv: e, options: n, theme: r, viewApi: i } = this.context, { props: s } = this, { date: l, dateProfile: o } = s, a = Kr(l, s.todayRange, null, o), d = [hi].concat(nn(a, r)), c = e.format(l, s.dayHeaderFormat), h = !a.isDisabled && s.colCnt > 1 ? Bt(this.context, l) : {}, f = Object.assign(Object.assign(Object.assign({ date: e.toDate(l), view: i }, s.extraRenderProps), { text: c }), a);
    return p(W, { elTag: "th", elClasses: d, elAttrs: Object.assign({ role: "columnheader", colSpan: s.colSpan, "data-date": a.isDisabled ? void 0 : qt(l) }, s.extraDataAttrs), renderProps: f, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: gi, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (u) => p("div", { className: "fc-scrollgrid-sync-inner" }, !a.isDisabled && p(u, { elTag: "a", elAttrs: h, elClasses: [
      "fc-col-header-cell-cushion",
      s.isSticky && "fc-sticky"
    ] })));
  }
}
const Xo = N({ weekday: "long" });
class Jo extends I {
  render() {
    let { props: e } = this, { dateEnv: n, theme: r, viewApi: i, options: s } = this.context, l = P(/* @__PURE__ */ new Date(2592e5), e.dow), o = {
      dow: e.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, a = n.format(l, e.dayHeaderFormat), d = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date: l
    }, o), { view: i }), e.extraRenderProps), { text: a });
    return p(W, { elTag: "th", elClasses: [
      hi,
      ...nn(o, r),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: d, generatorName: "dayHeaderContent", customGenerator: s.dayHeaderContent, defaultGenerator: gi, classNameGenerator: s.dayHeaderClassNames, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, (c) => p(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      p(c, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(l, Xo)
      } })
    ));
  }
}
class un extends L {
  constructor(e, n) {
    super(e, n), this.initialNowDate = ke(n.options.now, n.dateEnv), this.initialNowQueriedMs = (/* @__PURE__ */ new Date()).valueOf(), this.state = this.computeTiming().currentState;
  }
  render() {
    let { props: e, state: n } = this;
    return e.children(n.nowDate, n.todayRange);
  }
  componentDidMount() {
    this.setTimeout();
  }
  componentDidUpdate(e) {
    e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }
  componentWillUnmount() {
    this.clearTimeout();
  }
  computeTiming() {
    let { props: e, context: n } = this, r = $(this.initialNowDate, (/* @__PURE__ */ new Date()).valueOf() - this.initialNowQueriedMs), i = n.dateEnv.startOf(r, e.unit), s = n.dateEnv.add(i, _(1, e.unit)), l = s.valueOf() - r.valueOf();
    return l = Math.min(1e3 * 60 * 60 * 24, l), {
      currentState: { nowDate: i, todayRange: nr(i) },
      nextState: { nowDate: s, todayRange: nr(s) },
      waitMs: l
    };
  }
  setTimeout() {
    let { nextState: e, waitMs: n } = this.computeTiming();
    this.timeoutId = setTimeout(() => {
      this.setState(e, () => {
        this.setTimeout();
      });
    }, n);
  }
  clearTimeout() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
}
un.contextType = ae;
function nr(t) {
  let e = R(t), n = P(e, 1);
  return { start: e, end: n };
}
class Ko extends I {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = w(ea);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: r, datesRepDistinctDays: i, renderIntro: s } = this.props, l = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
    return p(un, { unit: "day" }, (o, a) => p(
      "tr",
      { role: "row" },
      s && s("day"),
      n.map((d) => i ? p($o, { key: d.toISOString(), date: d, dateProfile: r, todayRange: a, colCnt: n.length, dayHeaderFormat: l }) : p(Jo, { key: d.getUTCDay(), dow: d.getUTCDay(), dayHeaderFormat: l }))
    ));
  }
}
function ea(t, e, n) {
  return t || Qo(e, n);
}
class ta {
  constructor(e, n) {
    let r = e.start, { end: i } = e, s = [], l = [], o = -1;
    for (; r < i; )
      n.isHiddenDay(r) ? s.push(o + 0.5) : (o += 1, s.push(o), l.push(r)), r = P(r, 1);
    this.dates = l, this.indices = s, this.cnt = l.length;
  }
  sliceRange(e) {
    let n = this.getDateDayIndex(e.start), r = this.getDateDayIndex(P(e.end, -1)), i = Math.max(0, n), s = Math.min(this.cnt - 1, r);
    return i = Math.ceil(i), s = Math.floor(s), i <= s ? {
      firstIndex: i,
      lastIndex: s,
      isStart: n === i,
      isEnd: r === s
    } : null;
  }
  // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
  getDateDayIndex(e) {
    let { indices: n } = this, r = Math.floor(ye(this.dates[0], e));
    return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r];
  }
}
class na {
  constructor(e, n) {
    let { dates: r } = e, i, s, l;
    if (n) {
      for (s = r[0].getUTCDay(), i = 1; i < r.length && r[i].getUTCDay() !== s; i += 1)
        ;
      l = Math.ceil(r.length / i);
    } else
      l = 1, i = r.length;
    this.rowCnt = l, this.colCnt = i, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  buildCells() {
    let e = [];
    for (let n = 0; n < this.rowCnt; n += 1) {
      let r = [];
      for (let i = 0; i < this.colCnt; i += 1)
        r.push(this.buildCell(n, i));
      e.push(r);
    }
    return e;
  }
  buildCell(e, n) {
    let r = this.daySeries.dates[e * this.colCnt + n];
    return {
      key: r.toISOString(),
      date: r
    };
  }
  buildHeaderDates() {
    let e = [];
    for (let n = 0; n < this.colCnt; n += 1)
      e.push(this.cells[0][n].date);
    return e;
  }
  sliceRange(e) {
    let { colCnt: n } = this, r = this.daySeries.sliceRange(e), i = [];
    if (r) {
      let { firstIndex: s, lastIndex: l } = r, o = s;
      for (; o <= l; ) {
        let a = Math.floor(o / n), d = Math.min((a + 1) * n, l + 1);
        i.push({
          row: a,
          firstCol: o % n,
          lastCol: (d - 1) % n,
          isStart: r.isStart && o === s,
          isEnd: r.isEnd && d - 1 === l
        }), o = d;
      }
    }
    return i;
  }
}
class ra {
  constructor() {
    this.sliceBusinessHours = w(this._sliceBusinessHours), this.sliceDateSelection = w(this._sliceDateSpan), this.sliceEventStore = w(this._sliceEventStore), this.sliceEventDrag = w(this._sliceInteraction), this.sliceEventResize = w(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  sliceProps(e, n, r, i, ...s) {
    let { eventUiBases: l } = e, o = this.sliceEventStore(e.eventStore, l, n, r, ...s);
    return {
      dateSelectionSegs: this.sliceDateSelection(e.dateSelection, n, r, l, i, ...s),
      businessHourSegs: this.sliceBusinessHours(e.businessHours, n, r, i, ...s),
      fgEventSegs: o.fg,
      bgEventSegs: o.bg,
      eventDrag: this.sliceEventDrag(e.eventDrag, l, n, r, ...s),
      eventResize: this.sliceEventResize(e.eventResize, l, n, r, ...s),
      eventSelection: e.eventSelection
    };
  }
  sliceNowDate(e, n, r, i, ...s) {
    return this._sliceDateSpan(
      { range: { start: e, end: $(e, 1) }, allDay: !1 },
      // add 1 ms, protect against null range
      n,
      r,
      {},
      i,
      ...s
    );
  }
  _sliceBusinessHours(e, n, r, i, ...s) {
    return e ? this._sliceEventStore(se(e, Le(n, !!r), i), {}, n, r, ...s).bg : [];
  }
  _sliceEventStore(e, n, r, i, ...s) {
    if (e) {
      let l = Jn(e, n, Le(r, !!i), i);
      return {
        bg: this.sliceEventRanges(l.bg, s),
        fg: this.sliceEventRanges(l.fg, s)
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(e, n, r, i, ...s) {
    if (!e)
      return null;
    let l = Jn(e.mutatedEvents, n, Le(r, !!i), i);
    return {
      segs: this.sliceEventRanges(l.fg, s),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, r, i, s, ...l) {
    if (!e)
      return [];
    let o = Le(n, !!r), a = ve(e.range, o);
    if (a) {
      e = Object.assign(Object.assign({}, e), { range: a });
      let d = Ho(e, i, s), c = this.sliceRange(e.range, ...l);
      for (let h of c)
        h.eventRange = d;
      return c;
    }
    return [];
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRanges(e, n) {
    let r = [];
    for (let i of e)
      r.push(...this.sliceEventRange(i, n));
    return r;
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRange(e, n) {
    let r = e.range;
    this.forceDayIfListItem && e.ui.display === "list-item" && (r = {
      start: r.start,
      end: P(r.start, 1)
    });
    let i = this.sliceRange(r, ...n);
    for (let s of i)
      s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
    return i;
  }
}
function Le(t, e) {
  let n = t.activeRange;
  return e ? n : {
    start: $(n.start, t.slotMinTime.milliseconds),
    end: $(n.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function ia(t, e, n, r, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return sa(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return la(t, n[e.sourceId], e.rawEvents, r.activeRange, i);
    case "ADD_EVENTS":
      return oa(
        t,
        e.eventStore,
        // new ones
        r ? r.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return Kt(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? se(t, r.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return kl(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return yi(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return at(t, (s) => !s.sourceId);
    case "REMOVE_ALL_EVENTS":
      return j();
    default:
      return t;
  }
}
function sa(t, e, n, r, i, s) {
  if (e && // not already removed
  n === e.latestFetchId) {
    let l = Ie(bi(i, e, s), e, s);
    return r && (l = se(l, r, s)), Kt(yi(t, e.sourceId), l);
  }
  return t;
}
function la(t, e, n, r, i) {
  const { defIdMap: s, instanceIdMap: l } = ca(t);
  let o = Ie(bi(n, e, i), e, i, !1, s, l);
  return se(o, r, i);
}
function bi(t, e, n) {
  let r = n.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = rr(t, i)), r && (t = rr(t, r)), t;
}
function rr(t, e) {
  let n;
  if (!e)
    n = t;
  else {
    n = [];
    for (let r of t) {
      let i = e(r);
      i ? n.push(i) : i == null && n.push(r);
    }
  }
  return n;
}
function oa(t, e, n, r) {
  return n && (e = se(e, n, r)), Kt(t, e);
}
function ir(t, e, n) {
  let { defs: r } = t, i = oe(t.instances, (s) => r[s.defId].allDay ? s : Object.assign(Object.assign({}, s), { range: {
    start: n.createMarker(e.toDate(s.range.start, s.forcedStartTzo)),
    end: n.createMarker(e.toDate(s.range.end, s.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : s.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : s.forcedEndTzo }));
  return { defs: r, instances: i };
}
function yi(t, e) {
  return at(t, (n) => n.sourceId !== e);
}
function aa(t, e) {
  return {
    defs: t.defs,
    instances: ie(t.instances, (n) => !e[n.instanceId])
  };
}
function ca(t) {
  const { defs: e, instances: n } = t, r = {}, i = {};
  for (let s in e) {
    const l = e[s], { publicId: o } = l;
    o && (r[o] = s);
  }
  for (let s in n) {
    const l = n[s], o = e[l.defId], { publicId: a } = o;
    a && (i[a] = s);
  }
  return { defIdMap: r, instanceIdMap: i };
}
function Ei(t, e, n) {
  let { instances: r } = t.mutatedEvents;
  for (let i in r)
    if (!ct(e.validRange, r[i].range))
      return !1;
  return Ai({ eventDrag: t }, n);
}
function da(t, e, n) {
  return ct(e.validRange, t.range) ? Ai({ dateSelection: t }, n) : !1;
}
function Ai(t, e) {
  let n = e.getCurrentData(), r = Object.assign({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || ua)(r, e);
}
function ua(t, e, n = {}, r) {
  return !(t.eventDrag && !fa(t, e, n, r) || t.dateSelection && !ha(t, e, n, r));
}
function fa(t, e, n, r) {
  let i = e.getCurrentData(), s = t.eventDrag, l = s.mutatedEvents, o = l.defs, a = l.instances, d = rt(o, s.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  r && (d = oe(d, r));
  let c = aa(t.eventStore, s.affectedEvents.instances), h = c.defs, f = c.instances, u = rt(h, t.eventUiBases);
  for (let m in a) {
    let b = a[m], v = b.range, y = d[b.defId], E = o[b.defId];
    if (!Si(y.constraints, v, c, t.businessHours, e))
      return !1;
    let { eventOverlap: S } = e.options, D = typeof S == "function" ? S : null;
    for (let O in f) {
      let x = f[O];
      if (tn(v, x.range) && (u[x.defId].overlap === !1 && s.isEvent || y.overlap === !1 || D && !D(
        new T(e, h[x.defId], x),
        // still event
        new T(e, E, b)
      )))
        return !1;
    }
    let k = i.eventStore;
    for (let O of y.allows) {
      let x = Object.assign(Object.assign({}, n), { range: b.range, allDay: E.allDay }), C = k.defs[E.defId], ue = k.instances[m], ht;
      if (C ? ht = new T(e, C, ue) : ht = new T(e, E), !O(ln(x, e), ht))
        return !1;
    }
  }
  return !0;
}
function ha(t, e, n, r) {
  let i = t.eventStore, s = i.defs, l = i.instances, o = t.dateSelection, a = o.range, { selectionConfig: d } = e.getCurrentData();
  if (r && (d = r(d)), !Si(d.constraints, a, i, t.businessHours, e))
    return !1;
  let { selectOverlap: c } = e.options, h = typeof c == "function" ? c : null;
  for (let f in l) {
    let u = l[f];
    if (tn(a, u.range) && (d.overlap === !1 || h && !h(new T(e, s[u.defId], u), null)))
      return !1;
  }
  for (let f of d.allows) {
    let u = Object.assign(Object.assign({}, n), o);
    if (!f(ln(u, e), null))
      return !1;
  }
  return !0;
}
function Si(t, e, n, r, i) {
  for (let s of t)
    if (!pa(ga(s, e, n, r, i), e))
      return !1;
  return !0;
}
function ga(t, e, n, r, i) {
  return t === "businessHours" ? Rt(se(r, e, i)) : typeof t == "string" ? Rt(at(n, (s) => s.groupId === t)) : typeof t == "object" && t ? Rt(se(t, e, i)) : [];
}
function Rt(t) {
  let { instances: e } = t, n = [];
  for (let r in e)
    n.push(e[r].range);
  return n;
}
function pa(t, e) {
  for (let n of t)
    if (ct(n, e))
      return !0;
  return !1;
}
class sr extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function ma(t, e, n) {
  t = t.toUpperCase();
  const r = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, r).then((i) => {
    if (i.ok)
      return i.json().then((s) => [s, i], () => {
        throw new sr("Failure parsing JSON", i);
      });
    throw new sr("Request failed", i);
  });
}
class fn {
  constructor(e) {
    this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  request(e) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(
      // NOT OPTIMAL! TODO: look at debounce
      this.tryDrain.bind(this),
      e
    ));
  }
  pause(e = "") {
    let { pauseDepths: n } = this;
    n[e] = (n[e] || 0) + 1, this.clearTimeout();
  }
  resume(e = "", n) {
    let { pauseDepths: r } = this;
    e in r && (n ? delete r[e] : (r[e] -= 1, r[e] <= 0 && delete r[e]), this.tryDrain());
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }
  clear() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }
  clearTimeout() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }
  drained() {
    this.drainedOption && this.drainedOption();
  }
}
const je = /^(visible|hidden)$/;
class va extends I {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, z(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: n, liquidIsAbsolute: r } = e, i = n && r, s = ["fc-scroller"];
    return n && (r ? s.push("fc-scroller-liquid-absolute") : s.push("fc-scroller-liquid")), p("div", { ref: this.handleEl, className: s.join(" "), style: {
      overflowX: e.overflowX,
      overflowY: e.overflowY,
      left: i && -(e.overcomeLeft || 0) || "",
      right: i && -(e.overcomeRight || 0) || "",
      bottom: i && -(e.overcomeBottom || 0) || "",
      marginLeft: !i && -(e.overcomeLeft || 0) || "",
      marginRight: !i && -(e.overcomeRight || 0) || "",
      marginBottom: !i && -(e.overcomeBottom || 0) || "",
      maxHeight: e.maxHeight || ""
    } }, e.children);
  }
  needsXScrolling() {
    if (je.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (je.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return je.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return je.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class ne {
  constructor(e) {
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (n, r) => {
      let { depths: i, currentMap: s } = this, l = !1, o = !1;
      n !== null ? (l = r in s, s[r] = n, i[r] = (i[r] || 0) + 1, o = !0) : (i[r] -= 1, i[r] || (delete s[r], delete this.callbackMap[r], l = !0)), this.masterCallback && (l && this.masterCallback(null, String(r)), o && this.masterCallback(n, String(r)));
    };
  }
  createRef(e) {
    let n = this.callbackMap[e];
    return n || (n = this.callbackMap[e] = (r) => {
      this.handleValue(r, String(e));
    }), n;
  }
  // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
  collect(e, n, r) {
    return Xs(this.currentMap, e, n, r);
  }
  getAll() {
    return Yt(this.currentMap);
  }
}
function ba(t) {
  let e = Rs(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let r of e)
    n = Math.max(n, Fs(r));
  return Math.ceil(n);
}
function Di(t, e) {
  return t.liquid && e.liquid;
}
function ya(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  Di(t, e);
}
function Ea(t, e, n, r) {
  let { expandRows: i } = n;
  return typeof e.content == "function" ? e.content(n) : p("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: n.tableMinWidth,
      width: n.clientWidth,
      height: i ? n.clientHeight : ""
      // css `height` on a <table> serves as a min-height
    }
  }, n.tableColGroupNode, p(r ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
}
function Aa(t, e) {
  return Z(t, e, F);
}
function Sa(t, e) {
  let n = [];
  for (let r of t) {
    let i = r.span || 1;
    for (let s = 0; s < i; s += 1)
      n.push(p("col", { style: {
        width: r.width === "shrink" ? Da(e) : r.width || "",
        minWidth: r.minWidth || ""
      } }));
  }
  return p("colgroup", {}, ...n);
}
function Da(t) {
  return t ?? 4;
}
function Ca(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function _a(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function wa(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function Ra(t) {
  return p("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function lr(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function Ta(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class Ci extends I {
  constructor() {
    super(...arguments), this.processCols = w((e) => e, Aa), this.renderMicroColGroup = w(Sa), this.scrollerRefs = new ne(), this.scrollerElRefs = new ne(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, i = e.sections || [], s = this.processCols(e.cols), l = this.renderMicroColGroup(s, n.shrinkWidth), o = _a(e.liquid, r);
    e.collapsibleWidth && o.push("fc-scrollgrid-collapsible");
    let a = i.length, d = 0, c, h = [], f = [], u = [];
    for (; d < a && (c = i[d]).type === "header"; )
      h.push(this.renderSection(c, l, !0)), d += 1;
    for (; d < a && (c = i[d]).type === "body"; )
      f.push(this.renderSection(c, l, !1)), d += 1;
    for (; d < a && (c = i[d]).type === "footer"; )
      u.push(this.renderSection(c, l, !0)), d += 1;
    let m = !Jr();
    const b = { role: "rowgroup" };
    return p("table", {
      role: "grid",
      className: o.join(" "),
      style: { height: e.height }
    }, !!(!m && h.length) && p("thead", b, ...h), !!(!m && f.length) && p("tbody", b, ...f), !!(!m && u.length) && p("tfoot", b, ...u), m && p("tbody", b, ...h, ...f, ...u));
  }
  renderSection(e, n, r) {
    return "outerContent" in e ? p(M, { key: e.key }, e.outerContent) : p("tr", { key: e.key, role: "presentation", className: wa(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, r));
  }
  renderChunkTd(e, n, r, i) {
    if ("outerContent" in r)
      return r.outerContent;
    let { props: s } = this, { forceYScrollbars: l, scrollerClientWidths: o, scrollerClientHeights: a } = this.state, d = ya(s, e), c = Di(s, e), h = s.liquid ? l ? "scroll" : d ? "auto" : "hidden" : "visible", f = e.key, u = Ea(e, r, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !s.collapsibleWidth && o[f] !== void 0 ? o[f] : null,
      clientHeight: a[f] !== void 0 ? a[f] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, i);
    return p(i ? "th" : "td", {
      ref: r.elRef,
      role: "presentation"
    }, p(
      "div",
      { className: `fc-scroller-harness${c ? " fc-scroller-harness-liquid" : ""}` },
      p(va, { ref: this.scrollerRefs.createRef(f), elRef: this.scrollerElRefs.createRef(f), overflowY: h, overflowX: s.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: c, liquidIsAbsolute: !0 }, u)
    ));
  }
  _handleScrollerEl(e, n) {
    let r = Ia(this.props.sections, n);
    r && z(r.chunk.scrollerElRef, e);
  }
  componentDidMount() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }
  componentDidUpdate() {
    this.handleSizing();
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }
  computeShrinkWidth() {
    return Ca(this.props.cols) ? ba(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = to(), { scrollerRefs: n, scrollerElRefs: r } = this, i = !1, s = {}, l = {};
    for (let o in n.currentMap) {
      let a = n.currentMap[o];
      if (a && a.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (let o of this.props.sections) {
      let a = o.key, d = r.currentMap[a];
      if (d) {
        let c = d.parentNode;
        s[a] = Math.floor(c.getBoundingClientRect().width - (i ? e.y : 0)), l[a] = Math.floor(c.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: s, scrollerClientHeights: l };
  }
}
Ci.addStateEquality({
  scrollerClientWidths: F,
  scrollerClientHeights: F
});
function Ia(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class hn extends I {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, e && Kn(e, this.props.seg);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { eventRange: s } = i, { ui: l } = s, o = {
      event: new T(n, s.def, s.instance),
      view: n.viewApi,
      timeText: e.timeText,
      textColor: l.textColor,
      backgroundColor: l.backgroundColor,
      borderColor: l.borderColor,
      isDraggable: !e.disableDragging && Co(i, n),
      isStartResizable: !e.disableResizing && _o(i, n),
      isEndResizable: !e.disableResizing && wo(i),
      isMirror: !!(e.isDragging || e.isResizing || e.isDateSelecting),
      isStart: !!i.isStart,
      isEnd: !!i.isEnd,
      isPast: !!e.isPast,
      isFuture: !!e.isFuture,
      isToday: !!e.isToday,
      isSelected: !!e.isSelected,
      isDragging: !!e.isDragging,
      isResizing: !!e.isResizing
    };
    return p(W, Object.assign({}, e, { elRef: this.handleEl, elClasses: [
      ...Ro(o),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], renderProps: o, generatorName: "eventContent", customGenerator: r.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: r.eventClassNames, didMount: r.eventDidMount, willUnmount: r.eventWillUnmount }));
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && Kn(this.el, this.props.seg);
  }
}
class Ma extends I {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { ui: s } = i.eventRange, l = r.eventTimeFormat || e.defaultTimeFormat, o = oi(i, l, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return p(hn, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: s.borderColor,
      backgroundColor: s.backgroundColor
    }, elAttrs: ai(i, n), defaultGenerator: ka, timeText: o }), (a, d) => p(
      M,
      null,
      p(a, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: d.textColor } }),
      !!d.isStartResizable && p("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      !!d.isEndResizable && p("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
function ka(t) {
  return p(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && p("div", { className: "fc-event-time" }, t.timeText),
    p(
      "div",
      { className: "fc-event-title-container" },
      p("div", { className: "fc-event-title fc-sticky" }, t.event.title || p(M, null, " "))
    )
  );
}
const xa = N({ day: "numeric" });
class _i extends I {
  constructor() {
    super(...arguments), this.refineRenderProps = We(Oa);
  }
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = this.refineRenderProps({
      date: e.date,
      dateProfile: e.dateProfile,
      todayRange: e.todayRange,
      isMonthStart: e.isMonthStart || !1,
      showDayNumber: e.showDayNumber,
      extraRenderProps: e.extraRenderProps,
      viewApi: n.viewApi,
      dateEnv: n.dateEnv,
      monthStartFormat: r.monthStartFormat
    });
    return p(W, Object.assign({}, e, { elClasses: [
      ...nn(i, n.theme),
      ...e.elClasses || []
    ], elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": qt(e.date) }), renderProps: i, generatorName: "dayCellContent", customGenerator: r.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      i.isDisabled ? void 0 : r.dayCellClassNames
    ), didMount: r.dayCellDidMount, willUnmount: r.dayCellWillUnmount }));
  }
}
function wi(t) {
  return !!(t.dayCellContent || pi("dayCellContent", t));
}
function Oa(t) {
  let { date: e, dateEnv: n, dateProfile: r, isMonthStart: i } = t, s = Kr(e, t.todayRange, null, r), l = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : xa) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, s), {
    isMonthStart: i,
    dayNumberText: l
  }), t.extraRenderProps);
}
class Na extends I {
  render() {
    let { props: e } = this, { seg: n } = e;
    return p(hn, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: Ha, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function Ha(t) {
  let { title: e } = t.event;
  return e && p("div", { className: "fc-event-title" }, t.event.title);
}
function Pa(t) {
  return p("div", { className: `fc-${t}` });
}
const Ba = (t) => p(ae.Consumer, null, (e) => {
  let { dateEnv: n, options: r } = e, { date: i } = t, s = r.weekNumberFormat || t.defaultFormat, l = n.computeWeekNumber(i), o = n.format(i, s);
  return p(
    W,
    Object.assign({}, t, { renderProps: { num: l, text: o, date: i }, generatorName: "weekNumberContent", customGenerator: r.weekNumberContent, defaultGenerator: La, classNameGenerator: r.weekNumberClassNames, didMount: r.weekNumberDidMount, willUnmount: r.weekNumberWillUnmount })
  );
});
function La(t) {
  return t.text;
}
const Tt = 10;
class ja extends I {
  constructor() {
    super(...arguments), this.state = {
      titleId: lt()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && z(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = Ur(e);
      this.rootEl.contains(n) || this.handleCloseClick();
    }, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && this.handleCloseClick();
    }, this.handleCloseClick = () => {
      let { onClose: e } = this.props;
      e && e();
    };
  }
  render() {
    let { theme: e, options: n } = this.context, { props: r, state: i } = this, s = [
      "fc-popover",
      e.getClass("popover")
    ].concat(r.extraClassNames || []);
    return hs(p(
      "div",
      Object.assign({}, r.extraAttrs, { id: r.id, className: s.join(" "), "aria-labelledby": i.titleId, ref: this.handleRootEl }),
      p(
        "div",
        { className: "fc-popover-header " + e.getClass("popoverHeader") },
        p("span", { className: "fc-popover-title", id: i.titleId }, r.title),
        p("span", { className: "fc-popover-close " + e.getIconClass("close"), title: n.closeHint, onClick: this.handleCloseClick })
      ),
      p("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, r.children)
    ), r.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: r } = this.props, { rootEl: i } = this, s = so(n);
    if (s) {
      let l = i.getBoundingClientRect(), o = r ? H(n, ".fc-scrollgrid").getBoundingClientRect().top : s.top, a = e ? s.right - l.width : s.left;
      o = Math.max(o, Tt), a = Math.min(a, document.documentElement.clientWidth - Tt - l.width), a = Math.max(a, Tt);
      let d = i.offsetParent.getBoundingClientRect();
      Ae(i, {
        top: o - d.top,
        left: a - d.left
      });
    }
  }
}
class Ua extends de {
  constructor() {
    super(...arguments), this.handleRootEl = (e) => {
      this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
        el: e,
        useEventCenter: !1
      }) : this.context.unregisterInteractiveComponent(this);
    };
  }
  render() {
    let { options: e, dateEnv: n } = this.context, { props: r } = this, { startDate: i, todayRange: s, dateProfile: l } = r, o = n.format(i, e.dayPopoverFormat);
    return p(_i, { elRef: this.handleRootEl, date: i, dateProfile: l, todayRange: s }, (a, d, c) => p(
      ja,
      { elRef: c.ref, id: r.id, title: o, extraClassNames: ["fc-more-popover"].concat(c.className || []), extraAttrs: c, parentEl: r.parentEl, alignmentEl: r.alignmentEl, alignGridTop: r.alignGridTop, onClose: r.onClose },
      wi(e) && p(a, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
      r.children
    ));
  }
  queryHit(e, n, r, i) {
    let { rootEl: s, props: l } = this;
    return e >= 0 && e < r && n >= 0 && n < i ? {
      dateProfile: l.dateProfile,
      dateSpan: Object.assign({ allDay: !l.forceTimed, range: {
        start: l.startDate,
        end: l.endDate
      } }, l.extraDateSpan),
      dayEl: s,
      rect: {
        left: 0,
        top: 0,
        right: r,
        bottom: i
      },
      layer: 1
      // important when comparing with hits from other components
    } : null;
  }
}
class Fa extends I {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: lt()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && z(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: r } = this, { moreLinkClick: i } = r.options, s = or(n).start;
      function l(o) {
        let { def: a, instance: d, range: c } = o.eventRange;
        return {
          event: new T(r, a, d),
          start: r.dateEnv.toDate(c.start),
          end: r.dateEnv.toDate(c.end),
          isStart: o.isStart,
          isEnd: o.isEnd
        };
      }
      typeof i == "function" && (i = i({
        date: s,
        allDay: !!n.allDayDate,
        allSegs: n.allSegs.map(l),
        hiddenSegs: n.hiddenSegs.map(l),
        jsEvent: e,
        view: r.viewApi
      })), !i || i === "popover" ? this.setState({ isPopoverOpen: !0 }) : typeof i == "string" && r.calendarApi.zoomTo(s, i);
    }, this.handlePopoverClose = () => {
      this.setState({ isPopoverOpen: !1 });
    };
  }
  render() {
    let { props: e, state: n } = this;
    return p(ae.Consumer, null, (r) => {
      let { viewApi: i, options: s, calendarApi: l } = r, { moreLinkText: o } = s, { moreCnt: a } = e, d = or(e), c = typeof o == "function" ? o.call(l, a) : `+${a} ${o}`, h = Se(s.moreLinkHint, [a], c), f = {
        num: a,
        shortText: `+${a}`,
        text: c,
        view: i
      };
      return p(
        M,
        null,
        !!e.moreCnt && p(W, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Vr(this.handleClick)), { title: h, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: f, generatorName: "moreLinkContent", customGenerator: s.moreLinkContent, defaultGenerator: e.defaultGenerator || Va, classNameGenerator: s.moreLinkClassNames, didMount: s.moreLinkDidMount, willUnmount: s.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && p(Ua, { id: n.popoverId, startDate: d.start, endDate: d.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
      );
    });
  }
  componentDidMount() {
    this.updateParentEl();
  }
  componentDidUpdate() {
    this.updateParentEl();
  }
  updateParentEl() {
    this.linkEl && (this.parentEl = H(this.linkEl, ".fc-view-harness"));
  }
}
function Va(t) {
  return t.text;
}
function or(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: P(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: za(e),
    end: Ga(e)
  };
}
function za(t) {
  return t.reduce(Wa).eventRange.range.start;
}
function Wa(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function Ga(t) {
  return t.reduce(Qa).eventRange.range.end;
}
function Qa(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
class ar extends I {
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = { view: n.viewApi };
    return p(W, Object.assign({}, e, { elTag: e.elTag || "div", elClasses: [
      ...Ri(e.viewSpec),
      ...e.elClasses || []
    ], renderProps: i, classNameGenerator: r.viewClassNames, generatorName: void 0, didMount: r.viewDidMount, willUnmount: r.viewWillUnmount }), () => e.children);
  }
}
function Ri(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
const Ya = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: g,
  eventDataTransform: g,
  // for any network-related sources
  success: g,
  failure: g
};
function Ti(t, e, n = Ii(e)) {
  let r;
  if (typeof t == "string" ? r = { url: t } : typeof t == "function" || Array.isArray(t) ? r = { events: t } : typeof t == "object" && t && (r = t), r) {
    let { refined: i, extra: s } = $t(r, n), l = qa(i, e);
    if (l)
      return {
        _raw: t,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || "",
        sourceId: le(),
        sourceDefId: l.sourceDefId,
        meta: l.meta,
        ui: tt(i, e),
        extendedProps: s
      };
  }
  return null;
}
function Ii(t) {
  return Object.assign(Object.assign(Object.assign({}, et), Ya), t.pluginHooks.eventSourceRefiners);
}
function qa(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    let s = n[r].parseMeta(t);
    if (s)
      return { sourceDefId: r, meta: s };
  }
  return null;
}
class Za {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }
  dispatch(e) {
    this.currentDataManager.dispatch(e);
  }
  get view() {
    return this.getCurrentData().viewApi;
  }
  batchRendering(e) {
    e();
  }
  updateSize() {
    this.trigger("_resize", !0);
  }
  // Options
  // -----------------------------------------------------------------------------------------------------------------
  setOption(e, n) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: e,
      rawOptionValue: n
    });
  }
  getOption(e) {
    return this.currentDataManager.currentCalendarOptionsInput[e];
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }
  // Trigger
  // -----------------------------------------------------------------------------------------------------------------
  on(e, n) {
    let { currentDataManager: r } = this;
    r.currentCalendarOptionsRefiners[e] ? r.emitter.on(e, n) : console.warn(`Unknown listener name '${e}'`);
  }
  off(e, n) {
    this.currentDataManager.emitter.off(e, n);
  }
  // not meant for public use
  trigger(e, ...n) {
    this.currentDataManager.emitter.trigger(e, ...n);
  }
  // View
  // -----------------------------------------------------------------------------------------------------------------
  changeView(e, n) {
    this.batchRendering(() => {
      if (this.unselect(), n)
        if (n.start && n.end)
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          }), this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: n
          });
        else {
          let { dateEnv: r } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e,
            dateMarker: r.createMarker(n)
          });
        }
      else
        this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        });
    });
  }
  // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change
  zoomTo(e, n) {
    let r = this.getCurrentData(), i;
    n = n || "day", i = r.viewSpecs[n] || this.getUnitViewSpec(n), this.unselect(), i ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: i.type,
      dateMarker: e
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e
    });
  }
  // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.
  getUnitViewSpec(e) {
    let { viewSpecs: n, toolbarConfig: r } = this.getCurrentData(), i = [].concat(r.header ? r.header.viewsWithButtons : [], r.footer ? r.footer.viewsWithButtons : []), s, l;
    for (let o in n)
      i.push(o);
    for (s = 0; s < i.length; s += 1)
      if (l = n[i[s]], l && l.singleUnit === e)
        return l;
    return null;
  }
  // Current Date
  // -----------------------------------------------------------------------------------------------------------------
  prev() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }
  next() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }
  prevYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, -1)
    });
  }
  nextYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, 1)
    });
  }
  today() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: ke(e.calendarOptions.now, e.dateEnv)
    });
  }
  gotoDate(e) {
    let n = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.createMarker(e)
    });
  }
  incrementDate(e) {
    let n = this.getCurrentData(), r = _(e);
    r && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.add(n.currentDate, r)
    }));
  }
  getDate() {
    let e = this.getCurrentData();
    return e.dateEnv.toDate(e.currentDate);
  }
  // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------
  formatDate(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.format(r.createMarker(e), N(n));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(e, n, r) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(e), i.createMarker(n), N(r), r);
  }
  formatIso(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.formatIso(r.createMarker(e), { omitTime: n });
  }
  // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  select(e, n) {
    let r;
    n == null ? e.start != null ? r = e : r = {
      start: e,
      end: null
    } : r = {
      start: e,
      end: n
    };
    let i = this.getCurrentData(), s = Mo(r, i.dateEnv, _({ days: 1 }));
    s && (this.dispatch({ type: "SELECT_DATES", selection: s }), ii(s, null, i));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), yo(e, n));
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(e, n) {
    if (e instanceof T) {
      let l = e._def, o = e._instance;
      return this.getCurrentData().eventStore.defs[l.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: Ht({ def: l, instance: o })
        // TODO: better util for two args?
      }), this.triggerEventAdd(e)), e;
    }
    let r = this.getCurrentData(), i;
    if (n instanceof fe)
      i = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([i] = Yt(r.eventSources));
    else if (n != null) {
      let l = this.getEventSourceById(n);
      if (!l)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      i = l.internalEventSource;
    }
    let s = Yr(e, i, r, !1);
    if (s) {
      let l = new T(r, s.def, s.def.recurringDef ? null : s.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: Ht(s)
      }), this.triggerEventAdd(l), l;
    }
    return null;
  }
  triggerEventAdd(e) {
    let { emitter: n } = this.getCurrentData();
    n.trigger("eventAdd", {
      event: e,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: si(e)
        });
      }
    });
  }
  // TODO: optimize
  getEventById(e) {
    let n = this.getCurrentData(), { defs: r, instances: i } = n.eventStore;
    e = String(e);
    for (let s in r) {
      let l = r[s];
      if (l.publicId === e) {
        if (l.recurringDef)
          return new T(n, l, null);
        for (let o in i) {
          let a = i[o];
          if (a.defId === l.defId)
            return new T(n, l, a);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return re(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, r = [];
    for (let i in n)
      r.push(new fe(e, n[i]));
    return r;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), r = n.eventSources;
    e = String(e);
    for (let i in r)
      if (r[i].publicId === e)
        return new fe(n, r[i]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof fe)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let r = Ti(e, n);
    return r ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [r] }), new fe(n, r)) : null;
  }
  removeAllEventSources() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }
  refetchEvents() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }
  // Scroll
  // -----------------------------------------------------------------------------------------------------------------
  scrollToTime(e) {
    let n = _(e);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
const $a = [], Mi = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
    // 4 days need to be within the year to be considered the first week
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, ki = Object.assign(Object.assign({}, Mi), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today(t, e) {
      return e === "day" ? "Today" : `This ${t}`;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint(t) {
    return `Show ${t} more event${t === 1 ? "" : "s"}`;
  }
});
function Xa(t) {
  let e = t.length > 0 ? t[0].code : "en", n = $a.concat(t), r = {
    en: ki
  };
  for (let i of n)
    r[i.code] = i;
  return {
    map: r,
    defaultCode: e
  };
}
function xi(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? Oi(t.code, [t.code], t) : Ja(t, e);
}
function Ja(t, e) {
  let n = [].concat(t || []), r = Ka(n, e) || ki;
  return Oi(t, n, r);
}
function Ka(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let r = t[n].toLocaleLowerCase().split("-");
    for (let i = r.length; i > 0; i -= 1) {
      let s = r.slice(0, i).join("-");
      if (e[s])
        return e[s];
    }
  }
  return null;
}
function Oi(t, e, n) {
  let r = Qt([Mi, n], ["buttonText"]);
  delete r.code;
  let { week: i } = r;
  return delete r.week, {
    codeArg: t,
    codes: e,
    week: i,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: r
  };
}
function X(t) {
  return {
    id: le(),
    name: t.name,
    premiumReleaseDate: t.premiumReleaseDate ? new Date(t.premiumReleaseDate) : void 0,
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function ec(t, e) {
  let n = {}, r = {
    premiumReleaseDate: void 0,
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function i(s) {
    for (let l of s) {
      const o = l.name, a = n[o];
      a === void 0 ? (n[o] = l.id, i(l.deps), r = nc(r, l)) : a !== l.id && console.warn(`Duplicate plugin '${o}'`);
    }
  }
  return t && i(t), i(e), r;
}
function tc() {
  let t = [], e = [], n;
  return (r, i) => ((!n || !Z(r, t) || !Z(i, e)) && (n = ec(r, i)), t = r, e = i, n);
}
function nc(t, e) {
  return {
    premiumReleaseDate: rc(t.premiumReleaseDate, e.premiumReleaseDate),
    reducers: t.reducers.concat(e.reducers),
    isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: t.contextInit.concat(e.contextInit),
    eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), e.eventSourceRefiners),
    isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: Object.assign(Object.assign({}, t.views), e.views),
    viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || t.isPropsValid,
    externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: t.componentInteractions.concat(e.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, t.themeClasses), e.themeClasses),
    eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || t.cmdFormatter,
    recurringTypes: t.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
    initialView: t.initialView || e.initialView,
    elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), e.optionChangeHandlers),
    scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
    listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), e.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), e.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), e.propSetHandlers)
  };
}
function rc(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class J extends Me {
}
J.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
J.prototype.baseIconClass = "fc-icon";
J.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
J.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
J.prototype.iconOverrideOption = "buttonIcons";
J.prototype.iconOverrideCustomButtonOption = "icon";
J.prototype.iconOverridePrefix = "fc-icon-";
function ic(t, e) {
  let n = {}, r;
  for (r in t)
    jt(r, n, t, e);
  for (r in e)
    jt(r, n, t, e);
  return n;
}
function jt(t, e, n, r) {
  if (e[t])
    return e[t];
  let i = sc(t, e, n, r);
  return i && (e[t] = i), i;
}
function sc(t, e, n, r) {
  let i = n[t], s = r[t], l = (c) => i && i[c] !== null ? i[c] : s && s[c] !== null ? s[c] : null, o = l("component"), a = l("superType"), d = null;
  if (a) {
    if (a === t)
      throw new Error("Can't have a custom view type that references itself");
    d = jt(a, e, n, r);
  }
  return !o && d && (o = d.component), o ? {
    type: t,
    component: o,
    defaults: Object.assign(Object.assign({}, d ? d.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, d ? d.overrides : {}), s ? s.rawOptions : {})
  } : null;
}
function cr(t) {
  return oe(t, lc);
}
function lc(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content ? n = dr(e) : n && !(n.prototype instanceof I) && (n = dr(Object.assign(Object.assign({}, e), { content: n }))), {
    superType: e.type,
    component: n,
    rawOptions: e
    // includes type and component too :(
  };
}
function dr(t) {
  return (e) => p(ae.Consumer, null, (n) => p(W, { elTag: "div", elClasses: Ri(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function oc(t, e, n, r) {
  let i = cr(t), s = cr(e.views), l = ic(i, s);
  return oe(l, (o) => ac(o, s, e, n, r));
}
function ac(t, e, n, r, i) {
  let s = t.overrides.duration || t.defaults.duration || r.duration || n.duration, l = null, o = "", a = "", d = {};
  if (s && (l = cc(s), l)) {
    let f = Ot(l);
    o = f.unit, f.value === 1 && (a = o, d = e[o] ? e[o].rawOptions : {});
  }
  let c = (f) => {
    let u = f.buttonText || {}, m = t.defaults.buttonTextKey;
    return m != null && u[m] != null ? u[m] : u[t.type] != null ? u[t.type] : u[a] != null ? u[a] : null;
  }, h = (f) => {
    let u = f.buttonHints || {}, m = t.defaults.buttonTextKey;
    return m != null && u[m] != null ? u[m] : u[t.type] != null ? u[t.type] : u[a] != null ? u[a] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: l,
    durationUnit: o,
    singleUnit: a,
    optionDefaults: t.defaults,
    optionOverrides: Object.assign(Object.assign({}, d), t.overrides),
    buttonTextOverride: c(r) || c(n) || // constructor-specified buttonText lookup hash takes precedence
    t.overrides.buttonText,
    buttonTextDefault: c(i) || t.defaults.buttonText || c(De) || t.type,
    // not DRY
    buttonTitleOverride: h(r) || h(n) || t.overrides.buttonHint,
    buttonTitleDefault: h(i) || t.defaults.buttonHint || h(De)
    // will eventually fall back to buttonText
  };
}
let ur = {};
function cc(t) {
  let e = JSON.stringify(t), n = ur[e];
  return n === void 0 && (n = _(t), ur[e] = n), n;
}
function dc(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function uc(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function fc(t, e, n, r) {
  let i;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return r.build(e.dateMarker || n);
    case "CHANGE_DATE":
      return r.build(e.dateMarker);
    case "PREV":
      if (i = r.buildPrev(t, n), i.isValid)
        return i;
      break;
    case "NEXT":
      if (i = r.buildNext(t, n), i.isValid)
        return i;
      break;
  }
  return t;
}
function hc(t, e, n) {
  let r = e ? e.activeRange : null;
  return Hi({}, Ec(t, n), r, n);
}
function gc(t, e, n, r) {
  let i = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return Hi(t, e.sources, i, r);
    case "REMOVE_EVENT_SOURCE":
      return mc(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? Pi(t, i, r) : t;
    case "FETCH_EVENT_SOURCES":
      return gn(t, e.sourceIds ? (
        // why no type?
        Wr(e.sourceIds)
      ) : Bi(t, r), i, e.isRefetch || !1, r);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return yc(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function pc(t, e, n) {
  let r = e ? e.activeRange : null;
  return gn(t, Bi(t, n), r, !0, n);
}
function Ni(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function Hi(t, e, n, r) {
  let i = {};
  for (let s of e)
    i[s.sourceId] = s;
  return n && (i = Pi(i, n, r)), Object.assign(Object.assign({}, t), i);
}
function mc(t, e) {
  return ie(t, (n) => n.sourceId !== e);
}
function Pi(t, e, n) {
  return gn(t, ie(t, (r) => vc(r, e, n)), e, !1, n);
}
function vc(t, e, n) {
  return Li(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function gn(t, e, n, r, i) {
  let s = {};
  for (let l in t) {
    let o = t[l];
    e[l] ? s[l] = bc(o, n, r, i) : s[l] = o;
  }
  return s;
}
function bc(t, e, n, r) {
  let { options: i, calendarApi: s } = r, l = r.pluginHooks.eventSourceDefs[t.sourceDefId], o = le();
  return l.fetch({
    eventSource: t,
    range: e,
    isRefetch: n,
    context: r
  }, (a) => {
    let { rawEvents: d } = a;
    i.eventSourceSuccess && (d = i.eventSourceSuccess.call(s, d, a.response) || d), t.success && (d = t.success.call(s, d, a.response) || d), r.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: o,
      fetchRange: e,
      rawEvents: d
    });
  }, (a) => {
    let d = !1;
    i.eventSourceFailure && (i.eventSourceFailure.call(s, a), d = !0), t.failure && (t.failure(a), d = !0), d || console.warn(a.message, a), r.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: o,
      fetchRange: e,
      error: a
    });
  }), Object.assign(Object.assign({}, t), { isFetching: !0, latestFetchId: o });
}
function yc(t, e, n, r) {
  let i = t[e];
  return i && // not already removed
  n === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: r }) }) : t;
}
function Bi(t, e) {
  return ie(t, (n) => Li(n, e));
}
function Ec(t, e) {
  let n = Ii(e), r = [].concat(t.eventSources || []), i = [];
  t.initialEvents && r.unshift(t.initialEvents), t.events && r.unshift(t.events);
  for (let s of r) {
    let l = Ti(s, e, n);
    l && i.push(l);
  }
  return i;
}
function Li(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function Ac(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function Sc(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function Dc(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function Cc(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function _c(t, e, n, r, i) {
  let s = t.headerToolbar ? fr(t.headerToolbar, t, e, n, r, i) : null, l = t.footerToolbar ? fr(t.footerToolbar, t, e, n, r, i) : null;
  return { header: s, footer: l };
}
function fr(t, e, n, r, i, s) {
  let l = {}, o = [], a = !1;
  for (let d in t) {
    let c = t[d], h = wc(c, e, n, r, i, s);
    l[d] = h.widgets, o.push(...h.viewsWithButtons), a = a || h.hasTitle;
  }
  return { sectionWidgets: l, viewsWithButtons: o, hasTitle: a };
}
function wc(t, e, n, r, i, s) {
  let l = e.direction === "rtl", o = e.customButtons || {}, a = n.buttonText || {}, d = e.buttonText || {}, c = n.buttonHints || {}, h = e.buttonHints || {}, f = t ? t.split(" ") : [], u = [], m = !1;
  return { widgets: f.map((v) => v.split(",").map((y) => {
    if (y === "title")
      return m = !0, { buttonName: y };
    let E, S, D, k, O, x;
    if (E = o[y])
      D = (C) => {
        E.click && E.click.call(C.target, C, C.target);
      }, (k = r.getCustomButtonIconClass(E)) || (k = r.getIconClass(y, l)) || (O = E.text), x = E.hint || E.text;
    else if (S = i[y]) {
      u.push(y), D = () => {
        s.changeView(y);
      }, (O = S.buttonTextOverride) || (k = r.getIconClass(y, l)) || (O = S.buttonTextDefault);
      let C = S.buttonTextOverride || S.buttonTextDefault;
      x = Se(
        S.buttonTitleOverride || S.buttonTitleDefault || e.viewHint,
        [C, y],
        // view-name = buttonName
        C
      );
    } else if (s[y])
      if (D = () => {
        s[y]();
      }, (O = a[y]) || (k = r.getIconClass(y, l)) || (O = d[y]), y === "prevYear" || y === "nextYear") {
        let C = y === "prevYear" ? "prev" : "next";
        x = Se(c[C] || h[C], [
          d.year || "year",
          "year"
        ], d[y]);
      } else
        x = (C) => Se(c[y] || h[y], [
          d[C] || C,
          C
        ], d[y]);
    return { buttonName: y, buttonClick: D, buttonIcon: k, buttonText: O, buttonHint: x };
  })), viewsWithButtons: u, hasTitle: m };
}
class Rc {
  constructor(e, n, r) {
    this.type = e, this.getCurrentData = n, this.dateEnv = r;
  }
  get calendar() {
    return this.getCurrentData().calendarApi;
  }
  get title() {
    return this.getCurrentData().viewTitle;
  }
  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
  }
  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
  }
  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
  }
  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
  }
  getOption(e) {
    return this.getCurrentData().options[e];
  }
}
let Tc = {
  ignoreRange: !0,
  parseMeta(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
};
const Ic = X({
  name: "array-event-source",
  eventSourceDefs: [Tc]
});
let Mc = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: r } = t.context, i = t.eventSource.meta;
    lo(i.bind(null, ci(t.range, r)), (s) => e({ rawEvents: s }), n);
  }
};
const kc = X({
  name: "func-event-source",
  eventSourceDefs: [Mc]
}), xc = {
  method: String,
  extraParams: g,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let Oc = {
  parseMeta(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch(t, e, n) {
    const { meta: r } = t.eventSource, i = Hc(r, t.range, t.context);
    ma(r.method, r.url, i).then(([s, l]) => {
      e({ rawEvents: s, response: l });
    }, n);
  }
};
const Nc = X({
  name: "json-event-source",
  eventSourceRefiners: xc,
  eventSourceDefs: [Oc]
});
function Hc(t, e, n) {
  let { dateEnv: r, options: i } = n, s, l, o, a, d = {};
  return s = t.startParam, s == null && (s = i.startParam), l = t.endParam, l == null && (l = i.endParam), o = t.timeZoneParam, o == null && (o = i.timeZoneParam), typeof t.extraParams == "function" ? a = t.extraParams() : a = t.extraParams || {}, Object.assign(d, a), d[s] = r.formatIso(e.start), d[l] = r.formatIso(e.end), r.timeZone !== "local" && (d[o] = r.timeZone), d;
}
const Pc = {
  daysOfWeek: g,
  startTime: _,
  endTime: _,
  duration: _,
  startRecur: g,
  endRecur: g
};
let Bc = {
  parse(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      let n = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, r;
      return t.duration && (r = t.duration), !r && t.startTime && t.endTime && (r = Gs(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: r,
        typeData: n
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(t, e, n) {
    let r = ve(e, { start: t.startRecur, end: t.endRecur });
    return r ? jc(t.daysOfWeek, t.startTime, r, n) : [];
  }
};
const Lc = X({
  name: "simple-recurring-event",
  recurringTypes: [Bc],
  eventRefiners: Pc
});
function jc(t, e, n, r) {
  let i = t ? Wr(t) : null, s = R(n.start), l = n.end, o = [];
  for (; s < l; ) {
    let a;
    (!i || i[s.getUTCDay()]) && (e ? a = r.add(s, e) : a = s, o.push(a)), s = P(s, 1);
  }
  return o;
}
const Uc = X({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      hr([t], e);
    },
    eventSources: hr
  }
});
function hr(t, e) {
  let n = Yt(e.getCurrentData().eventSources);
  if (n.length === 1 && t.length === 1 && Array.isArray(n[0]._raw) && Array.isArray(t[0])) {
    e.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: n[0].sourceId,
      rawEvents: t[0]
    });
    return;
  }
  let r = [];
  for (let i of t) {
    let s = !1;
    for (let l = 0; l < n.length; l += 1)
      if (n[l]._raw === i) {
        n.splice(l, 1), s = !0;
        break;
      }
    s || r.push(i);
  }
  for (let i of n)
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: i.sourceId
    });
  for (let i of r)
    e.calendarApi.addEventSource(i);
}
function Fc(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, ci(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function Vc(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", re(t, e));
}
const zc = [
  Ic,
  kc,
  Nc,
  Lc,
  Uc,
  X({
    name: "misc",
    isLoadingFuncs: [
      (t) => Ni(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: Fc,
      eventStore: Vc
    }
  })
];
class Wc {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new fn(this.drain.bind(this));
  }
  request(e, n) {
    this.queue.push(e), this.delayedRunner.request(n);
  }
  pause(e) {
    this.delayedRunner.pause(e);
  }
  resume(e, n) {
    this.delayedRunner.resume(e, n);
  }
  drain() {
    let { queue: e } = this;
    for (; e.length; ) {
      let n = [], r;
      for (; r = e.shift(); )
        this.runTask(r), n.push(r);
      this.drained(n);
    }
  }
  runTask(e) {
    this.runTaskOption && this.runTaskOption(e);
  }
  drained(e) {
    this.drainedOption && this.drainedOption(e);
  }
}
function Gc(t, e, n) {
  let r;
  return /^(year|month)$/.test(t.currentRangeUnit) ? r = t.currentRange : r = t.activeRange, n.formatRange(r.start, r.end, N(e.titleFormat || Qc(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function Qc(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = Xe(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class Yc {
  constructor(e) {
    this.computeCurrentViewData = w(this._computeCurrentViewData), this.organizeRawLocales = w(Xa), this.buildLocale = w(xi), this.buildPluginHooks = tc(), this.buildDateEnv = w(qc), this.buildTheme = w(Zc), this.parseToolbars = w(_c), this.buildViewSpecs = w(oc), this.buildDateProfileGenerator = We($c), this.buildViewApi = w(Xc), this.buildViewUiProps = We(ed), this.buildEventUiBySource = w(Jc, F), this.buildEventUiBases = w(Kc), this.parseContextBusinessHours = We(td), this.buildTitle = w(Gc), this.emitter = new dt(), this.actionRunner = new Wc(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (f) => {
      this.actionRunner.request(f);
    }, this.props = e, this.actionRunner.pause();
    let n = {}, r = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), i = r.calendarOptions.initialView || r.pluginHooks.initialView, s = this.computeCurrentViewData(i, r, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(s.options);
    let l = bo(r.calendarOptions, r.dateEnv), o = s.dateProfileGenerator.build(l);
    q(o.activeRange, l) || (l = o.currentRange.start);
    let a = {
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    for (let f of r.pluginHooks.contextInit)
      f(a);
    let d = hc(r.calendarOptions, o, a), c = {
      dynamicOptionOverrides: n,
      currentViewType: i,
      currentDate: l,
      dateProfile: o,
      businessHours: this.parseContextBusinessHours(a),
      eventSources: d,
      eventUiBases: {},
      eventStore: j(),
      renderableEventStore: j(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(a).selectionConfig
    }, h = Object.assign(Object.assign({}, a), c);
    for (let f of r.pluginHooks.reducers)
      Object.assign(c, f(null, null, h));
    It(c, a) && this.emitter.trigger("loading", !0), this.state = c, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: r } = this;
    n === void 0 ? r.optionOverrides = e : (r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: r, emitter: i } = this, s = uc(r.dynamicOptionOverrides, e), l = this.computeOptionsData(n.optionOverrides, s, n.calendarApi), o = dc(r.currentViewType, e), a = this.computeCurrentViewData(o, l, n.optionOverrides, s);
    n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(a.options);
    let d = {
      dateEnv: l.dateEnv,
      options: l.calendarOptions,
      pluginHooks: l.pluginHooks,
      calendarApi: n.calendarApi,
      dispatch: this.dispatch,
      emitter: i,
      getCurrentData: this.getCurrentData
    }, { currentDate: c, dateProfile: h } = r;
    this.data && this.data.dateProfileGenerator !== a.dateProfileGenerator && (h = a.dateProfileGenerator.build(c)), c = vo(c, e), h = fc(h, e, c, a.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    e.type === "NEXT" || // "
    !q(h.currentRange, c)) && (c = h.currentRange.start);
    let f = gc(r.eventSources, e, h, d), u = ia(r.eventStore, e, f, h, d), b = Ni(f) && !a.options.progressiveEventRendering && r.renderableEventStore || u, { eventUiSingleBase: v, selectionConfig: y } = this.buildViewUiProps(d), E = this.buildEventUiBySource(f), S = this.buildEventUiBases(b.defs, v, E), D = {
      dynamicOptionOverrides: s,
      currentViewType: o,
      currentDate: c,
      dateProfile: h,
      eventSources: f,
      eventStore: u,
      renderableEventStore: b,
      selectionConfig: y,
      eventUiBases: S,
      businessHours: this.parseContextBusinessHours(d),
      dateSelection: Ac(r.dateSelection, e),
      eventSelection: Sc(r.eventSelection, e),
      eventDrag: Dc(r.eventDrag, e),
      eventResize: Cc(r.eventResize, e)
    }, k = Object.assign(Object.assign({}, d), D);
    for (let C of l.pluginHooks.reducers)
      Object.assign(D, C(r, e, k));
    let O = It(r, d), x = It(D, d);
    !O && x ? i.trigger("loading", !0) : O && !x && i.trigger("loading", !1), this.state = D, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, r = this.data, i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), s = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides), l = this.data = Object.assign(Object.assign(Object.assign({ viewTitle: this.buildTitle(n.dateProfile, s.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), s), n), o = i.pluginHooks.optionChangeHandlers, a = r && r.calendarOptions, d = i.calendarOptions;
    if (a && a !== d) {
      a.timeZone !== d.timeZone && (n.eventSources = l.eventSources = pc(l.eventSources, n.dateProfile, l), n.eventStore = l.eventStore = ir(l.eventStore, r.dateEnv, l.dateEnv), n.renderableEventStore = l.renderableEventStore = ir(l.renderableEventStore, r.dateEnv, l.dateEnv));
      for (let c in o)
        (this.optionsForHandling.indexOf(c) !== -1 || a[c] !== d[c]) && o[c](d[c], l);
    }
    this.optionsForHandling = [], e.onData && e.onData(l);
  }
  computeOptionsData(e, n, r) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: s, localeDefaults: l, availableLocaleData: o, extra: a } = this.processRawCalendarOptions(e, n);
    gr(a);
    let d = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, s, o, i.defaultRangeSeparator), c = this.buildViewSpecs(s.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, l), h = this.buildTheme(i, s), f = this.parseToolbars(i, this.stableOptionOverrides, h, c, r);
    return this.stableCalendarOptionsData = {
      calendarOptions: i,
      pluginHooks: s,
      dateEnv: d,
      viewSpecs: c,
      theme: h,
      toolbarConfig: f,
      localeDefaults: l,
      availableRawLocales: o.map
    };
  }
  // always called from behind a memoizer
  processRawCalendarOptions(e, n) {
    let { locales: r, locale: i } = St([
      De,
      e,
      n
    ]), s = this.organizeRawLocales(r), l = s.map, o = this.buildLocale(i || s.defaultCode, l).options, a = this.buildPluginHooks(e.plugins || [], zc), d = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Gn), Qn), Yn), a.listenerRefiners), a.optionRefiners), c = {}, h = St([
      De,
      o,
      e,
      n
    ]), f = {}, u = this.currentCalendarOptionsInput, m = this.currentCalendarOptionsRefined, b = !1;
    for (let v in h)
      this.optionsForRefining.indexOf(v) === -1 && (h[v] === u[v] || K[v] && v in u && K[v](u[v], h[v])) ? f[v] = m[v] : d[v] ? (f[v] = d[v](h[v]), b = !0) : c[v] = u[v];
    return b && (this.currentCalendarOptionsInput = h, this.currentCalendarOptionsRefined = f, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: a,
      availableLocaleData: s,
      localeDefaults: o,
      extra: c
    };
  }
  _computeCurrentViewData(e, n, r, i) {
    let s = n.viewSpecs[e];
    if (!s)
      throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
    let { refinedOptions: l, extra: o } = this.processRawViewOptions(s, n.pluginHooks, n.localeDefaults, r, i);
    gr(o);
    let a = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: s.optionDefaults.dateProfileGeneratorClass,
      duration: s.duration,
      durationUnit: s.durationUnit,
      usesMinMaxTime: s.optionDefaults.usesMinMaxTime,
      dateEnv: n.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: l.slotMinTime,
      slotMaxTime: l.slotMaxTime,
      showNonCurrentDates: l.showNonCurrentDates,
      dayCount: l.dayCount,
      dateAlignment: l.dateAlignment,
      dateIncrement: l.dateIncrement,
      hiddenDays: l.hiddenDays,
      weekends: l.weekends,
      nowInput: l.now,
      validRangeInput: l.validRange,
      visibleRangeInput: l.visibleRange,
      fixedWeekCount: l.fixedWeekCount
    }), d = this.buildViewApi(e, this.getCurrentData, n.dateEnv);
    return { viewSpec: s, options: l, dateProfileGenerator: a, viewApi: d };
  }
  processRawViewOptions(e, n, r, i, s) {
    let l = St([
      De,
      e.optionDefaults,
      r,
      i,
      e.optionOverrides,
      s
    ]), o = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Gn), Qn), Yn), Rl), n.listenerRefiners), n.optionRefiners), a = {}, d = this.currentViewOptionsInput, c = this.currentViewOptionsRefined, h = !1, f = {};
    for (let u in l)
      l[u] === d[u] || K[u] && K[u](l[u], d[u]) ? a[u] = c[u] : (l[u] === this.currentCalendarOptionsInput[u] || K[u] && K[u](l[u], this.currentCalendarOptionsInput[u]) ? u in this.currentCalendarOptionsRefined && (a[u] = this.currentCalendarOptionsRefined[u]) : o[u] ? a[u] = o[u](l[u]) : f[u] = l[u], h = !0);
    return h && (this.currentViewOptionsInput = l, this.currentViewOptionsRefined = a), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: f
    };
  }
}
function qc(t, e, n, r, i, s, l, o) {
  let a = xi(e || l.defaultCode, l.map);
  return new Fo({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: s.namedTimeZonedImpl,
    locale: a,
    weekNumberCalculation: n,
    firstDay: r,
    weekText: i,
    cmdFormatter: s.cmdFormatter,
    defaultSeparator: o
  });
}
function Zc(t, e) {
  let n = e.themeClasses[t.themeSystem] || J;
  return new n(t);
}
function $c(t) {
  let e = t.dateProfileGeneratorClass || ri;
  return new e(t);
}
function Xc(t, e, n) {
  return new Rc(t, e, n);
}
function Jc(t) {
  return oe(t, (e) => e.ui);
}
function Kc(t, e, n) {
  let r = { "": e };
  for (let i in t) {
    let s = t[i];
    s.sourceId && n[s.sourceId] && (r[i] = n[s.sourceId]);
  }
  return r;
}
function ed(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: tt({
      display: e.eventDisplay,
      editable: e.editable,
      startEditable: e.eventStartEditable,
      durationEditable: e.eventDurationEditable,
      constraint: e.eventConstraint,
      overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
      allow: e.eventAllow,
      backgroundColor: e.eventBackgroundColor,
      borderColor: e.eventBorderColor,
      textColor: e.eventTextColor,
      color: e.eventColor
      // classNames: options.eventClassNames // render hook will handle this
    }, t),
    selectionConfig: tt({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function It(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function td(t) {
  return Ul(t.options.businessHours, t);
}
function gr(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'` + (e ? ` for view '${e}'` : ""));
}
class nd extends I {
  render() {
    let e = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
    return p("div", { className: "fc-toolbar-chunk" }, ...e);
  }
  renderWidgetGroup(e) {
    let { props: n } = this, { theme: r } = this.context, i = [], s = !0;
    for (let l of e) {
      let { buttonName: o, buttonClick: a, buttonText: d, buttonIcon: c, buttonHint: h } = l;
      if (o === "title")
        s = !1, i.push(p("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        let f = o === n.activeButton, u = !n.isTodayEnabled && o === "today" || !n.isPrevEnabled && o === "prev" || !n.isNextEnabled && o === "next", m = [`fc-${o}-button`, r.getClass("button")];
        f && m.push(r.getClass("buttonActive")), i.push(p("button", { type: "button", title: typeof h == "function" ? h(n.navUnit) : h, disabled: u, "aria-pressed": f, className: m.join(" "), onClick: a }, d || (c ? p("span", { className: c }) : "")));
      }
    }
    if (i.length > 1) {
      let l = s && r.getClass("buttonGroup") || "";
      return p("div", { className: l }, ...i);
    }
    return i[0];
  }
}
class pr extends I {
  render() {
    let { model: e, extraClassName: n } = this.props, r = !1, i, s, l = e.sectionWidgets, o = l.center;
    return l.left ? (r = !0, i = l.left) : i = l.start, l.right ? (r = !0, s = l.right) : s = l.end, p(
      "div",
      { className: [
        n || "",
        "fc-toolbar",
        r ? "fc-toolbar-ltr" : ""
      ].join(" ") },
      this.renderSection("start", i || []),
      this.renderSection("center", o || []),
      this.renderSection("end", s || [])
    );
  }
  renderSection(e, n) {
    let { props: r } = this;
    return p(nd, { key: e, widgetGroups: n, title: r.title, navUnit: r.navUnit, activeButton: r.activeButton, isTodayEnabled: r.isTodayEnabled, isPrevEnabled: r.isPrevEnabled, isNextEnabled: r.isNextEnabled, titleId: r.titleId });
  }
}
class rd extends I {
  constructor() {
    super(...arguments), this.state = {
      availableWidth: null
    }, this.handleEl = (e) => {
      this.el = e, z(this.props.elRef, e), this.updateAvailableWidth();
    }, this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }
  render() {
    let { props: e, state: n } = this, { aspectRatio: r } = e, i = [
      "fc-view-harness",
      r || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"
      // let the view do the height
    ], s = "", l = "";
    return r ? n.availableWidth !== null ? s = n.availableWidth / r : l = `${1 / r * 100}%` : s = e.height || "", p("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: i.join(" "), style: { height: s, paddingBottom: l } }, e.children);
  }
  componentDidMount() {
    this.context.addResizeHandler(this.handleResize);
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  updateAvailableWidth() {
    this.el && // needed. but why?
    this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }
}
class id extends Ee {
  constructor(e) {
    super(e), this.handleSegClick = (n, r) => {
      let { component: i } = this, { context: s } = i, l = be(r);
      if (l && // might be the <div> surrounding the more link
      i.isValidSegDownEl(n.target)) {
        let o = H(n.target, ".fc-event-forced-url"), a = o ? o.querySelector("a[href]").href : "";
        s.emitter.trigger("eventClick", {
          el: r,
          event: new T(i.context, l.eventRange.def, l.eventRange.instance),
          jsEvent: n,
          view: s.viewApi
        }), a && !n.defaultPrevented && (window.location.href = a);
      }
    }, this.destroy = Fr(
      e.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
}
class sd extends Ee {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, r) => {
      be(r) && (this.currentSegEl = r, this.triggerEvent("eventMouseEnter", n, r));
    }, this.handleSegLeave = (n, r) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, r));
    }, this.removeHoverListeners = Ms(
      e.el,
      ".fc-event",
      // on both fg and bg events
      this.handleSegEnter,
      this.handleSegLeave
    );
  }
  destroy() {
    this.removeHoverListeners();
  }
  triggerEvent(e, n, r) {
    let { component: i } = this, { context: s } = i, l = be(r);
    (!n || i.isValidSegDownEl(n.target)) && s.emitter.trigger(e, {
      el: r,
      event: new T(s, l.eventRange.def, l.eventRange.instance),
      jsEvent: n,
      view: s.viewApi
    });
  }
}
class ld extends ce {
  constructor() {
    super(...arguments), this.buildViewContext = w(go), this.buildViewPropTransformers = w(ad), this.buildToolbarProps = w(od), this.headerRef = V(), this.footerRef = V(), this.interactionsStore = {}, this.state = {
      viewLabelId: lt()
    }, this.registerInteractiveComponent = (e, n) => {
      let r = zo(e, n), l = [
        id,
        sd
      ].concat(this.props.pluginHooks.componentInteractions).map((o) => new o(r));
      this.interactionsStore[e.uid] = l, Lt[e.uid] = r;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let r of n)
          r.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete Lt[e.uid];
    }, this.resizeRunner = new fn(() => {
      this.props.emitter.trigger("_resize", !0), this.props.emitter.trigger("windowResize", { view: this.props.viewApi });
    }), this.handleWindowResize = (e) => {
      let { options: n } = this.props;
      n.handleWindowResize && e.target === window && this.resizeRunner.request(n.windowResizeDelay);
    };
  }
  /*
  renders INSIDE of an outer div
  */
  render() {
    let { props: e } = this, { toolbarConfig: n, options: r } = e, i = this.buildToolbarProps(
      e.viewSpec,
      e.dateProfile,
      e.dateProfileGenerator,
      e.currentDate,
      ke(e.options.now, e.dateEnv),
      // TODO: use NowTimer????
      e.viewTitle
    ), s = !1, l = "", o;
    e.isHeightAuto || e.forPrint ? l = "" : r.height != null ? s = !0 : r.contentHeight != null ? l = r.contentHeight : o = Math.max(r.aspectRatio, 0.5);
    let a = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), d = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
    return p(
      ae.Provider,
      { value: a },
      n.header && p(pr, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: d }, i)),
      p(
        rd,
        { liquid: s, height: l, aspectRatio: o, labeledById: d },
        this.renderView(e),
        this.buildAppendContent()
      ),
      n.footer && p(pr, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, i))
    );
  }
  componentDidMount() {
    let { props: e } = this;
    this.calendarInteractions = e.pluginHooks.calendarInteractions.map((r) => new r(e)), window.addEventListener("resize", this.handleWindowResize);
    let { propSetHandlers: n } = e.pluginHooks;
    for (let r in n)
      n[r](e[r], e);
  }
  componentDidUpdate(e) {
    let { props: n } = this, { propSetHandlers: r } = n.pluginHooks;
    for (let i in r)
      n[i] !== e[i] && r[i](n[i], n);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (let e of this.calendarInteractions)
      e.destroy();
    this.props.emitter.trigger("_unmount");
  }
  buildAppendContent() {
    let { props: e } = this, n = e.pluginHooks.viewContainerAppends.map((r) => r(e));
    return p(M, {}, ...n);
  }
  renderView(e) {
    let { pluginHooks: n } = e, { viewSpec: r } = e, i = {
      dateProfile: e.dateProfile,
      businessHours: e.businessHours,
      eventStore: e.renderableEventStore,
      eventUiBases: e.eventUiBases,
      dateSelection: e.dateSelection,
      eventSelection: e.eventSelection,
      eventDrag: e.eventDrag,
      eventResize: e.eventResize,
      isHeightAuto: e.isHeightAuto,
      forPrint: e.forPrint
    }, s = this.buildViewPropTransformers(n.viewPropsTransformers);
    for (let o of s)
      Object.assign(i, o.transform(i, e));
    let l = r.component;
    return p(l, Object.assign({}, i));
  }
}
function od(t, e, n, r, i, s) {
  let l = n.build(i, void 0, !1), o = n.buildPrev(e, r, !1), a = n.buildNext(e, r, !1);
  return {
    title: s,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: l.isValid && !q(e.currentRange, i),
    isPrevEnabled: o.isValid,
    isNextEnabled: a.isValid
  };
}
function ad(t) {
  return t.map((e) => new e());
}
class cd extends Za {
  constructor(e, n = {}) {
    super(), this.isRendering = !1, this.isRendered = !1, this.currentClassNames = [], this.customContentRenderId = 0, this.handleAction = (r) => {
      switch (r.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          this.renderRunner.tryDrain();
      }
    }, this.handleData = (r) => {
      this.currentData = r, this.renderRunner.request(r.calendarOptions.rerenderDelay);
    }, this.handleRenderRequest = () => {
      if (this.isRendering) {
        this.isRendered = !0;
        let { currentData: r } = this;
        $n(() => {
          Re(p(Go, { options: r.calendarOptions, theme: r.theme, emitter: r.emitter }, (i, s, l, o) => (this.setClassNames(i), this.setHeight(s), p(
            vi.Provider,
            { value: this.customContentRenderId },
            p(ld, Object.assign({ isHeightAuto: l, forPrint: o }, r))
          ))), this.el);
        });
      } else
        this.isRendered && (this.isRendered = !1, Re(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, As(e), this.el = e, this.renderRunner = new fn(this.handleRenderRequest), new Yc({
      optionOverrides: n,
      calendarApi: this,
      onAction: this.handleAction,
      onData: this.handleData
    });
  }
  render() {
    let e = this.isRendering;
    e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize();
  }
  destroy() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }
  updateSize() {
    $n(() => {
      super.updateSize();
    });
  }
  batchRendering(e) {
    this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
  }
  pauseRendering() {
    this.renderRunner.pause("pauseRendering");
  }
  resumeRendering() {
    this.renderRunner.resume("pauseRendering", !0);
  }
  resetOptions(e, n) {
    this.currentDataManager.resetOptions(e, n);
  }
  setClassNames(e) {
    if (!Z(e, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let r of this.currentClassNames)
        n.remove(r);
      for (let r of e)
        n.add(r);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    jr(this.el, "height", e);
  }
}
var dd = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
Pr(dd);
function Ue(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.row].push(r);
  return n;
}
function Fe(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.firstCol].push(r);
  return n;
}
function mr(t, e) {
  let n = [];
  if (t) {
    for (let r = 0; r < e; r += 1)
      n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let r of t.segs)
      n[r.row].segs.push(r);
  } else
    for (let r = 0; r < e; r += 1)
      n[r] = null;
  return n;
}
const ji = N({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function Ui(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
class Fi extends I {
  render() {
    let { props: e } = this;
    return p(Ma, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: ji, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class Vi extends I {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, s = r.eventTimeFormat || ji, l = oi(i, s, n, !0, e.defaultDisplayEventEnd);
    return p(hn, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: ai(e.seg, n), defaultGenerator: ud, timeText: l, isResizing: !1, isDateSelecting: !1 }));
  }
}
function ud(t) {
  return p(
    M,
    null,
    p("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && p("div", { className: "fc-event-time" }, t.timeText),
    p("div", { className: "fc-event-title" }, t.event.title || p(M, null, " "))
  );
}
class fd extends I {
  constructor() {
    super(...arguments), this.compileSegs = w(hd);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: r } = this.compileSegs(e.singlePlacements);
    return p(Fa, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: r, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return p(M, null, n.map((s) => {
        let l = s.eventRange.instance.instanceId;
        return p("div", { className: "fc-daygrid-event-harness", key: l, style: {
          visibility: i[l] ? "hidden" : ""
        } }, Ui(s) ? p(Vi, Object.assign({ seg: s, isDragging: !1, isSelected: l === e.eventSelection, defaultDisplayEventEnd: !1 }, Ce(s, e.todayRange))) : p(Fi, Object.assign({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: l === e.eventSelection, defaultDisplayEventEnd: !1 }, Ce(s, e.todayRange))));
      }));
    } });
  }
}
function hd(t) {
  let e = [], n = [];
  for (let r of t)
    e.push(r.seg), r.isVisible || n.push(r.seg);
  return { allSegs: e, invisibleSegs: n };
}
const gd = N({ week: "narrow" });
class pd extends de {
  constructor() {
    super(...arguments), this.rootElRef = V(), this.state = {
      dayNumberId: lt()
    }, this.handleRootEl = (e) => {
      z(this.rootElRef, e), z(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: r, rootElRef: i } = this, { options: s, dateEnv: l } = e, { date: o, dateProfile: a } = n;
    const d = n.showDayNumber && vd(o, a.currentRange, l);
    return p(_i, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": r.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: md, date: o, dateProfile: a, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: d, extraRenderProps: n.extraRenderProps }, (c, h) => p(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && p(Ba, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: Bt(e, o, "week"), date: o, defaultFormat: gd }),
      !h.isDisabled && (n.showDayNumber || wi(s) || n.forceDayTop) ? p(
        "div",
        { className: "fc-daygrid-day-top" },
        p(c, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          d && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, Bt(e, o)), { id: r.dayNumberId }) })
      ) : n.showDayNumber ? (
        // for creating correct amount of space (see issue #7162)
        p(
          "div",
          { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
          p("a", { className: "fc-daygrid-day-number" }, " ")
        )
      ) : void 0,
      p(
        "div",
        { className: "fc-daygrid-day-events", ref: n.fgContentElRef },
        n.fgContent,
        p(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: n.moreMarginTop } },
          p(fd, { allDayDate: o, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: i, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      p("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function md(t) {
  return t.dayNumberText || p(M, null, " ");
}
function vd(t, e, n) {
  const { start: r, end: i } = e, s = $(i, -1), l = n.getYear(r), o = n.getMonth(r), a = n.getYear(s), d = n.getMonth(s);
  return !(l === a && o === d) && // first date in current view?
  (t.valueOf() === r.valueOf() || // a month-start that's within the current range?
  n.getDay(t) === 1 && t.valueOf() < i.valueOf());
}
function bd(t, e, n, r, i, s, l) {
  let o = new Ad();
  o.allowReslicing = !0, o.strictOrder = r, e === !0 || n === !0 ? (o.maxCoord = s, o.hiddenConsumes = !0) : typeof e == "number" ? o.maxStackCnt = e : typeof n == "number" && (o.maxStackCnt = n, o.hiddenConsumes = !0);
  let a = [], d = [];
  for (let y = 0; y < t.length; y += 1) {
    let E = t[y], { instanceId: S } = E.eventRange.instance, D = i[S];
    D != null ? a.push({
      index: y,
      thickness: D,
      span: {
        start: E.firstCol,
        end: E.lastCol + 1
      }
    }) : d.push(E);
  }
  let c = o.addSegs(a), h = o.toRects(), { singleColPlacements: f, multiColPlacements: u, leftoverMargins: m } = yd(h, t, l), b = [], v = [];
  for (let y of d) {
    u[y.firstCol].push({
      seg: y,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let E = y.firstCol; E <= y.lastCol; E += 1)
      f[E].push({
        seg: pe(y, E, E + 1, l),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let y = 0; y < l.length; y += 1)
    b.push(0);
  for (let y of c) {
    let E = t[y.index], S = y.span;
    u[S.start].push({
      seg: pe(E, S.start, S.end, l),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let D = S.start; D < S.end; D += 1)
      b[D] += 1, f[D].push({
        seg: pe(E, D, D + 1, l),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let y = 0; y < l.length; y += 1)
    v.push(m[y]);
  return { singleColPlacements: f, multiColPlacements: u, moreCnts: b, moreMarginTops: v };
}
function yd(t, e, n) {
  let r = Ed(t, n.length), i = [], s = [], l = [];
  for (let o = 0; o < n.length; o += 1) {
    let a = r[o], d = [], c = 0, h = 0;
    for (let u of a) {
      let m = e[u.index];
      d.push({
        seg: pe(m, o, o + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: u.levelCoord,
        marginTop: u.levelCoord - c
      }), c = u.levelCoord + u.thickness;
    }
    let f = [];
    c = 0, h = 0;
    for (let u of a) {
      let m = e[u.index], b = u.span.end - u.span.start > 1, v = u.span.start === o;
      h += u.levelCoord - c, c = u.levelCoord + u.thickness, b ? (h += u.thickness, v && f.push({
        seg: pe(m, u.span.start, u.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: u.levelCoord,
        marginTop: 0
      })) : v && (f.push({
        seg: pe(m, u.span.start, u.span.end, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: u.levelCoord,
        marginTop: h
        // claim the margin
      }), h = 0);
    }
    i.push(d), s.push(f), l.push(h);
  }
  return { singleColPlacements: i, multiColPlacements: s, leftoverMargins: l };
}
function Ed(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n.push([]);
  for (let r of t)
    for (let i = r.span.start; i < r.span.end; i += 1)
      n[i].push(r);
  return n;
}
function pe(t, e, n, r) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let i = t.eventRange, s = i.range, l = ve(s, {
    start: r[e].date,
    end: P(r[n - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: n - 1, eventRange: {
    def: i.def,
    ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: l
  }, isStart: t.isStart && l.start.valueOf() === s.start.valueOf(), isEnd: t.isEnd && l.end.valueOf() === s.end.valueOf() });
}
class Ad extends Vo {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: r } = this, i = (s) => !this.forceHidden[_e(s)];
    for (let s = 0; s < r.length; s += 1)
      r[s] = r[s].filter(i);
    return n;
  }
  handleInvalidInsertion(e, n, r) {
    const { entriesByLevel: i, forceHidden: s } = this, { touchingEntry: l, touchingLevel: o, touchingLateral: a } = e;
    if (this.hiddenConsumes && l) {
      const d = _e(l);
      if (!s[d])
        if (this.allowReslicing) {
          const c = Object.assign(Object.assign({}, l), { span: fi(l.span, n.span) }), h = _e(c);
          s[h] = !0, i[o][a] = c, this.splitEntry(l, n, r);
        } else
          s[d] = !0, r.push(l);
    }
    return super.handleInvalidInsertion(e, n, r);
  }
}
class zi extends de {
  constructor() {
    super(...arguments), this.cellElRefs = new ne(), this.frameElRefs = new ne(), this.fgElRefs = new ne(), this.segHarnessRefs = new ne(), this.rootElRef = V(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, { options: i } = r, s = e.cells.length, l = Fe(e.businessHourSegs, s), o = Fe(e.bgEventSegs, s), a = Fe(this.getHighlightSegs(), s), d = Fe(this.getMirrorSegs(), s), { singleColPlacements: c, multiColPlacements: h, moreCnts: f, moreMarginTops: u } = bd(So(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.eventInstanceHeights, n.maxContentHeight, e.cells), m = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    );
    return p(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((b, v) => {
        let y = this.renderFgSegs(v, e.forPrint ? c[v] : h[v], e.todayRange, m), E = this.renderFgSegs(v, Sd(d[v], h), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
        return p(pd, { key: b.key, elRef: this.cellElRefs.createRef(b.key), innerElRef: this.frameElRefs.createRef(b.key), dateProfile: e.dateProfile, date: b.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && v === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: b.extraRenderProps, extraDataAttrs: b.extraDataAttrs, extraClassNames: b.extraClassNames, extraDateSpan: b.extraDateSpan, moreCnt: f[v], moreMarginTop: u[v], singlePlacements: c[v], fgContentElRef: this.fgElRefs.createRef(b.key), fgContent: (
          // Fragment scopes the keys
          p(
            M,
            null,
            p(M, null, y),
            p(M, null, E)
          )
        ), bgContent: (
          // Fragment scopes the keys
          p(
            M,
            null,
            this.renderFillSegs(a[v], "highlight"),
            this.renderFillSegs(l[v], "non-business"),
            this.renderFillSegs(o[v], "bg-event")
          )
        ), minHeight: e.cellMinHeight });
      })
    );
  }
  componentDidMount() {
    this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(e, n) {
    let r = this.props;
    this.updateSizing(!F(e, r));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let { props: e } = this;
    return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
  }
  getMirrorSegs() {
    let { props: e } = this;
    return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
  }
  renderFgSegs(e, n, r, i, s, l, o) {
    let { context: a } = this, { eventSelection: d } = this.props, { framePositions: c } = this.state, h = this.props.cells.length === 1, f = s || l || o, u = [];
    if (c)
      for (let m of n) {
        let { seg: b } = m, { instanceId: v } = b.eventRange.instance, y = v + ":" + e, E = m.isVisible && !i[v], S = m.isAbsolute, D = "", k = "";
        S && (a.isRtl ? (k = 0, D = c.lefts[b.lastCol] - c.lefts[b.firstCol]) : (D = 0, k = c.rights[b.firstCol] - c.rights[b.lastCol])), u.push(p("div", { className: "fc-daygrid-event-harness" + (S ? " fc-daygrid-event-harness-abs" : ""), key: y, ref: f ? null : this.segHarnessRefs.createRef(y), style: {
          visibility: E ? "" : "hidden",
          marginTop: S ? "" : m.marginTop,
          top: S ? m.absoluteTop : "",
          left: D,
          right: k
        } }, Ui(b) ? p(Vi, Object.assign({ seg: b, isDragging: s, isSelected: v === d, defaultDisplayEventEnd: h }, Ce(b, r))) : p(Fi, Object.assign({ seg: b, isDragging: s, isResizing: l, isDateSelecting: o, isSelected: v === d, defaultDisplayEventEnd: h }, Ce(b, r)))));
      }
    return u;
  }
  renderFillSegs(e, n) {
    let { isRtl: r } = this.context, { todayRange: i } = this.props, { framePositions: s } = this.state, l = [];
    if (s)
      for (let o of e) {
        let a = r ? {
          right: 0,
          left: s.lefts[o.lastCol] - s.lefts[o.firstCol]
        } : {
          left: 0,
          right: s.rights[o.firstCol] - s.rights[o.lastCol]
        };
        l.push(p("div", { key: To(o.eventRange), className: "fc-daygrid-bg-harness", style: a }, n === "bg-event" ? p(Na, Object.assign({ seg: o }, Ce(o, i))) : Pa(n)));
      }
    return p(M, {}, ...l);
  }
  updateSizing(e) {
    let { props: n, state: r, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let a = n.cells.map((d) => i.currentMap[d.key]);
        if (a.length) {
          let d = this.rootElRef.current, c = new nt(
            d,
            a,
            !0,
            // isHorizontal
            !1
          );
          (!r.framePositions || !r.framePositions.similarTo(c)) && this.setState({
            framePositions: new nt(
              d,
              a,
              !0,
              // isHorizontal
              !1
            )
          });
        }
      }
      const s = this.state.eventInstanceHeights, l = this.queryEventInstanceHeights(), o = n.dayMaxEvents === !0 || n.dayMaxEventRows === !0;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        eventInstanceHeights: Object.assign(Object.assign({}, s), l),
        maxContentHeight: o ? this.computeMaxContentHeight() : null
      });
    }
  }
  queryEventInstanceHeights() {
    let e = this.segHarnessRefs.currentMap, n = {};
    for (let r in e) {
      let i = Math.round(e[r].getBoundingClientRect().height), s = r.split(":")[0];
      n[s] = Math.max(n[s] || 0, i);
    }
    return n;
  }
  computeMaxContentHeight() {
    let e = this.props.cells[0].key, n = this.cellElRefs.currentMap[e], r = this.fgElRefs.currentMap[e];
    return n.getBoundingClientRect().bottom - r.getBoundingClientRect().top;
  }
  getCellEls() {
    let e = this.cellElRefs.currentMap;
    return this.props.cells.map((n) => e[n.key]);
  }
}
zi.addStateEquality({
  eventInstanceHeights: F
});
function Sd(t, e) {
  if (!t.length)
    return [];
  let n = Dd(e);
  return t.map((r) => ({
    seg: r,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[r.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function Dd(t) {
  let e = {};
  for (let n of t)
    for (let r of n)
      e[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
  return e;
}
class Cd extends de {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = w(Ue), this.splitBgEventSegs = w(Ue), this.splitFgEventSegs = w(Ue), this.splitDateSelectionSegs = w(Ue), this.splitEventDrag = w(mr), this.splitEventResize = w(mr), this.rowRefs = new ne();
  }
  render() {
    let { props: e, context: n } = this, r = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, r), s = this.splitBgEventSegs(e.bgEventSegs, r), l = this.splitFgEventSegs(e.fgEventSegs, r), o = this.splitDateSelectionSegs(e.dateSelectionSegs, r), a = this.splitEventDrag(e.eventDrag, r), d = this.splitEventResize(e.eventResize, r), c = r >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return p(un, { unit: "day" }, (h, f) => p(M, null, e.cells.map((u, m) => p(zi, {
      ref: this.rowRefs.createRef(m),
      key: u.length ? u[0].date.toISOString() : m,
      showDayNumbers: r > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: f,
      dateProfile: e.dateProfile,
      cells: u,
      renderIntro: e.renderRowIntro,
      businessHourSegs: i[m],
      eventSelection: e.eventSelection,
      bgEventSegs: s[m].filter(_d),
      fgEventSegs: l[m],
      dateSelectionSegs: o[m],
      eventDrag: a[m],
      eventResize: d[m],
      dayMaxEvents: e.dayMaxEvents,
      dayMaxEventRows: e.dayMaxEventRows,
      clientWidth: e.clientWidth,
      clientHeight: e.clientHeight,
      cellMinHeight: c,
      forPrint: e.forPrint
    }))));
  }
  componentDidMount() {
    const e = this.rowRefs.currentMap[0].getCellEls()[0];
    this.rootEl = e ? e.closest(".fc-daygrid-body") : null, this.rootEl && this.context.registerInteractiveComponent(this, {
      el: this.rootEl,
      isHitComboAllowed: this.props.isHitComboAllowed
    });
  }
  componentWillUnmount() {
    this.rootEl && (this.context.unregisterInteractiveComponent(this), this.rootEl = null);
  }
  // Hit System
  // ----------------------------------------------------------------------------------------------------
  prepareHits() {
    this.rowPositions = new nt(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      !1,
      !0
    ), this.colPositions = new nt(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      // cell els in first row
      !0,
      // horizontal
      !1
    );
  }
  queryHit(e, n) {
    let { colPositions: r, rowPositions: i } = this, s = r.leftToIndex(e), l = i.topToIndex(n);
    if (l != null && s != null) {
      let o = this.props.cells[l][s];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({ range: this.getCellRange(l, s), allDay: !0 }, o.extraDateSpan),
        dayEl: this.getCellEl(l, s),
        rect: {
          left: r.lefts[s],
          right: r.rights[s],
          top: i.tops[l],
          bottom: i.bottoms[l]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(e, n) {
    return this.rowRefs.currentMap[e].getCellEls()[n];
  }
  getCellRange(e, n) {
    let r = this.props.cells[e][n].date, i = P(r, 1);
    return { start: r, end: i };
  }
}
function _d(t) {
  return t.eventRange.def.allDay;
}
class wd extends de {
  constructor() {
    super(...arguments), this.elRef = V(), this.needsScrollReset = !1;
  }
  render() {
    let { props: e } = this, { dayMaxEventRows: n, dayMaxEvents: r, expandRows: i } = e, s = r === !0 || n === !0;
    s && !i && (s = !1, n = null, r = null);
    let l = [
      "fc-daygrid-body",
      s ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      i ? "" : "fc-daygrid-body-natural"
      // will height of one row depend on the others?
    ];
    return p(
      "div",
      { ref: this.elRef, className: l.join(" "), style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      p(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: i ? e.clientHeight : ""
        } },
        e.colGroupNode,
        p(
          "tbody",
          { role: "presentation" },
          p(Cd, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: r, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
        )
      )
    );
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(e) {
    e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
  }
  requestScrollReset() {
    this.needsScrollReset = !0, this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth) {
      const e = Rd(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), r = n.closest(".fc-scroller"), i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        r.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function Rd(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${ul(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${qt(e.currentDate)}"]`)), n;
}
class Td extends ra {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class Id extends de {
  constructor() {
    super(...arguments), this.slicer = new Td(), this.tableRef = V();
  }
  render() {
    let { props: e, context: n } = this;
    return p(wd, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class Md extends ri {
  // Computes the date range that will be rendered
  buildRenderRange(e, n, r) {
    let i = super.buildRenderRange(e, n, r), { props: s } = this;
    return kd({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: s.fixedWeekCount,
      dateEnv: s.dateEnv
    });
  }
}
function kd(t) {
  let { dateEnv: e, currentRange: n } = t, { start: r, end: i } = n, s;
  if (t.snapToWeek && (r = e.startOfWeek(r), s = e.startOfWeek(i), s.valueOf() !== i.valueOf() && (i = jn(s, 1))), t.fixedWeekCount) {
    let l = e.startOfWeek(e.startOfMonth(P(n.end, -1))), o = Math.ceil(
      // could be partial weeks due to hiddenDays
      Ks(l, i)
    );
    i = jn(i, 6 - o);
  }
  return { start: r, end: i };
}
class xd extends de {
  constructor() {
    super(...arguments), this.headerElRef = V();
  }
  renderSimpleLayout(e, n) {
    let { props: r, context: i } = this, s = [], l = lr(i.options);
    return e && s.push({
      type: "header",
      key: "header",
      isSticky: l,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), s.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: n }
    }), p(
      ar,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      p(Ci, { liquid: !r.isHeightAuto && !r.forPrint, collapsibleWidth: r.forPrint, cols: [], sections: s })
    );
  }
  renderHScrollLayout(e, n, r, i) {
    let s = this.context.pluginHooks.scrollGridImpl;
    if (!s)
      throw new Error("No ScrollGrid implementation");
    let { props: l, context: o } = this, a = !l.forPrint && lr(o.options), d = !l.forPrint && Ta(o.options), c = [];
    return e && c.push({
      type: "header",
      key: "header",
      isSticky: a,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }]
    }), c.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: n
      }]
    }), d && c.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: Ra
      }]
    }), p(
      ar,
      { elClasses: ["fc-daygrid"], viewSpec: o.viewSpec },
      p(s, { liquid: !l.isHeightAuto && !l.forPrint, forPrint: l.forPrint, collapsibleWidth: l.forPrint, colGroups: [{ cols: [{ span: r, minWidth: i }] }], sections: c })
    );
  }
}
class Od extends xd {
  constructor() {
    super(...arguments), this.buildDayTableModel = w(Nd), this.headerRef = V(), this.tableRef = V();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: r } = this, i = this.buildDayTableModel(r.dateProfile, n), s = e.dayHeaders && p(Ko, { ref: this.headerRef, dateProfile: r.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), l = (o) => p(Id, { ref: this.tableRef, dateProfile: r.dateProfile, dayTableModel: i, businessHours: r.businessHours, dateSelection: r.dateSelection, eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: o.tableColGroupNode, tableMinWidth: o.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !r.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: o.clientWidth, clientHeight: o.clientHeight, forPrint: r.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(s, l, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(s, l);
  }
}
function Nd(t, e) {
  let n = new ta(t.renderRange, e);
  return new na(n, /year|month|week/.test(t.currentRangeUnit));
}
var Hd = X({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: Od,
      dateProfileGeneratorClass: Md
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      fixedWeekCount: !0
    },
    dayGridYear: {
      type: "dayGrid",
      duration: { years: 1 }
    }
  }
});
cn.touchMouseIgnoreWait = 500;
let Ut = 0, it = 0, Ft = !1;
class Wi {
  constructor(e) {
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (n) => {
      if (!this.shouldIgnoreMouse() && Pd(n) && this.tryStart(n)) {
        let r = this.createEventFromMouse(n, !0);
        this.emitter.trigger("pointerdown", r), this.initScrollWatch(r), this.shouldIgnoreMove || document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp);
      }
    }, this.handleMouseMove = (n) => {
      let r = this.createEventFromMouse(n);
      this.recordCoords(r), this.emitter.trigger("pointermove", r);
    }, this.handleMouseUp = (n) => {
      document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), this.emitter.trigger("pointerup", this.createEventFromMouse(n)), this.cleanup();
    }, this.handleTouchStart = (n) => {
      if (this.tryStart(n)) {
        this.isTouchDragging = !0;
        let r = this.createEventFromTouch(n, !0);
        this.emitter.trigger("pointerdown", r), this.initScrollWatch(r);
        let i = n.target;
        this.shouldIgnoreMove || i.addEventListener("touchmove", this.handleTouchMove), i.addEventListener("touchend", this.handleTouchEnd), i.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("scroll", this.handleTouchScroll, !0);
      }
    }, this.handleTouchMove = (n) => {
      let r = this.createEventFromTouch(n);
      this.recordCoords(r), this.emitter.trigger("pointermove", r);
    }, this.handleTouchEnd = (n) => {
      if (this.isDragging) {
        let r = n.target;
        r.removeEventListener("touchmove", this.handleTouchMove), r.removeEventListener("touchend", this.handleTouchEnd), r.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = !1, Bd();
      }
    }, this.handleTouchScroll = () => {
      this.wasTouchScroll = !0;
    }, this.handleScroll = (n) => {
      if (!this.shouldIgnoreMove) {
        let r = window.pageXOffset - this.prevScrollX + this.prevPageX, i = window.pageYOffset - this.prevScrollY + this.prevPageY;
        this.emitter.trigger("pointermove", {
          origEvent: n,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX: r,
          pageY: i,
          deltaX: r - this.origPageX,
          deltaY: i - this.origPageY
        });
      }
    }, this.containerEl = e, this.emitter = new dt(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Ld();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), jd();
  }
  tryStart(e) {
    let n = this.querySubjectEl(e), r = e.target;
    return n && (!this.handleSelector || H(r, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }
  cleanup() {
    Ft = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }
  querySubjectEl(e) {
    return this.selector ? H(e.target, this.selector) : this.containerEl;
  }
  shouldIgnoreMouse() {
    return Ut || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    this.isDragging && (Ft = !0);
  }
  // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------
  initScrollWatch(e) {
    this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
  }
  recordCoords(e) {
    this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
  }
  destroyScrollWatch() {
    this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
  }
  // Event Normalization
  // ----------------------------------------------------------------------------------------------------
  createEventFromMouse(e, n) {
    let r = 0, i = 0;
    return n ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (r = e.pageX - this.origPageX, i = e.pageY - this.origPageY), {
      origEvent: e,
      isTouch: !1,
      subjectEl: this.subjectEl,
      pageX: e.pageX,
      pageY: e.pageY,
      deltaX: r,
      deltaY: i
    };
  }
  createEventFromTouch(e, n) {
    let r = e.touches, i, s, l = 0, o = 0;
    return r && r.length ? (i = r[0].pageX, s = r[0].pageY) : (i = e.pageX, s = e.pageY), n ? (this.origPageX = i, this.origPageY = s) : (l = i - this.origPageX, o = s - this.origPageY), {
      origEvent: e,
      isTouch: !0,
      subjectEl: this.subjectEl,
      pageX: i,
      pageY: s,
      deltaX: l,
      deltaY: o
    };
  }
}
function Pd(t) {
  return t.button === 0 && !t.ctrlKey;
}
function Bd() {
  Ut += 1, setTimeout(() => {
    Ut -= 1;
  }, cn.touchMouseIgnoreWait);
}
function Ld() {
  it += 1, it === 1 && window.addEventListener("touchmove", Gi, { passive: !1 });
}
function jd() {
  it -= 1, it || window.removeEventListener("touchmove", Gi, { passive: !1 });
}
function Gi(t) {
  Ft && t.preventDefault();
}
class Ud {
  constructor() {
    this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
  }
  start(e, n, r) {
    this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = n - window.pageXOffset, this.origScreenY = r - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
  }
  handleMove(e, n) {
    this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = n - window.pageYOffset - this.origScreenY, this.updateElPosition();
  }
  // can be called before start
  setIsVisible(e) {
    e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
  }
  // always async
  stop(e, n) {
    let r = () => {
      this.cleanup(), n();
    };
    e && this.mirrorEl && this.isVisible && this.revertDuration && // if 0, transition won't work
    (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0);
  }
  doRevertAnimation(e, n) {
    let r = this.mirrorEl, i = this.sourceEl.getBoundingClientRect();
    r.style.transition = "top " + n + "ms,left " + n + "ms", Ae(r, {
      left: i.left,
      top: i.top
    }), ks(r, () => {
      r.style.transition = "", e();
    });
  }
  cleanup() {
    this.mirrorEl && (zt(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }
  updateElPosition() {
    this.sourceEl && this.isVisible && Ae(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }
  getMirrorEl() {
    let e = this.sourceElRect, n = this.mirrorEl;
    return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0), n.style.userSelect = "none", n.classList.add("fc-event-dragging"), Ae(n, {
      position: "fixed",
      zIndex: this.zIndex,
      visibility: "",
      boxSizing: "border-box",
      width: e.right - e.left,
      height: e.bottom - e.top,
      right: "auto",
      bottom: "auto",
      margin: 0
    }), this.parentNode.appendChild(n)), n;
  }
}
class Qi extends sn {
  constructor(e, n) {
    super(), this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop(), this.scrollLeft = this.scrollController.getScrollLeft(), this.handleScrollChange();
    }, this.scrollController = e, this.doesListening = n, this.scrollTop = this.origScrollTop = e.getScrollTop(), this.scrollLeft = this.origScrollLeft = e.getScrollLeft(), this.scrollWidth = e.getScrollWidth(), this.scrollHeight = e.getScrollHeight(), this.clientWidth = e.getClientWidth(), this.clientHeight = e.getClientHeight(), this.clientRect = this.computeClientRect(), this.doesListening && this.getEventTarget().addEventListener("scroll", this.handleScroll);
  }
  destroy() {
    this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
  }
  getScrollTop() {
    return this.scrollTop;
  }
  getScrollLeft() {
    return this.scrollLeft;
  }
  setScrollTop(e) {
    this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange());
  }
  setScrollLeft(e) {
    this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange());
  }
  getClientWidth() {
    return this.clientWidth;
  }
  getClientHeight() {
    return this.clientHeight;
  }
  getScrollWidth() {
    return this.scrollWidth;
  }
  getScrollHeight() {
    return this.scrollHeight;
  }
  handleScrollChange() {
  }
}
class Yi extends Qi {
  constructor(e, n) {
    super(new co(e), n);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return io(this.scrollController.el);
  }
}
class Fd extends Qi {
  constructor(e) {
    super(new uo(), e);
  }
  getEventTarget() {
    return window;
  }
  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }
  // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls
  handleScrollChange() {
    this.clientRect = this.computeClientRect();
  }
}
const vr = typeof performance == "function" ? performance.now : Date.now;
class Vd {
  constructor() {
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
      if (this.isAnimating) {
        let e = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);
        if (e) {
          let n = vr();
          this.handleSide(e, (n - this.msSinceRequest) / 1e3), this.requestAnimation(n);
        } else
          this.isAnimating = !1;
      }
    };
  }
  start(e, n, r) {
    this.isEnabled && (this.scrollCaches = this.buildCaches(r), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, n));
  }
  handleMove(e, n) {
    if (this.isEnabled) {
      let r = e - window.pageXOffset, i = n - window.pageYOffset, s = this.pointerScreenY === null ? 0 : i - this.pointerScreenY, l = this.pointerScreenX === null ? 0 : r - this.pointerScreenX;
      s < 0 ? this.everMovedUp = !0 : s > 0 && (this.everMovedDown = !0), l < 0 ? this.everMovedLeft = !0 : l > 0 && (this.everMovedRight = !0), this.pointerScreenX = r, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(vr()));
    }
  }
  stop() {
    if (this.isEnabled) {
      this.isAnimating = !1;
      for (let e of this.scrollCaches)
        e.destroy();
      this.scrollCaches = null;
    }
  }
  requestAnimation(e) {
    this.msSinceRequest = e, requestAnimationFrame(this.animate);
  }
  handleSide(e, n) {
    let { scrollCache: r } = e, { edgeThreshold: i } = this, s = i - e.distance, l = (
      // the closer to the edge, the faster we scroll
      s * s / (i * i) * // quadratic
      this.maxVelocity * n
    ), o = 1;
    switch (e.name) {
      case "left":
        o = -1;
      case "right":
        r.setScrollLeft(r.getScrollLeft() + l * o);
        break;
      case "top":
        o = -1;
      case "bottom":
        r.setScrollTop(r.getScrollTop() + l * o);
        break;
    }
  }
  // left/top are relative to document topleft
  computeBestEdge(e, n) {
    let { edgeThreshold: r } = this, i = null, s = this.scrollCaches || [];
    for (let l of s) {
      let o = l.clientRect, a = e - o.left, d = o.right - e, c = n - o.top, h = o.bottom - n;
      a >= 0 && d >= 0 && c >= 0 && h >= 0 && (c <= r && this.everMovedUp && l.canScrollUp() && (!i || i.distance > c) && (i = { scrollCache: l, name: "top", distance: c }), h <= r && this.everMovedDown && l.canScrollDown() && (!i || i.distance > h) && (i = { scrollCache: l, name: "bottom", distance: h }), a <= r && this.everMovedLeft && l.canScrollLeft() && (!i || i.distance > a) && (i = { scrollCache: l, name: "left", distance: a }), d <= r && this.everMovedRight && l.canScrollRight() && (!i || i.distance > d) && (i = { scrollCache: l, name: "right", distance: d }));
    }
    return i;
  }
  buildCaches(e) {
    return this.queryScrollEls(e).map((n) => n === window ? new Fd(!1) : new Yi(n, !1));
  }
  queryScrollEls(e) {
    let n = [];
    for (let r of this.scrollQuery)
      typeof r == "object" ? n.push(r) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(r)));
    return n;
  }
}
class xe extends Wo {
  constructor(e, n) {
    super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (i) => {
      this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, xs(document.body), Ns(document.body), i.isTouch || i.origEvent.preventDefault(), this.emitter.trigger("pointerdown", i), this.isInteracting && // not destroyed via pointerdown handler
      !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(i.subjectEl, i.pageX, i.pageY), this.startDelay(i), this.minDistance || this.handleDistanceSurpassed(i)));
    }, this.onPointerMove = (i) => {
      if (this.isInteracting) {
        if (this.emitter.trigger("pointermove", i), !this.isDistanceSurpassed) {
          let s = this.minDistance, l, { deltaX: o, deltaY: a } = i;
          l = o * o + a * a, l >= s * s && this.handleDistanceSurpassed(i);
        }
        this.isDragging && (i.origEvent.type !== "scroll" && (this.mirror.handleMove(i.pageX, i.pageY), this.autoScroller.handleMove(i.pageX, i.pageY)), this.emitter.trigger("dragmove", i));
      }
    }, this.onPointerUp = (i) => {
      this.isInteracting && (this.isInteracting = !1, Os(document.body), Hs(document.body), this.emitter.trigger("pointerup", i), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
    };
    let r = this.pointer = new Wi(e);
    r.emitter.on("pointerdown", this.onPointerDown), r.emitter.on("pointermove", this.onPointerMove), r.emitter.on("pointerup", this.onPointerUp), n && (r.selector = n), this.mirror = new Ud(), this.autoScroller = new Vd();
  }
  destroy() {
    this.pointer.destroy(), this.onPointerUp({});
  }
  startDelay(e) {
    typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(() => {
      this.delayTimeoutId = null, this.handleDelayEnd(e);
    }, this.delay) : this.handleDelayEnd(e);
  }
  handleDelayEnd(e) {
    this.isDelayEnded = !0, this.tryStartDrag(e);
  }
  handleDistanceSurpassed(e) {
    this.isDistanceSurpassed = !0, this.tryStartDrag(e);
  }
  tryStartDrag(e) {
    this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll());
  }
  tryStopDrag(e) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
  }
  stopDrag(e) {
    this.isDragging = !1, this.emitter.trigger("dragend", e);
  }
  // fill in the implementations...
  setIgnoreMove(e) {
    this.pointer.shouldIgnoreMove = e;
  }
  setMirrorIsVisible(e) {
    this.mirror.setIsVisible(e);
  }
  setMirrorNeedsRevert(e) {
    this.mirrorNeedsRevert = e;
  }
  setAutoScrollEnabled(e) {
    this.autoScroller.isEnabled = e;
  }
}
class zd {
  constructor(e) {
    this.origRect = rn(e), this.scrollCaches = ti(e).map((n) => new Yi(n, !0));
  }
  destroy() {
    for (let e of this.scrollCaches)
      e.destroy();
  }
  computeLeft() {
    let e = this.origRect.left;
    for (let n of this.scrollCaches)
      e += n.origScrollLeft - n.getScrollLeft();
    return e;
  }
  computeTop() {
    let e = this.origRect.top;
    for (let n of this.scrollCaches)
      e += n.origScrollTop - n.getScrollTop();
    return e;
  }
  isWithinClipping(e, n) {
    let r = { left: e, top: n };
    for (let i of this.scrollCaches)
      if (!Wd(i.getEventTarget()) && !Vl(r, i.clientRect))
        return !1;
    return !0;
  }
}
function Wd(t) {
  let e = t.tagName;
  return e === "HTML" || e === "BODY";
}
class ut {
  constructor(e, n) {
    this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = (r) => {
      let { dragging: i } = this;
      this.initialHit = null, this.movingHit = null, this.finalHit = null, this.prepareHits(), this.processFirstCoord(r), this.initialHit || !this.requireInitial ? (i.setIgnoreMove(!1), this.emitter.trigger("pointerdown", r)) : i.setIgnoreMove(!0);
    }, this.handleDragStart = (r) => {
      this.emitter.trigger("dragstart", r), this.handleMove(r, !0);
    }, this.handleDragMove = (r) => {
      this.emitter.trigger("dragmove", r), this.handleMove(r);
    }, this.handlePointerUp = (r) => {
      this.releaseHits(), this.emitter.trigger("pointerup", r);
    }, this.handleDragEnd = (r) => {
      this.movingHit && this.emitter.trigger("hitupdate", null, !0, r), this.finalHit = this.movingHit, this.movingHit = null, this.emitter.trigger("dragend", r);
    }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new dt();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(e) {
    let n = { left: e.pageX, top: e.pageY }, r = n, i = e.subjectEl, s;
    i instanceof HTMLElement && (s = rn(i), r = zl(r, s));
    let l = this.initialHit = this.queryHitForOffset(r.left, r.top);
    if (l) {
      if (this.useSubjectCenter && s) {
        let o = Xr(s, l.rect);
        o && (r = Wl(o));
      }
      this.coordAdjust = Gl(r, n);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }
  handleMove(e, n) {
    let r = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (n || !ft(this.movingHit, r)) && (this.movingHit = r, this.emitter.trigger("hitupdate", r, !1, e));
  }
  prepareHits() {
    this.offsetTrackers = oe(this.droppableStore, (e) => (e.component.prepareHits(), new zd(e.el)));
  }
  releaseHits() {
    let { offsetTrackers: e } = this;
    for (let n in e)
      e[n].destroy();
    this.offsetTrackers = {};
  }
  queryHitForOffset(e, n) {
    let { droppableStore: r, offsetTrackers: i } = this, s = null;
    for (let l in r) {
      let o = r[l].component, a = i[l];
      if (a && // wasn't destroyed mid-drag
      a.isWithinClipping(e, n)) {
        let d = a.computeLeft(), c = a.computeTop(), h = e - d, f = n - c, { origRect: u } = a, m = u.right - u.left, b = u.bottom - u.top;
        if (
          // must be within the element's bounds
          h >= 0 && h < m && f >= 0 && f < b
        ) {
          let v = o.queryHit(h, f, m, b);
          v && // make sure the hit is within activeRange, meaning it's not a dead cell
          ct(v.dateProfile.activeRange, v.dateSpan.range) && (!s || v.layer > s.layer) && (v.componentId = l, v.context = o.context, v.rect.left += d, v.rect.right += d, v.rect.top += c, v.rect.bottom += c, s = v);
        }
      }
    }
    return s;
  }
}
function ft(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : xo(t.dateSpan, e.dateSpan);
}
function qi(t, e) {
  let n = {};
  for (let r of e.pluginHooks.datePointTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, Gd(t, e.dateEnv)), n;
}
function Gd(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
class Qd extends Ee {
  constructor(e) {
    super(e), this.handlePointerDown = (r) => {
      let { dragging: i } = this, s = r.origEvent.target;
      i.setIgnoreMove(!this.component.isValidDateDownEl(s));
    }, this.handleDragEnd = (r) => {
      let { component: i } = this, { pointer: s } = this.dragging;
      if (!s.wasTouchScroll) {
        let { initialHit: l, finalHit: o } = this.hitDragging;
        if (l && o && ft(l, o)) {
          let { context: a } = i, d = Object.assign(Object.assign({}, qi(l.dateSpan, a)), { dayEl: l.dayEl, jsEvent: r.origEvent, view: a.viewApi || a.calendarApi.view });
          a.emitter.trigger("dateClick", d);
        }
      }
    }, this.dragging = new xe(e.el), this.dragging.autoScroller.isEnabled = !1;
    let n = this.hitDragging = new ut(this.dragging, an(e));
    n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}
class Yd extends Ee {
  constructor(e) {
    super(e), this.dragSelection = null, this.handlePointerDown = (l) => {
      let { component: o, dragging: a } = this, { options: d } = o.context, c = d.selectable && o.isValidDateDownEl(l.origEvent.target);
      a.setIgnoreMove(!c), a.delay = l.isTouch ? qd(o) : null;
    }, this.handleDragStart = (l) => {
      this.component.context.calendarApi.unselect(l);
    }, this.handleHitUpdate = (l, o) => {
      let { context: a } = this.component, d = null, c = !1;
      if (l) {
        let h = this.hitDragging.initialHit;
        l.componentId === h.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(h, l) || (d = Zd(h, l, a.pluginHooks.dateSelectionTransformers)), (!d || !da(d, l.dateProfile, a)) && (c = !0, d = null);
      }
      d ? a.dispatch({ type: "SELECT_DATES", selection: d }) : o || a.dispatch({ type: "UNSELECT_DATES" }), c ? Wt() : Gt(), o || (this.dragSelection = d);
    }, this.handlePointerUp = (l) => {
      this.dragSelection && (ii(this.dragSelection, l, this.component.context), this.dragSelection = null);
    };
    let { component: n } = e, { options: r } = n.context, i = this.dragging = new xe(e.el);
    i.touchScrollAllowed = !1, i.minDistance = r.selectMinDistance || 0, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new ut(this.dragging, an(e));
    s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function qd(t) {
  let { options: e } = t.context, n = e.selectLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
function Zd(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = [
    r.range.start,
    r.range.end,
    i.range.start,
    i.range.end
  ];
  s.sort(Us);
  let l = {};
  for (let o of n) {
    let a = o(t, e);
    if (a === !1)
      return null;
    a && Object.assign(l, a);
  }
  return l.range = { start: s[0], end: s[3] }, l.allDay = r.allDay, l;
}
class Oe extends Ee {
  constructor(e) {
    super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (l) => {
      let o = l.origEvent.target, { component: a, dragging: d } = this, { mirror: c } = d, { options: h } = a.context, f = a.context;
      this.subjectEl = l.subjectEl;
      let u = this.subjectSeg = be(l.subjectEl), b = (this.eventRange = u.eventRange).instance.instanceId;
      this.relevantEvents = Jt(f.getCurrentData().eventStore, b), d.minDistance = l.isTouch ? 0 : h.eventDragMinDistance, d.delay = // only do a touch delay if touch and this event hasn't been selected yet
      l.isTouch && b !== a.props.eventSelection ? Xd(a) : null, h.fixedMirrorParent ? c.parentNode = h.fixedMirrorParent : c.parentNode = H(o, ".fc"), c.revertDuration = h.dragRevertDuration;
      let v = a.isValidSegDownEl(o) && !H(o, ".fc-event-resizer");
      d.setIgnoreMove(!v), this.isDragging = v && l.subjectEl.classList.contains("fc-event-draggable");
    }, this.handleDragStart = (l) => {
      let o = this.component.context, a = this.eventRange, d = a.instance.instanceId;
      l.isTouch ? d !== this.component.props.eventSelection && o.dispatch({ type: "SELECT_EVENT", eventInstanceId: d }) : o.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (o.calendarApi.unselect(l), o.emitter.trigger("eventDragStart", {
        el: this.subjectEl,
        event: new T(o, a.def, a.instance),
        jsEvent: l.origEvent,
        view: o.viewApi
      }));
    }, this.handleHitUpdate = (l, o) => {
      if (!this.isDragging)
        return;
      let a = this.relevantEvents, d = this.hitDragging.initialHit, c = this.component.context, h = null, f = null, u = null, m = !1, b = {
        affectedEvents: a,
        mutatedEvents: j(),
        isEvent: !0
      };
      if (l) {
        h = l.context;
        let v = h.options;
        c === h || v.editable && v.droppable ? (f = $d(d, l, h.getCurrentData().pluginHooks.eventDragMutationMassagers), f && (u = on(a, h.getCurrentData().eventUiBases, f, h), b.mutatedEvents = u, Ei(b, l.dateProfile, h) || (m = !0, f = null, u = null, b.mutatedEvents = j()))) : h = null;
      }
      this.displayDrag(h, b), m ? Wt() : Gt(), o || (c === h && // TODO: write test for this
      ft(d, l) && (f = null), this.dragging.setMirrorNeedsRevert(!f), this.dragging.setMirrorIsVisible(!l || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = h, this.validMutation = f, this.mutatedRelevantEvents = u);
    }, this.handlePointerUp = () => {
      this.isDragging || this.cleanup();
    }, this.handleDragEnd = (l) => {
      if (this.isDragging) {
        let o = this.component.context, a = o.viewApi, { receivingContext: d, validMutation: c } = this, h = this.eventRange.def, f = this.eventRange.instance, u = new T(o, h, f), m = this.relevantEvents, b = this.mutatedRelevantEvents, { finalHit: v } = this.hitDragging;
        if (this.clearDrag(), o.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: u,
          jsEvent: l.origEvent,
          view: a
        }), c) {
          if (d === o) {
            let y = new T(o, b.defs[h.defId], f ? b.instances[f.instanceId] : null);
            o.dispatch({
              type: "MERGE_EVENTS",
              eventStore: b
            });
            let E = {
              oldEvent: u,
              event: y,
              relatedEvents: re(b, o, f),
              revert() {
                o.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: m
                  // the pre-change data
                });
              }
            }, S = {};
            for (let D of o.getCurrentData().pluginHooks.eventDropTransformers)
              Object.assign(S, D(c, o));
            o.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, E), S), { el: l.subjectEl, delta: c.datesDelta, jsEvent: l.origEvent, view: a })), o.emitter.trigger("eventChange", E);
          } else if (d) {
            let y = {
              event: u,
              relatedEvents: re(m, o, f),
              revert() {
                o.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: m
                });
              }
            };
            o.emitter.trigger("eventLeave", Object.assign(Object.assign({}, y), { draggedEl: l.subjectEl, view: a })), o.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: m
            }), o.emitter.trigger("eventRemove", y);
            let E = b.defs[h.defId], S = b.instances[f.instanceId], D = new T(d, E, S);
            d.dispatch({
              type: "MERGE_EVENTS",
              eventStore: b
            });
            let k = {
              event: D,
              relatedEvents: re(b, d, S),
              revert() {
                d.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: b
                });
              }
            };
            d.emitter.trigger("eventAdd", k), l.isTouch && d.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: f.instanceId
            }), d.emitter.trigger("drop", Object.assign(Object.assign({}, qi(v.dateSpan, d)), { draggedEl: l.subjectEl, jsEvent: l.origEvent, view: v.context.viewApi })), d.emitter.trigger("eventReceive", Object.assign(Object.assign({}, k), { draggedEl: l.subjectEl, view: v.context.viewApi }));
          }
        } else
          o.emitter.trigger("_noEventDrop");
      }
      this.cleanup();
    };
    let { component: n } = this, { options: r } = n.context, i = this.dragging = new xe(e.el);
    i.pointer.selector = Oe.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new ut(this.dragging, Lt);
    s.useSubjectCenter = e.useEventCenter, s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp), s.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  // render a drag state on the next receivingCalendar
  displayDrag(e, n) {
    let r = this.component.context, i = this.receivingContext;
    i && i !== e && (i === r ? i.dispatch({
      type: "SET_EVENT_DRAG",
      state: {
        affectedEvents: n.affectedEvents,
        mutatedEvents: j(),
        isEvent: !0
      }
    }) : i.dispatch({ type: "UNSET_EVENT_DRAG" })), e && e.dispatch({ type: "SET_EVENT_DRAG", state: n });
  }
  clearDrag() {
    let e = this.component.context, { receivingContext: n } = this;
    n && n.dispatch({ type: "UNSET_EVENT_DRAG" }), e !== n && e.dispatch({ type: "UNSET_EVENT_DRAG" });
  }
  cleanup() {
    this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
  }
}
Oe.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function $d(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = r.range.start, l = i.range.start, o = {};
  r.allDay !== i.allDay && (o.allDay = i.allDay, o.hasEnd = e.context.options.allDayMaintainDuration, i.allDay && (s = R(s)));
  let a = he(s, l, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  a.milliseconds && (o.allDay = !1);
  let d = {
    datesDelta: a,
    standardProps: o
  };
  for (let c of n)
    c(d, t, e);
  return d;
}
function Xd(t) {
  let { options: e } = t.context, n = e.eventLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
class Jd extends Ee {
  constructor(e) {
    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (s) => {
      let { component: l } = this, o = this.querySegEl(s), a = be(o), d = this.eventRange = a.eventRange;
      this.dragging.minDistance = l.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && this.component.props.eventSelection !== d.instance.instanceId);
    }, this.handleDragStart = (s) => {
      let { context: l } = this.component, o = this.eventRange;
      this.relevantEvents = Jt(l.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let a = this.querySegEl(s);
      this.draggingSegEl = a, this.draggingSeg = be(a), l.calendarApi.unselect(), l.emitter.trigger("eventResizeStart", {
        el: a,
        event: new T(l, o.def, o.instance),
        jsEvent: s.origEvent,
        view: l.viewApi
      });
    }, this.handleHitUpdate = (s, l, o) => {
      let { context: a } = this.component, d = this.relevantEvents, c = this.hitDragging.initialHit, h = this.eventRange.instance, f = null, u = null, m = !1, b = {
        affectedEvents: d,
        mutatedEvents: j(),
        isEvent: !0
      };
      s && (s.componentId === c.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(c, s) || (f = Kd(c, s, o.subjectEl.classList.contains("fc-event-resizer-start"), h.range))), f && (u = on(d, a.getCurrentData().eventUiBases, f, a), b.mutatedEvents = u, Ei(b, s.dateProfile, a) || (m = !0, f = null, u = null, b.mutatedEvents = null)), u ? a.dispatch({
        type: "SET_EVENT_RESIZE",
        state: b
      }) : a.dispatch({ type: "UNSET_EVENT_RESIZE" }), m ? Wt() : Gt(), l || (f && ft(c, s) && (f = null), this.validMutation = f, this.mutatedRelevantEvents = u);
    }, this.handleDragEnd = (s) => {
      let { context: l } = this.component, o = this.eventRange.def, a = this.eventRange.instance, d = new T(l, o, a), c = this.relevantEvents, h = this.mutatedRelevantEvents;
      if (l.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: d,
        jsEvent: s.origEvent,
        view: l.viewApi
      }), this.validMutation) {
        let f = new T(l, h.defs[o.defId], a ? h.instances[a.instanceId] : null);
        l.dispatch({
          type: "MERGE_EVENTS",
          eventStore: h
        });
        let u = {
          oldEvent: d,
          event: f,
          relatedEvents: re(h, l, a),
          revert() {
            l.dispatch({
              type: "MERGE_EVENTS",
              eventStore: c
              // the pre-change events
            });
          }
        };
        l.emitter.trigger("eventResize", Object.assign(Object.assign({}, u), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || _(0), endDelta: this.validMutation.endDelta || _(0), jsEvent: s.origEvent, view: l.viewApi })), l.emitter.trigger("eventChange", u);
      } else
        l.emitter.trigger("_noEventResize");
      this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
    };
    let { component: n } = e, r = this.dragging = new xe(e.el);
    r.pointer.selector = ".fc-event-resizer", r.touchScrollAllowed = !1, r.autoScroller.isEnabled = n.context.options.dragScroll;
    let i = this.hitDragging = new ut(this.dragging, an(e));
    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(e) {
    return H(e.subjectEl, ".fc-event");
  }
}
function Kd(t, e, n, r) {
  let i = t.context.dateEnv, s = t.dateSpan.range.start, l = e.dateSpan.range.start, o = he(s, l, i, t.largeUnit);
  if (n) {
    if (i.add(r.start, o) < r.end)
      return { startDelta: o };
  } else if (i.add(r.end, o) > r.start)
    return { endDelta: o };
  return null;
}
class eu {
  constructor(e) {
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (r) => {
      r.jsEvent && (this.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = (r) => {
      let i = this.context.options.unselectCancel, s = Ur(r.origEvent);
      this.matchesCancel = !!H(s, i), this.matchesEvent = !!H(s, Oe.SELECTOR);
    }, this.onDocumentPointerUp = (r) => {
      let { context: i } = this, { documentPointer: s } = this, l = i.getCurrentData();
      if (!s.wasTouchScroll) {
        if (l.dateSelection && // an existing date selection?
        !this.isRecentPointerDateSelect) {
          let o = i.options.unselectAuto;
          o && (!o || !this.matchesCancel) && i.calendarApi.unselect(r);
        }
        l.eventSelection && // an existing event selected?
        !this.matchesEvent && i.dispatch({ type: "UNSELECT_EVENT" });
      }
      this.isRecentPointerDateSelect = !1;
    };
    let n = this.documentPointer = new Wi(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }
}
const tu = {
  fixedMirrorParent: g
}, nu = {
  dateClick: g,
  eventDragStart: g,
  eventDragStop: g,
  eventDrop: g,
  eventResizeStart: g,
  eventResizeStop: g,
  eventResize: g,
  drop: g,
  eventReceive: g,
  eventLeave: g
};
cn.dataAttrPrefix = "";
var ru = X({
  name: "@fullcalendar/interaction",
  componentInteractions: [Qd, Yd, Oe, Jd],
  calendarInteractions: [eu],
  elementDraggingImpl: xe,
  optionRefiners: tu,
  listenerRefiners: nu
});
const iu = { id: "calendar" }, su = /* @__PURE__ */ Zi({
  __name: "index",
  props: {
    // 语言
    local: {
      type: String,
      default: "zh-cn"
    },
    //   视图模式
    initialView: {
      type: String,
      default: "dayGridMonth"
    },
    //   按钮文字
    buttonText: {
      type: Object,
      default: () => ({
        today: "今天",
        month: "月",
        week: "周",
        day: "日",
        prevYear: "上一年",
        nextYear: "下一年",
        prev: "上一月",
        next: "下一月"
      })
    },
    //   头部工具栏
    headerToolbar: {
      type: Object,
      default: () => ({
        start: "title",
        center: "",
        end: "prev today next"
      })
    },
    //   底部工具栏
    footerToolbar: {
      type: Object
    },
    //   事件源
    events: {
      type: Array,
      default: () => []
    },
    //   日历显示结束时间
    displayEventEnd: {
      type: Boolean,
      default: !0
    },
    //  自定义渲染日历内容
    eventContent: {
      type: Function
    }
  },
  emits: ["date-click", "event-click"],
  setup(t, { emit: e }) {
    const n = t;
    $i(() => {
      i();
    });
    let r = Xi(), i = () => {
      let s = document.getElementById("calendar");
      s && (r.value = new cd(s, {
        plugins: [Hd, ru],
        locale: n.local,
        initialView: n.initialView,
        buttonText: n.buttonText,
        headerToolbar: n.headerToolbar,
        footerToolbar: n.footerToolbar,
        displayEventEnd: n.displayEventEnd,
        eventSources: [
          {
            // 渲染日历的事件
            events(l, o) {
              n.events.length ? o(n.events) : o([]);
            }
          }
        ],
        //   点击日历上的某一天
        dateClick(l) {
          e("date-click", l);
        },
        //   点击日历上的事件
        eventClick(l) {
          e("event-click", l);
        },
        //   自定义渲染
        eventContent: n.eventContent
      }), r.value.render());
    };
    return Ji(
      () => n.events,
      (s) => {
        console.log(s), i();
      },
      { deep: !0 }
    ), (s, l) => (Ki(), es("div", iu));
  }
}), ou = {
  install(t) {
    t.component("tl-calendar", su);
  }
};
export {
  ou as default
};
