import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberCreateWithoutMemberActivityInputSchema } from './MemberCreateWithoutMemberActivityInputSchema';
import { MemberUncheckedCreateWithoutMemberActivityInputSchema } from './MemberUncheckedCreateWithoutMemberActivityInputSchema';
import { MemberCreateOrConnectWithoutMemberActivityInputSchema } from './MemberCreateOrConnectWithoutMemberActivityInputSchema';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';

export const MemberCreateNestedOneWithoutMemberActivityInputSchema: z.ZodType<Prisma.MemberCreateNestedOneWithoutMemberActivityInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutMemberActivityInputSchema),z.lazy(() => MemberUncheckedCreateWithoutMemberActivityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutMemberActivityInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional()
}).strict();

export default MemberCreateNestedOneWithoutMemberActivityInputSchema;
