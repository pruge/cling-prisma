import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivityUpdateManyMutationInputSchema } from '../inputTypeSchemas/MemberActivityUpdateManyMutationInputSchema'
import { MemberActivityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MemberActivityUncheckedUpdateManyInputSchema'
import { MemberActivityWhereInputSchema } from '../inputTypeSchemas/MemberActivityWhereInputSchema'

export const MemberActivityUpdateManyArgsSchema: z.ZodType<Prisma.MemberActivityUpdateManyArgs> = z.object({
  data: z.union([ MemberActivityUpdateManyMutationInputSchema,MemberActivityUncheckedUpdateManyInputSchema ]),
  where: MemberActivityWhereInputSchema.optional(),
}).strict() ;

export default MemberActivityUpdateManyArgsSchema;
