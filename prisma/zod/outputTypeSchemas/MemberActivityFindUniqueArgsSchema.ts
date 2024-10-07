import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivityIncludeSchema } from '../inputTypeSchemas/MemberActivityIncludeSchema'
import { MemberActivityWhereUniqueInputSchema } from '../inputTypeSchemas/MemberActivityWhereUniqueInputSchema'
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MemberActivitySelectSchema: z.ZodType<Prisma.MemberActivitySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict()

export const MemberActivityFindUniqueArgsSchema: z.ZodType<Prisma.MemberActivityFindUniqueArgs> = z.object({
  select: MemberActivitySelectSchema.optional(),
  include: MemberActivityIncludeSchema.optional(),
  where: MemberActivityWhereUniqueInputSchema,
}).strict() ;

export default MemberActivityFindUniqueArgsSchema;
