import type { Prisma } from '../../client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const MemberActivityScalarWhereInputSchema: z.ZodType<Prisma.MemberActivityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MemberActivityScalarWhereInputSchema),z.lazy(() => MemberActivityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberActivityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberActivityScalarWhereInputSchema),z.lazy(() => MemberActivityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default MemberActivityScalarWhereInputSchema;
