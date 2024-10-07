import { z } from 'zod';
import type { Prisma } from '../../client';

export const MemberCountOutputTypeSelectSchema: z.ZodType<Prisma.MemberCountOutputTypeSelect> = z.object({
  MemberActivity: z.boolean().optional(),
}).strict();

export default MemberCountOutputTypeSelectSchema;
