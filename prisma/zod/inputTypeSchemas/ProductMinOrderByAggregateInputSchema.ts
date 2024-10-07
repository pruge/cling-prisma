import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  variable: z.lazy(() => SortOrderSchema).optional(),
  installed: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProductMinOrderByAggregateInputSchema;
