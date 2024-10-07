import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberActivityCreateManyUserInputSchema } from './MemberActivityCreateManyUserInputSchema';

export const MemberActivityCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.MemberActivityCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MemberActivityCreateManyUserInputSchema),z.lazy(() => MemberActivityCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default MemberActivityCreateManyUserInputEnvelopeSchema;
