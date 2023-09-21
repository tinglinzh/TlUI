import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduce.md","filePath":"guide/introduce.md"}');
const _sfc_main = { name: "guide/introduce.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>tl-element-plus 是基于 element-plus 组件库进行的二次封装 我们封装了一些常用的组件库，其中借鉴了其他一些开发者对 element-plus 的二次封装，在他们的基础上进行了改进，达到真真的开箱即用。 <br> 在使用 tl-element-plus 之间，请确保你学习使用过 element-plus。<a href="https://element-plus.org/zh-CN/guide/installation.html" target="_blank" rel="noreferrer">element-plus 使用指南</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/introduce.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduce = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  introduce as default
};
