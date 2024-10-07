import type { Prisma } from '../../client';

import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tag: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tag: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tag: z.string().optional(),
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  variable: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  installed: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default ProductWhereUniqueInputSchema;
