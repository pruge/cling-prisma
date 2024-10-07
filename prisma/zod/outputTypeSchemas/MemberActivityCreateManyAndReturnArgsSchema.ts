import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivityCreateManyInputSchema } from '../inputTypeSchemas/MemberActivityCreateManyInputSchema'

export const MemberActivityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MemberActivityCreateManyAndReturnArgs> = z.object({
  data: z.union([ MemberActivityCreateManyInputSchema,MemberActivityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MemberActivityCreateManyAndReturnArgsSchema;
