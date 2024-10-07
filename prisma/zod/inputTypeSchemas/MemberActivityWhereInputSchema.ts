import type { Prisma } from '../../client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { MemberRelationFilterSchema } from './MemberRelationFilterSchema';
import { MemberWhereInputSchema } from './MemberWhereInputSchema';

export const MemberActivityWhereInputSchema: z.ZodType<Prisma.MemberActivityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MemberActivityWhereInputSchema),z.lazy(() => MemberActivityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberActivityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberActivityWhereInputSchema),z.lazy(() => MemberActivityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => MemberRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
}).strict();

export default MemberActivityWhereInputSchema;
