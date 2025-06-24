import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { e as eventHandler, g as getRequestURL, a as getRequestWebStream } from '../../../nitro/nitro.mjs';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'unhead/utils';
import 'vue';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'better-sqlite3';

// src/shared.ts
var defaultEndpoint = "/api/trpc";

function toWebRequest(event) {
  if ("request" in event) {
    return event.request;
  }
  return toWebRequestOriginal(event);
}
function toWebRequestOriginal(event) {
  return event.web?.request || new Request(getRequestURL(event), {
    duplex: "half",
    method: event.method,
    headers: event.headers,
    body: getRequestWebStream(event)
  });
}

// src/server/createTRPCNuxtHandler.ts
function createTRPCNuxtHandler(opts) {
  return eventHandler(async (event) => {
    const createContext = async (fetchCreateContextOptions) => {
      return await opts.createContext?.(event, fetchCreateContextOptions);
    };
    const httpResponse = await fetchRequestHandler({
      ...opts,
      endpoint: opts.endpoint || defaultEndpoint,
      router: opts.router,
      req: toWebRequest(event),
      createContext
    });
    return httpResponse;
  });
}

// src/server/index.ts
var createNuxtApiHandler = createTRPCNuxtHandler;

const t = initTRPC.context().create();
const publicProcedure = t.procedure;
const router = t.router;
t.middleware;

const prisma = new PrismaClient();
const postRouter = router({
  create: publicProcedure.input(z.object({
    content: z.string(),
    imgUrl: z.string().nullable(),
    title: z.string()
  })).mutation(async ({ input }) => {
    var _a;
    return prisma.post.create({
      data: {
        content: input.content,
        imgUrl: (_a = input.imgUrl) != null ? _a : null,
        title: input.title
      }
    });
  }),
  getAll: publicProcedure.input(
    z.object({
      limit: z.number().min(1).max(100).nullish()
    }).nullish()
  ).query(async ({ input }) => {
    var _a;
    return prisma.post.findMany({
      orderBy: {
        createdAt: "desc"
      },
      take: (_a = input == null ? void 0 : input.limit) != null ? _a : void 0
    });
  }),
  getById: publicProcedure.input(z.number().int().positive("Invalid UUID Format")).query(async ({ input }) => {
    const post = await prisma.post.findUnique({
      where: { id: input }
    });
    return post;
  })
});

const appRouter = router({
  post: postRouter
});

const createContext = () => ({});

const _trpc_ = createNuxtApiHandler({
  router: appRouter,
  createContext
});

export { _trpc_ as default };
//# sourceMappingURL=_trpc_.mjs.map
