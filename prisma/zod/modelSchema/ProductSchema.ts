import { z } from 'zod';

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  tag: z.string(),
  variable: z.string(),
  installed: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
