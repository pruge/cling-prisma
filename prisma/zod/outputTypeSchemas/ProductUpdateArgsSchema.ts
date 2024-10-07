import { z } from 'zod';
import type { Prisma } from '../../client';
import { ProductUpdateInputSchema } from '../inputTypeSchemas/ProductUpdateInputSchema'
import { ProductUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProductUncheckedUpdateInputSchema'
import { ProductWhereUniqueInputSchema } from '../inputTypeSchemas/ProductWhereUniqueInputSchema'
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

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export default ProductUpdateArgsSchema;
