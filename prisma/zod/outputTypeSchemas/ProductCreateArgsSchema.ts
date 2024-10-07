import { z } from 'zod';
import type { Prisma } from '../../client';
import { ProductCreateInputSchema } from '../inputTypeSchemas/ProductCreateInputSchema'
import { ProductUncheckedCreateInputSchema } from '../inputTypeSchemas/ProductUncheckedCreateInputSchema'
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

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict() ;

export default ProductCreateArgsSchema;
