import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberActivityWhereUniqueInputSchema } from './MemberActivityWhereUniqueInputSchema';
import { MemberActivityUpdateWithoutUserInputSchema } from './MemberActivityUpdateWithoutUserInputSchema';
import { MemberActivityUncheckedUpdateWithoutUserInputSchema } from './MemberActivityUncheckedUpdateWithoutUserInputSchema';
import { MemberActivityCreateWithoutUserInputSchema } from './MemberActivityCreateWithoutUserInputSchema';
import { MemberActivityUncheckedCreateWithoutUserInputSchema } from './MemberActivityUncheckedCreateWithoutUserInputSchema';

export const MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MemberActivityUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MemberActivityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MemberActivityUpdateWithoutUserInputSchema),z.lazy(() => MemberActivityUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => MemberActivityCreateWithoutUserInputSchema),z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema;
