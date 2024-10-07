import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivitySelectSchema } from '../inputTypeSchemas/MemberActivitySelectSchema';
import { MemberActivityIncludeSchema } from '../inputTypeSchemas/MemberActivityIncludeSchema';

export const MemberActivityArgsSchema: z.ZodType<Prisma.MemberActivityDefaultArgs> = z.object({
  select: z.lazy(() => MemberActivitySelectSchema).optional(),
  include: z.lazy(() => MemberActivityIncludeSchema).optional(),
}).strict();

export default MemberActivityArgsSchema;
