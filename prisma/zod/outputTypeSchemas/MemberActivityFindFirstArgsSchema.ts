import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivityIncludeSchema } from '../inputTypeSchemas/MemberActivityIncludeSchema'
import { MemberActivityWhereInputSchema } from '../inputTypeSchemas/MemberActivityWhereInputSchema'
import { MemberActivityOrderByWithRelationInputSchema } from '../inputTypeSchemas/MemberActivityOrderByWithRelationInputSchema'
import { MemberActivityWhereUniqueInputSchema } from '../inputTypeSchemas/MemberActivityWhereUniqueInputSchema'
import { MemberActivityScalarFieldEnumSchema } from '../inputTypeSchemas/MemberActivityScalarFieldEnumSchema'
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MemberActivitySelectSchema: z.ZodType<Prisma.MemberActivitySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict()

export const MemberActivityFindFirstArgsSchema: z.ZodType<Prisma.MemberActivityFindFirstArgs> = z.object({
  select: MemberActivitySelectSchema.optional(),
  include: MemberActivityIncludeSchema.optional(),
  where: MemberActivityWhereInputSchema.optional(),
  orderBy: z.union([ MemberActivityOrderByWithRelationInputSchema.array(),MemberActivityOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberActivityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberActivityScalarFieldEnumSchema,MemberActivityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default MemberActivityFindFirstArgsSchema;
