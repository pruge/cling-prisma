"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateArgsSchema = exports.ProductSelectSchema = void 0;
const zod_1 = require("zod");
const ProductUpdateInputSchema_1 = require("../inputTypeSchemas/ProductUpdateInputSchema");
const ProductUncheckedUpdateInputSchema_1 = require("../inputTypeSchemas/ProductUncheckedUpdateInputSchema");
const ProductWhereUniqueInputSchema_1 = require("../inputTypeSchemas/ProductWhereUniqueInputSchema");
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
exports.ProductSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    tag: zod_1.z.boolean().optional(),
    variable: zod_1.z.boolean().optional(),
    installed: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
}).strict();
exports.ProductUpdateArgsSchema = zod_1.z.object({
    select: exports.ProductSelectSchema.optional(),
    data: zod_1.z.union([ProductUpdateInputSchema_1.ProductUpdateInputSchema, ProductUncheckedUpdateInputSchema_1.ProductUncheckedUpdateInputSchema]),
    where: ProductWhereUniqueInputSchema_1.ProductWhereUniqueInputSchema,
}).strict();
exports.default = exports.ProductUpdateArgsSchema;
//# sourceMappingURL=ProductUpdateArgsSchema.js.map