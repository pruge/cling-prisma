import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';
import { MemberCreateWithoutMemberActivityInputSchema } from './MemberCreateWithoutMemberActivityInputSchema';
import { MemberUncheckedCreateWithoutMemberActivityInputSchema } from './MemberUncheckedCreateWithoutMemberActivityInputSchema';

export const MemberCreateOrConnectWithoutMemberActivityInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutMemberActivityInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutMemberActivityInputSchema),z.lazy(() => MemberUncheckedCreateWithoutMemberActivityInputSchema) ]),
}).strict();

export default MemberCreateOrConnectWithoutMemberActivityInputSchema;
