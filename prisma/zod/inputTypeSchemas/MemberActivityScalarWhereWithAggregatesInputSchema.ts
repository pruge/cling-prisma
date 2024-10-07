import type { Prisma } from '../../client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const MemberActivityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MemberActivityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MemberActivityScalarWhereWithAggregatesInputSchema),z.lazy(() => MemberActivityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberActivityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberActivityScalarWhereWithAggregatesInputSchema),z.lazy(() => MemberActivityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default MemberActivityScalarWhereWithAggregatesInputSchema;
