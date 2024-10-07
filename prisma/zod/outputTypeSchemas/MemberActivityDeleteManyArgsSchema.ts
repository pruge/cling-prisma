import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberActivityWhereInputSchema } from '../inputTypeSchemas/MemberActivityWhereInputSchema'

export const MemberActivityDeleteManyArgsSchema: z.ZodType<Prisma.MemberActivityDeleteManyArgs> = z.object({
  where: MemberActivityWhereInputSchema.optional(),
}).strict() ;

export default MemberActivityDeleteManyArgsSchema;
