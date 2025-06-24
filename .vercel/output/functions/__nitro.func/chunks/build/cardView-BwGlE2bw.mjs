import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cardView",
  __ssrInlineRender: true,
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    titleText: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    blogId: {
      type: [String, Number],
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/blog/${__props.blogId}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-64 h-72 rounded-2xl overflow-hidden shadow-lg"${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: "url('" + __props.imageUrl + "')" })}"${_scopeId}></div><div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"${_scopeId}><div class="relative z-10 flex flex-col justify-end h-full p-4"${_scopeId}><h3 class="text-white text-base font-bold font[&#39;Inter&#39;] line-clamp-2 mb-2"${_scopeId}>${ssrInterpolate(props.titleText)}</h3><p class="text-white text-xs font-normal font[&#39;Inter&#39;] line-clamp-2"${_scopeId}>${ssrInterpolate(props.subtitle)}</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative w-64 h-72 rounded-2xl overflow-hidden shadow-lg" }, [
                createVNode("div", {
                  class: "absolute inset-0 bg-cover bg-center",
                  style: { backgroundImage: "url('" + __props.imageUrl + "')" }
                }, null, 4),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black to-transparent" }, [
                  createVNode("div", { class: "relative z-10 flex flex-col justify-end h-full p-4" }, [
                    createVNode("h3", { class: "text-white text-base font-bold font['Inter'] line-clamp-2 mb-2" }, toDisplayString(props.titleText), 1),
                    createVNode("p", { class: "text-white text-xs font-normal font['Inter'] line-clamp-2" }, toDisplayString(props.subtitle), 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cardView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=cardView-BwGlE2bw.mjs.map
