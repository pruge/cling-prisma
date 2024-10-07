import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"

export const MemberActivitySelectSchema: z.ZodType<Prisma.MemberActivitySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict()

export default MemberActivitySelectSchema;
