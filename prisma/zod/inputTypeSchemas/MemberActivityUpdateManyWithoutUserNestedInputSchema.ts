import type { Prisma } from '../../client';

import { z } from 'zod';
import { MemberActivityCreateWithoutUserInputSchema } from './MemberActivityCreateWithoutUserInputSchema';
import { MemberActivityUncheckedCreateWithoutUserInputSchema } from './MemberActivityUncheckedCreateWithoutUserInputSchema';
import { MemberActivityCreateOrConnectWithoutUserInputSchema } from './MemberActivityCreateOrConnectWithoutUserInputSchema';
import { MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema } from './MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema';
import { MemberActivityCreateManyUserInputEnvelopeSchema } from './MemberActivityCreateManyUserInputEnvelopeSchema';
import { MemberActivityWhereUniqueInputSchema } from './MemberActivityWhereUniqueInputSchema';
import { MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema } from './MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema';
import { MemberActivityUpdateManyWithWhereWithoutUserInputSchema } from './MemberActivityUpdateManyWithWhereWithoutUserInputSchema';
import { MemberActivityScalarWhereInputSchema } from './MemberActivityScalarWhereInputSchema';

export const MemberActivityUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MemberActivityUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberActivityCreateWithoutUserInputSchema),z.lazy(() => MemberActivityCreateWithoutUserInputSchema).array(),z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema),z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberActivityCreateOrConnectWithoutUserInputSchema),z.lazy(() => MemberActivityCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberActivityCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MemberActivityWhereUniqueInputSchema),z.lazy(() => MemberActivityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MemberActivityWhereUniqueInputSchema),z.lazy(() => MemberActivityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MemberActivityWhereUniqueInputSchema),z.lazy(() => MemberActivityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MemberActivityWhereUniqueInputSchema),z.lazy(() => MemberActivityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MemberActivityUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MemberActivityUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MemberActivityScalarWhereInputSchema),z.lazy(() => MemberActivityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MemberActivityUpdateManyWithoutUserNestedInputSchema;
