import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MemberActivityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MemberActivityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MemberActivityMaxOrderByAggregateInputSchema;
