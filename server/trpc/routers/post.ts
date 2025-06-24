import { z } from 'zod'
import { router, publicProcedure } from '../trpc'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const postRouter = router({
    create: publicProcedure
        .input(z.object({
            content: z.string(),
            imgUrl: z.string().nullable(),
            title: z.string(),
        }))
        .mutation(async ({ input }) => {
            return prisma.post.create({
                data: {
                    content: input.content,
                    imgUrl: input.imgUrl ?? null,
                    title: input.title
                },
            })
        }),
    getAll: publicProcedure
        .input(
            z.object({
                limit: z.number().min(1).max(100).nullish(),
            }).nullish()
        )
        
        .query(async ({ input }) => {
            
            return prisma.post.findMany({
                orderBy: {
                    createdAt: 'desc',
                },
                take: input?.limit ?? undefined,
            });
        }),
    
    getById: publicProcedure
        .input(z.number().int().positive('Invalid UUID Format'))
        .query(async ({ input }) => {
            const post = await prisma.post.findUnique({
                where: { id: input },
            });
            return post;
        }),

});