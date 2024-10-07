import { z } from 'zod';
import type { Prisma } from '../../client';
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

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export default ProductFindUniqueArgsSchema;
