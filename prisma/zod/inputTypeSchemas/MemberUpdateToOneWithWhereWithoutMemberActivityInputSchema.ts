import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberWhereInputSchema } from './MemberWhereInputSchema';
import { MemberUpdateWithoutMemberActivityInputSchema } from './MemberUpdateWithoutMemberActivityInputSchema';
import { MemberUncheckedUpdateWithoutMemberActivityInputSchema } from './MemberUncheckedUpdateWithoutMemberActivityInputSchema';

export const MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema: z.ZodType<Prisma.MemberUpdateToOneWithWhereWithoutMemberActivityInput> = z.object({
  where: z.lazy(() => MemberWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MemberUpdateWithoutMemberActivityInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutMemberActivityInputSchema) ]),
}).strict();

export default MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema;
