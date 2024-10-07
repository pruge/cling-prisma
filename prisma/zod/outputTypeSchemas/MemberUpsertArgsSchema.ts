import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberIncludeSchema } from '../inputTypeSchemas/MemberIncludeSchema'
import { MemberWhereUniqueInputSchema } from '../inputTypeSchemas/MemberWhereUniqueInputSchema'
import { MemberCreateInputSchema } from '../inputTypeSchemas/MemberCreateInputSchema'
import { MemberUncheckedCreateInputSchema } from '../inputTypeSchemas/MemberUncheckedCreateInputSchema'
import { MemberUpdateInputSchema } from '../inputTypeSchemas/MemberUpdateInputSchema'
import { MemberUncheckedUpdateInputSchema } from '../inputTypeSchemas/MemberUncheckedUpdateInputSchema'
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

export const MemberUpsertArgsSchema: z.ZodType<Prisma.MemberUpsertArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema,
  create: z.union([ MemberCreateInputSchema,MemberUncheckedCreateInputSchema ]),
  update: z.union([ MemberUpdateInputSchema,MemberUncheckedUpdateInputSchema ]),
}).strict() ;

export default MemberUpsertArgsSchema;
