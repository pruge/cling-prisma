import { z } from 'zod';
export declare const ProductSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    tag: z.ZodString;
    variable: z.ZodString;
    installed: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    tag: string;
    createdAt: Date;
    updatedAt: Date;
    variable: string;
    installed: string;
}, {
    name: string;
    id: string;
    tag: string;
    createdAt: Date;
    updatedAt: Date;
    variable: string;
    installed: string;
}>;
export type Product = z.infer<typeof ProductSchema>;
export default ProductSchema;
