import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberActivityWhereUniqueInputSchema } from './MemberActivityWhereUniqueInputSchema';
import { MemberActivityUpdateWithoutUserInputSchema } from './MemberActivityUpdateWithoutUserInputSchema';
import { MemberActivityUncheckedUpdateWithoutUserInputSchema } from './MemberActivityUncheckedUpdateWithoutUserInputSchema';

export const MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MemberActivityUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MemberActivityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MemberActivityUpdateWithoutUserInputSchema),z.lazy(() => MemberActivityUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema;
