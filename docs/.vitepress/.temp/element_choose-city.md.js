import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const chooseCity_md_vue_type_style_index_0_lang = "";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"element/choose-city.md","filePath":"element/choose-city.md"}');
const _sfc_main = { name: "element/choose-city.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_tl_choose_city = resolveComponent("tl-choose-city");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="城市选择组件" tabindex="-1">城市选择组件 <a class="header-anchor" href="#城市选择组件" aria-label="Permalink to &quot;城市选择组件&quot;">​</a></h2><h3 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> chooseCity </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">tl-element-plus/chooseCity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">tl-element-plus/chooseCity/style.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span></code></pre></div><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><div>`);
  _push(ssrRenderComponent(_component_tl_choose_city, null, null, _parent));
  _push(`</div><h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">tl-choose-city</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">tl-choose-city</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("element/choose-city.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chooseCity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chooseCity as default
};
