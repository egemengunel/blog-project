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
      getAll: publicProcedure.query(async () => {
                return prisma.post.findMany({
                    orderBy: {
                        createdAt: 'desc',
                    },
                })
            })  
})