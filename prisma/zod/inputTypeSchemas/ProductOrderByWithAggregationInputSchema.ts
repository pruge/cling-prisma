import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProductCountOrderByAggregateInputSchema } from './ProductCountOrderByAggregateInputSchema';
import { ProductMaxOrderByAggregateInputSchema } from './ProductMaxOrderByAggregateInputSchema';
import { ProductMinOrderByAggregateInputSchema } from './ProductMinOrderByAggregateInputSchema';

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  variable: z.lazy(() => SortOrderSchema).optional(),
  installed: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional()
}).strict();

export default ProductOrderByWithAggregationInputSchema;
