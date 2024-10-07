import { z } from 'zod';
import type { Prisma } from '../../client';
import { ProductWhereInputSchema } from '../inputTypeSchemas/ProductWhereInputSchema'
import { ProductOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProductOrderByWithRelationInputSchema'
import { ProductWhereUniqueInputSchema } from '../inputTypeSchemas/ProductWhereUniqueInputSchema'
import { ProductScalarFieldEnumSchema } from '../inputTypeSchemas/ProductScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  tag: z.boolean().optional(),
  variable: z.boolean().optional(),
  installed: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ProductFindFirstArgsSchema;
