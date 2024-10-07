import type { Prisma } from '../../client';

import { z } from 'zod';

export const MemberActivityUncheckedCreateInputSchema: z.ZodType<Prisma.MemberActivityUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string()
}).strict();

export default MemberActivityUncheckedCreateInputSchema;
