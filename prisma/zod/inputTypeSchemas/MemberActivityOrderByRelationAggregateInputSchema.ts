import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MemberActivityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MemberActivityOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MemberActivityOrderByRelationAggregateInputSchema;
