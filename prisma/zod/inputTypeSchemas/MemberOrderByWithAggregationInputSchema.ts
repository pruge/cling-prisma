import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MemberCountOrderByAggregateInputSchema } from './MemberCountOrderByAggregateInputSchema';
import { MemberMaxOrderByAggregateInputSchema } from './MemberMaxOrderByAggregateInputSchema';
import { MemberMinOrderByAggregateInputSchema } from './MemberMinOrderByAggregateInputSchema';

export const MemberOrderByWithAggregationInputSchema: z.ZodType<Prisma.MemberOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MemberCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MemberMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MemberMinOrderByAggregateInputSchema).optional()
}).strict();

export default MemberOrderByWithAggregationInputSchema;
