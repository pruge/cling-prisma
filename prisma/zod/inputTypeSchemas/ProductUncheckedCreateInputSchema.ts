import type { Prisma } from '../../client';

import { z } from 'zod';

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  tag: z.string(),
  variable: z.string().optional(),
  installed: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ProductUncheckedCreateInputSchema;
