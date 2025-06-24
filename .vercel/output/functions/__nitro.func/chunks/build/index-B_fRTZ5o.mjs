import { _ as _sfc_main$1 } from './cardView-BwGlE2bw.mjs';
import { defineComponent, watchEffect, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { u as useNuxtApp } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'better-sqlite3';
import 'vue-router';
import '@prisma/client';
import '@trpc/client';
import '@trpc/server';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $trpcClient } = useNuxtApp();
    const { data: posts } = $trpcClient.post.getAll.useQuery({ limit: 8 });
    watchEffect(() => {
      console.log("Fetched posts", posts.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cardView = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="absolute top-0 z-0 w-full h-80 bg-slate-700 overflow-hidden flex flex-col items-center justify-center text-center"><h1 class="text-white text-4xl font-semibold font[&#39;Inter&#39;] mb-8"> Weclome To Blogie! </h1><p class="text-white text-2xl font-normal font[&#39;Inter&#39;] max-w-xl px-4"> Discover, write and learn from the latest blogs </p></section><div class="mt-60"><section class="w-full bg-slate-200 overflow-hidden py-16"><div class="max-w-screen-xl mx-auto px-8"><h2 class="text-black text-3xl font-bold font[&#39;Inter&#39;] mb-8"> Discover Latest Blogs </h2>`);
      if (unref(posts)) {
        _push(`<div class="grid grid-cols-2 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4 gap-8"><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          var _a, _b, _c;
          _push(ssrRenderComponent(_component_cardView, {
            key: post.id,
            "title-text": (_a = post.title) != null ? _a : "",
            subtitle: (_b = post.content) != null ? _b : "",
            "image-url": (_c = post.imgUrl) != null ? _c : "",
            "blog-id": post.id
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B_fRTZ5o.mjs.map
