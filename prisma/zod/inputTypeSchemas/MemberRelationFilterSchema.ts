import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberWhereInputSchema } from './MemberWhereInputSchema';

export const MemberRelationFilterSchema: z.ZodType<Prisma.MemberRelationFilter> = z.object({
  is: z.lazy(() => MemberWhereInputSchema).optional(),
  isNot: z.lazy(() => MemberWhereInputSchema).optional()
}).strict();

export default MemberRelationFilterSchema;
