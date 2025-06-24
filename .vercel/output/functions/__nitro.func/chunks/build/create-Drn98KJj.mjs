import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const { $trpcClient, $supabase } = useNuxtApp();
    const isSubmitting = ref(false);
    const entryText = ref("");
    const titleText = ref("");
    const preview = ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="absolute top-0 z-0 w-full bg-slate-200 overflow-hidden py-16"><div class="max-w-screen-xl mx-auto px-8"><div class="flex items-center justify-between"><h1 class="text-black text-3xl font-bold mb-8 pt-8">Add an Entry</h1><button${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} class="w-44 h-14 rounded-full bg-slate-500 text-white text-xl font-medium hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(unref(isSubmitting) ? "Posting" : "Add")}</button></div><label for="cover" class="w-full aspect-[5/2] max-h-80 rounded-3xl bg-slate-800 flex flex-col items-center justify-center text-white cursor-pointer relative overflow-hidden">`);
      if (unref(preview)) {
        _push(`<img${ssrRenderAttr("src", unref(preview))} alt="preview" class="object-cover w-full h-full">`);
      } else {
        _push(`<!--[--><div class="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center text-4xl mb-4"> + </div><p class="text-center px-6">Add an image for your entry</p><!--]-->`);
      }
      _push(`<input id="cover" type="file" accept="image/*" class="hidden"></label><div class="w-full h-32 bg-slate-400 rounded-3xl overflow-hidden mt-8"><textarea class="w-full h-full p-2 bg-transparent text=white placeholder-gray-600 focus:outline-none resize-none" placeholder="Enter Title">${ssrInterpolate(unref(titleText))}</textarea></div><div class="w-full h-64 bg-slate-600 rounded-3xl overflow-hidden mt-8"><textarea class="w-full h-full p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none" placeholder="Enter Your Text Here">${ssrInterpolate(unref(entryText))}</textarea></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-Drn98KJj.mjs.map
