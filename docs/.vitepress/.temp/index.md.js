import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"text":"TlUI","tagline":"对element-plus组件库进行封装","image":{"alt":"VitePress"},"actions":[{"theme":"brand","text":"进入文档","link":"/guide/introduce"},{"theme":"alt","text":"演示地址","link":"https://tinglinzh.github.io/tl-element-plus/#/"}]},"features":[{"title":"超便捷","details":"开箱即用的组件"},{"title":"高可配","details":"高度可自配置的组件"},{"title":"易维护","details":"维护组件就是维护JSON对象"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
