import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { b as useRoute, u as useNuxtApp } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { $trpcClient } = useNuxtApp();
    const blogIdParam = route.params.id;
    const blogId = computed(() => {
      if (Array.isArray(blogIdParam)) {
        return parseInt(blogIdParam[0], 10);
      }
      return parseInt(blogIdParam, 10);
    });
    const {
      data: blogPost,
      pending,
      error
    } = $trpcClient.post.getById.useQuery(blogId.value, {
      watch: [blogId],
      server: true
    });
    const formattedContent = computed(() => {
      if (blogPost.value && blogPost.value.content) {
        return blogPost.value.content.replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute top-0 z-0 w-full bg-slate-200 overflow-hidden py-16" }, _attrs))}><div class="max-w-screen-xl mx-auto px-8"><h1 class="text-black text-4xl font-bold mb-8 pt-8">${ssrInterpolate(((_a = unref(blogPost)) == null ? void 0 : _a.title) || "Loading...")}</h1><div class="w-full aspect-[5/2] max-h-96 rounded-3xl overflow-hidden mb-8">`);
      if ((_b = unref(blogPost)) == null ? void 0 : _b.imgUrl) {
        _push(`<img${ssrRenderAttr("src", unref(blogPost).imgUrl)}${ssrRenderAttr("alt", unref(blogPost).title || "Blog Post Image")} class="object-cover w-full h-full">`);
      } else {
        _push(`<div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600"> Image Not Available </div>`);
      }
      _push(`</div><div class="w-full min-h-[256px] bg-slate-700 rounded-3xl p-6 text-white text-center font-normal overflow-hidden">`);
      if (unref(pending)) {
        _push(`<p class="text-gray-400">Loading blog post content...</p>`);
      } else if (unref(blogPost) && unref(formattedContent)) {
        _push(`<p>${(_a2 = unref(formattedContent)) != null ? _a2 : ""}</p>`);
      } else if (!unref(blogPost) && !unref(pending) && unref(error)) {
        _push(`<p class="text-red-400"> Error fetching blog post: ${ssrInterpolate(unref(error).message)}</p>`);
      } else if (!unref(blogPost) && !unref(pending)) {
        _push(`<p class="text-gray-400"> Blog post not found. </p>`);
      } else {
        _push(`<p class="text-gray-400">No content to display.</p>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-4RMxstRT.mjs.map
