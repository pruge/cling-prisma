import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberActivityWhereInputSchema } from './MemberActivityWhereInputSchema';

export const MemberActivityListRelationFilterSchema: z.ZodType<Prisma.MemberActivityListRelationFilter> = z.object({
  every: z.lazy(() => MemberActivityWhereInputSchema).optional(),
  some: z.lazy(() => MemberActivityWhereInputSchema).optional(),
  none: z.lazy(() => MemberActivityWhereInputSchema).optional()
}).strict();

export default MemberActivityListRelationFilterSchema;
