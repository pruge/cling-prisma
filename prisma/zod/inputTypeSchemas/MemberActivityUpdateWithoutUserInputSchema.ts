import type { Prisma } from '../../client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const MemberActivityUpdateWithoutUserInputSchema: z.ZodType<Prisma.MemberActivityUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default MemberActivityUpdateWithoutUserInputSchema;
