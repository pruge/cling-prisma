import { z } from 'zod';
import type { Prisma } from '../../client';
import { ProductWhereUniqueInputSchema } from '../inputTypeSchemas/ProductWhereUniqueInputSchema'
import { ProductCreateInputSchema } from '../inputTypeSchemas/ProductCreateInputSchema'
import { ProductUncheckedCreateInputSchema } from '../inputTypeSchemas/ProductUncheckedCreateInputSchema'
import { ProductUpdateInputSchema } from '../inputTypeSchemas/ProductUpdateInputSchema'
import { ProductUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProductUncheckedUpdateInputSchema'
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

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict() ;

export default ProductUpsertArgsSchema;
