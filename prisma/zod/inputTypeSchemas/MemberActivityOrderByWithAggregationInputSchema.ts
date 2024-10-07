import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MemberActivityCountOrderByAggregateInputSchema } from './MemberActivityCountOrderByAggregateInputSchema';
import { MemberActivityMaxOrderByAggregateInputSchema } from './MemberActivityMaxOrderByAggregateInputSchema';
import { MemberActivityMinOrderByAggregateInputSchema } from './MemberActivityMinOrderByAggregateInputSchema';

export const MemberActivityOrderByWithAggregationInputSchema: z.ZodType<Prisma.MemberActivityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MemberActivityCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MemberActivityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MemberActivityMinOrderByAggregateInputSchema).optional()
}).strict();

export default MemberActivityOrderByWithAggregationInputSchema;
