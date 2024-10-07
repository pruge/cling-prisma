import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MemberActivityCountOrderByAggregateInputSchema: z.ZodType<Prisma.MemberActivityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MemberActivityCountOrderByAggregateInputSchema;
