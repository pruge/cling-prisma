import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivityFindManyArgsSchema } from "../outputTypeSchemas/MemberActivityFindManyArgsSchema"
import { MemberCountOutputTypeArgsSchema } from "../outputTypeSchemas/MemberCountOutputTypeArgsSchema"

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

export default MemberSelectSchema;
