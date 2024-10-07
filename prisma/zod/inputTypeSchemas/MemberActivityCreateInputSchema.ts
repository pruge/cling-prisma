import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberCreateNestedOneWithoutMemberActivityInputSchema } from './MemberCreateNestedOneWithoutMemberActivityInputSchema';

export const MemberActivityCreateInputSchema: z.ZodType<Prisma.MemberActivityCreateInput> = z.object({
  id: z.string().optional(),
  user: z.lazy(() => MemberCreateNestedOneWithoutMemberActivityInputSchema)
}).strict();

export default MemberActivityCreateInputSchema;
