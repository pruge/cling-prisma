"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFindUniqueArgsSchema = exports.ProductSelectSchema = void 0;
const zod_1 = require("zod");
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
exports.ProductFindUniqueArgsSchema = zod_1.z.object({
    select: exports.ProductSelectSchema.optional(),
    where: ProductWhereUniqueInputSchema_1.ProductWhereUniqueInputSchema,
}).strict();
exports.default = exports.ProductFindUniqueArgsSchema;
//# sourceMappingURL=ProductFindUniqueArgsSchema.js.map