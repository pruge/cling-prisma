import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','name','tag','variable','installed','createdAt','updatedAt']);

export default ProductScalarFieldEnumSchema;
