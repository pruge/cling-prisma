import type { Prisma } from '../../client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { MemberActivityUncheckedCreateNestedManyWithoutUserInputSchema } from './MemberActivityUncheckedCreateNestedManyWithoutUserInputSchema';

export const MemberUncheckedCreateInputSchema: z.ZodType<Prisma.MemberUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  tag: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  MemberActivity: z.lazy(() => MemberActivityUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default MemberUncheckedCreateInputSchema;
