import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivityFindManyArgsSchema } from "../outputTypeSchemas/MemberActivityFindManyArgsSchema"
import { MemberCountOutputTypeArgsSchema } from "../outputTypeSchemas/MemberCountOutputTypeArgsSchema"

export const MemberIncludeSchema: z.ZodType<Prisma.MemberInclude> = z.object({
  MemberActivity: z.union([z.boolean(),z.lazy(() => MemberActivityFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MemberCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default MemberIncludeSchema;
