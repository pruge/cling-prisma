import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberIncludeSchema } from '../inputTypeSchemas/MemberIncludeSchema'
import { MemberCreateInputSchema } from '../inputTypeSchemas/MemberCreateInputSchema'
import { MemberUncheckedCreateInputSchema } from '../inputTypeSchemas/MemberUncheckedCreateInputSchema'
import { MemberActivityFindManyArgsSchema } from "../outputTypeSchemas/MemberActivityFindManyArgsSchema"
import { MemberCountOutputTypeArgsSchema } from "../outputTypeSchemas/MemberCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MemberSelectSchema: z.ZodType<Prisma.MemberSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  tag: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  MemberActivity: z.union([z.boolean(),z.lazy(() => MemberActivityFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MemberCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MemberCreateArgsSchema: z.ZodType<Prisma.MemberCreateArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  data: z.union([ MemberCreateInputSchema,MemberUncheckedCreateInputSchema ]),
}).strict() ;

export default MemberCreateArgsSchema;
