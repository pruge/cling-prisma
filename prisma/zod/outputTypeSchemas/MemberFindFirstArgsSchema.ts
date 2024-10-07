import { z } from 'zod';
import type { Prisma } from '../../client';
import { MemberIncludeSchema } from '../inputTypeSchemas/MemberIncludeSchema'
import { MemberWhereInputSchema } from '../inputTypeSchemas/MemberWhereInputSchema'
import { MemberOrderByWithRelationInputSchema } from '../inputTypeSchemas/MemberOrderByWithRelationInputSchema'
import { MemberWhereUniqueInputSchema } from '../inputTypeSchemas/MemberWhereUniqueInputSchema'
import { MemberScalarFieldEnumSchema } from '../inputTypeSchemas/MemberScalarFieldEnumSchema'
import { MemberActivityFindManyArgsSchema } from "../outputTypeSchemas/MemberActivityFindManyArgsSchema"
import { MemberCountOutputTypeArgsSchema } from "../outputTypeSchemas/MemberCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MemberSelectSchema: z.ZodType<Prisma.MemberSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  tag: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  MemberActivity: z.union([z.boolean(),z.lazy(() => MemberActivityFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MemberCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MemberFindFirstArgsSchema: z.ZodType<Prisma.MemberFindFirstArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereInputSchema.optional(),
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(),MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberScalarFieldEnumSchema,MemberScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default MemberFindFirstArgsSchema;
