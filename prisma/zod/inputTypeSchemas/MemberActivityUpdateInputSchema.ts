import type { Prisma } from '../../client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema } from './MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema';

export const MemberActivityUpdateInputSchema: z.ZodType<Prisma.MemberActivityUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema).optional()
}).strict();

export default MemberActivityUpdateInputSchema;
