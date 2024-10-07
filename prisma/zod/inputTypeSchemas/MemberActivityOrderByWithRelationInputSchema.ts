import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MemberOrderByWithRelationInputSchema } from './MemberOrderByWithRelationInputSchema';

export const MemberActivityOrderByWithRelationInputSchema: z.ZodType<Prisma.MemberActivityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => MemberOrderByWithRelationInputSchema).optional()
}).strict();

export default MemberActivityOrderByWithRelationInputSchema;
