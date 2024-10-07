import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivityIncludeSchema } from '../inputTypeSchemas/MemberActivityIncludeSchema'
import { MemberActivityWhereUniqueInputSchema } from '../inputTypeSchemas/MemberActivityWhereUniqueInputSchema'
import { MemberActivityCreateInputSchema } from '../inputTypeSchemas/MemberActivityCreateInputSchema'
import { MemberActivityUncheckedCreateInputSchema } from '../inputTypeSchemas/MemberActivityUncheckedCreateInputSchema'
import { MemberActivityUpdateInputSchema } from '../inputTypeSchemas/MemberActivityUpdateInputSchema'
import { MemberActivityUncheckedUpdateInputSchema } from '../inputTypeSchemas/MemberActivityUncheckedUpdateInputSchema'
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MemberActivitySelectSchema: z.ZodType<Prisma.MemberActivitySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict()

export const MemberActivityUpsertArgsSchema: z.ZodType<Prisma.MemberActivityUpsertArgs> = z.object({
  select: MemberActivitySelectSchema.optional(),
  include: MemberActivityIncludeSchema.optional(),
  where: MemberActivityWhereUniqueInputSchema,
  create: z.union([ MemberActivityCreateInputSchema,MemberActivityUncheckedCreateInputSchema ]),
  update: z.union([ MemberActivityUpdateInputSchema,MemberActivityUncheckedUpdateInputSchema ]),
}).strict() ;

export default MemberActivityUpsertArgsSchema;
