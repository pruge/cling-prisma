import type { Prisma } from '../../client';

import { z } from 'zod';

export const MemberActivityCreateManyInputSchema: z.ZodType<Prisma.MemberActivityCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string()
}).strict();

export default MemberActivityCreateManyInputSchema;
