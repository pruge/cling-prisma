import type { Prisma } from '../../client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const MemberActivityUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.MemberActivityUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default MemberActivityUncheckedUpdateWithoutUserInputSchema;
