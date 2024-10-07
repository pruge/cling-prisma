import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberArgsSchema } from "../outputTypeSchemas/MemberArgsSchema"

export const MemberActivityIncludeSchema: z.ZodType<Prisma.MemberActivityInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict()

export default MemberActivityIncludeSchema;
