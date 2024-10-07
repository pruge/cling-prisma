import type { Prisma } from '../../client';

import { z } from 'zod';

export const MemberActivityCreateWithoutUserInputSchema: z.ZodType<Prisma.MemberActivityCreateWithoutUserInput> = z.object({
  id: z.string().optional()
}).strict();

export default MemberActivityCreateWithoutUserInputSchema;
