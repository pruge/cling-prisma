import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberActivityCreateWithoutUserInputSchema } from './MemberActivityCreateWithoutUserInputSchema';
import { MemberActivityUncheckedCreateWithoutUserInputSchema } from './MemberActivityUncheckedCreateWithoutUserInputSchema';
import { MemberActivityCreateOrConnectWithoutUserInputSchema } from './MemberActivityCreateOrConnectWithoutUserInputSchema';
import { MemberActivityCreateManyUserInputEnvelopeSchema } from './MemberActivityCreateManyUserInputEnvelopeSchema';
import { MemberActivityWhereUniqueInputSchema } from './MemberActivityWhereUniqueInputSchema';

export const MemberActivityCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MemberActivityCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MemberActivityCreateWithoutUserInputSchema),z.lazy(() => MemberActivityCreateWithoutUserInputSchema).array(),z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema),z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberActivityCreateOrConnectWithoutUserInputSchema),z.lazy(() => MemberActivityCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberActivityCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MemberActivityWhereUniqueInputSchema),z.lazy(() => MemberActivityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MemberActivityCreateNestedManyWithoutUserInputSchema;
