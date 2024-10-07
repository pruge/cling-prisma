import type { Prisma } from '../../client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { MemberActivityCreateNestedManyWithoutUserInputSchema } from './MemberActivityCreateNestedManyWithoutUserInputSchema';

export const MemberCreateInputSchema: z.ZodType<Prisma.MemberCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  tag: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  MemberActivity: z.lazy(() => MemberActivityCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default MemberCreateInputSchema;
