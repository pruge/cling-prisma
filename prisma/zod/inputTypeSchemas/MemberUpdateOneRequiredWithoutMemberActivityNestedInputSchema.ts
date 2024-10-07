import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberCreateWithoutMemberActivityInputSchema } from './MemberCreateWithoutMemberActivityInputSchema';
import { MemberUncheckedCreateWithoutMemberActivityInputSchema } from './MemberUncheckedCreateWithoutMemberActivityInputSchema';
import { MemberCreateOrConnectWithoutMemberActivityInputSchema } from './MemberCreateOrConnectWithoutMemberActivityInputSchema';
import { MemberUpsertWithoutMemberActivityInputSchema } from './MemberUpsertWithoutMemberActivityInputSchema';
import { MemberWhereUniqueInputSchema } from './MemberWhereUniqueInputSchema';
import { MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema } from './MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema';
import { MemberUpdateWithoutMemberActivityInputSchema } from './MemberUpdateWithoutMemberActivityInputSchema';
import { MemberUncheckedUpdateWithoutMemberActivityInputSchema } from './MemberUncheckedUpdateWithoutMemberActivityInputSchema';

export const MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutMemberActivityNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutMemberActivityInputSchema),z.lazy(() => MemberUncheckedCreateWithoutMemberActivityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutMemberActivityInputSchema).optional(),
  upsert: z.lazy(() => MemberUpsertWithoutMemberActivityInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema),z.lazy(() => MemberUpdateWithoutMemberActivityInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutMemberActivityInputSchema) ]).optional(),
}).strict();

export default MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema;
