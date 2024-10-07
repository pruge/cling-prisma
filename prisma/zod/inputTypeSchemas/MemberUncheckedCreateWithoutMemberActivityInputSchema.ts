import type { Prisma } from '../../client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const MemberUncheckedCreateWithoutMemberActivityInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutMemberActivityInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  tag: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default MemberUncheckedCreateWithoutMemberActivityInputSchema;
