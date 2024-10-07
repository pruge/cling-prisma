import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MemberActivityOrderByRelationAggregateInputSchema } from './MemberActivityOrderByRelationAggregateInputSchema';

export const MemberOrderByWithRelationInputSchema: z.ZodType<Prisma.MemberOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  MemberActivity: z.lazy(() => MemberActivityOrderByRelationAggregateInputSchema).optional()
}).strict();

export default MemberOrderByWithRelationInputSchema;
