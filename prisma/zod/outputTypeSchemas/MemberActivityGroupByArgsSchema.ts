import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivityWhereInputSchema } from '../inputTypeSchemas/MemberActivityWhereInputSchema'
import { MemberActivityOrderByWithAggregationInputSchema } from '../inputTypeSchemas/MemberActivityOrderByWithAggregationInputSchema'
import { MemberActivityScalarFieldEnumSchema } from '../inputTypeSchemas/MemberActivityScalarFieldEnumSchema'
import { MemberActivityScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/MemberActivityScalarWhereWithAggregatesInputSchema'

export const MemberActivityGroupByArgsSchema: z.ZodType<Prisma.MemberActivityGroupByArgs> = z.object({
  where: MemberActivityWhereInputSchema.optional(),
  orderBy: z.union([ MemberActivityOrderByWithAggregationInputSchema.array(),MemberActivityOrderByWithAggregationInputSchema ]).optional(),
  by: MemberActivityScalarFieldEnumSchema.array(),
  having: MemberActivityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MemberActivityGroupByArgsSchema;
