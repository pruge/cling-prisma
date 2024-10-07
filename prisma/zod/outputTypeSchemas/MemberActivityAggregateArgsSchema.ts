import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivityWhereInputSchema } from '../inputTypeSchemas/MemberActivityWhereInputSchema'
import { MemberActivityOrderByWithRelationInputSchema } from '../inputTypeSchemas/MemberActivityOrderByWithRelationInputSchema'
import { MemberActivityWhereUniqueInputSchema } from '../inputTypeSchemas/MemberActivityWhereUniqueInputSchema'

export const MemberActivityAggregateArgsSchema: z.ZodType<Prisma.MemberActivityAggregateArgs> = z.object({
  where: MemberActivityWhereInputSchema.optional(),
  orderBy: z.union([ MemberActivityOrderByWithRelationInputSchema.array(),MemberActivityOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberActivityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MemberActivityAggregateArgsSchema;
