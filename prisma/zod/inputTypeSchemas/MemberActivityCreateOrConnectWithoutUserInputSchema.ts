import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberActivityWhereUniqueInputSchema } from './MemberActivityWhereUniqueInputSchema';
import { MemberActivityCreateWithoutUserInputSchema } from './MemberActivityCreateWithoutUserInputSchema';
import { MemberActivityUncheckedCreateWithoutUserInputSchema } from './MemberActivityUncheckedCreateWithoutUserInputSchema';

export const MemberActivityCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.MemberActivityCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => MemberActivityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberActivityCreateWithoutUserInputSchema),z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default MemberActivityCreateOrConnectWithoutUserInputSchema;
