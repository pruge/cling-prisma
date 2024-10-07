import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberActivityScalarWhereInputSchema } from './MemberActivityScalarWhereInputSchema';
import { MemberActivityUpdateManyMutationInputSchema } from './MemberActivityUpdateManyMutationInputSchema';
import { MemberActivityUncheckedUpdateManyWithoutUserInputSchema } from './MemberActivityUncheckedUpdateManyWithoutUserInputSchema';

export const MemberActivityUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.MemberActivityUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => MemberActivityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MemberActivityUpdateManyMutationInputSchema),z.lazy(() => MemberActivityUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default MemberActivityUpdateManyWithWhereWithoutUserInputSchema;
