import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberActivityWhereInputSchema } from './MemberActivityWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { MemberRelationFilterSchema } from './MemberRelationFilterSchema';
import { MemberWhereInputSchema } from './MemberWhereInputSchema';

export const MemberActivityWhereUniqueInputSchema: z.ZodType<Prisma.MemberActivityWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => MemberActivityWhereInputSchema),z.lazy(() => MemberActivityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberActivityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberActivityWhereInputSchema),z.lazy(() => MemberActivityWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => MemberRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
}).strict());

export default MemberActivityWhereUniqueInputSchema;
