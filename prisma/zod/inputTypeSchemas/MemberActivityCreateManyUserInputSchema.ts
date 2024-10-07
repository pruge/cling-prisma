import type { Prisma } from '../../client';

import { z } from 'zod';

export const MemberActivityCreateManyUserInputSchema: z.ZodType<Prisma.MemberActivityCreateManyUserInput> = z.object({
  id: z.string().optional()
}).strict();

export default MemberActivityCreateManyUserInputSchema;
