"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertArgsSchema = exports.ProductSelectSchema = void 0;
const zod_1 = require("zod");
const ProductWhereUniqueInputSchema_1 = require("../inputTypeSchemas/ProductWhereUniqueInputSchema");
const ProductCreateInputSchema_1 = require("../inputTypeSchemas/ProductCreateInputSchema");
const ProductUncheckedCreateInputSchema_1 = require("../inputTypeSchemas/ProductUncheckedCreateInputSchema");
const ProductUpdateInputSchema_1 = require("../inputTypeSchemas/ProductUpdateInputSchema");
const ProductUncheckedUpdateInputSchema_1 = require("../inputTypeSchemas/ProductUncheckedUpdateInputSchema");
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
exports.ProductUpsertArgsSchema = zod_1.z.object({
    select: exports.ProductSelectSchema.optional(),
    where: ProductWhereUniqueInputSchema_1.ProductWhereUniqueInputSchema,
    create: zod_1.z.union([ProductCreateInputSchema_1.ProductCreateInputSchema, ProductUncheckedCreateInputSchema_1.ProductUncheckedCreateInputSchema]),
    update: zod_1.z.union([ProductUpdateInputSchema_1.ProductUpdateInputSchema, ProductUncheckedUpdateInputSchema_1.ProductUncheckedUpdateInputSchema]),
}).strict();
exports.default = exports.ProductUpsertArgsSchema;
//# sourceMappingURL=ProductUpsertArgsSchema.js.map