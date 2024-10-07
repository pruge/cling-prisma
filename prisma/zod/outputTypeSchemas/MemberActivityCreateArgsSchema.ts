import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivityIncludeSchema } from '../inputTypeSchemas/MemberActivityIncludeSchema'
import { MemberActivityCreateInputSchema } from '../inputTypeSchemas/MemberActivityCreateInputSchema'
import { MemberActivityUncheckedCreateInputSchema } from '../inputTypeSchemas/MemberActivityUncheckedCreateInputSchema'
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MemberActivitySelectSchema: z.ZodType<Prisma.MemberActivitySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict()

export const MemberActivityCreateArgsSchema: z.ZodType<Prisma.MemberActivityCreateArgs> = z.object({
  select: MemberActivitySelectSchema.optional(),
  include: MemberActivityIncludeSchema.optional(),
  data: z.union([ MemberActivityCreateInputSchema,MemberActivityUncheckedCreateInputSchema ]),
}).strict() ;

export default MemberActivityCreateArgsSchema;
