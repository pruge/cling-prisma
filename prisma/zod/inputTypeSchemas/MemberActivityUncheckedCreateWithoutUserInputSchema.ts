import type { Prisma } from '../../client';

import { z } from 'zod';

export const MemberActivityUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MemberActivityUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional()
}).strict();

export default MemberActivityUncheckedCreateWithoutUserInputSchema;
