import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberUpdateWithoutMemberActivityInputSchema } from './MemberUpdateWithoutMemberActivityInputSchema';
import { MemberUncheckedUpdateWithoutMemberActivityInputSchema } from './MemberUncheckedUpdateWithoutMemberActivityInputSchema';
import { MemberCreateWithoutMemberActivityInputSchema } from './MemberCreateWithoutMemberActivityInputSchema';
import { MemberUncheckedCreateWithoutMemberActivityInputSchema } from './MemberUncheckedCreateWithoutMemberActivityInputSchema';
import { MemberWhereInputSchema } from './MemberWhereInputSchema';

export const MemberUpsertWithoutMemberActivityInputSchema: z.ZodType<Prisma.MemberUpsertWithoutMemberActivityInput> = z.object({
  update: z.union([ z.lazy(() => MemberUpdateWithoutMemberActivityInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutMemberActivityInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutMemberActivityInputSchema),z.lazy(() => MemberUncheckedCreateWithoutMemberActivityInputSchema) ]),
  where: z.lazy(() => MemberWhereInputSchema).optional()
}).strict();

export default MemberUpsertWithoutMemberActivityInputSchema;
