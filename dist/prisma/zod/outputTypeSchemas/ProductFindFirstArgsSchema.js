"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFindFirstArgsSchema = exports.ProductSelectSchema = void 0;
const zod_1 = require("zod");
const ProductWhereInputSchema_1 = require("../inputTypeSchemas/ProductWhereInputSchema");
const ProductOrderByWithRelationInputSchema_1 = require("../inputTypeSchemas/ProductOrderByWithRelationInputSchema");
const ProductWhereUniqueInputSchema_1 = require("../inputTypeSchemas/ProductWhereUniqueInputSchema");
const ProductScalarFieldEnumSchema_1 = require("../inputTypeSchemas/ProductScalarFieldEnumSchema");
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
exports.ProductFindFirstArgsSchema = zod_1.z.object({
    select: exports.ProductSelectSchema.optional(),
    where: ProductWhereInputSchema_1.ProductWhereInputSchema.optional(),
    orderBy: zod_1.z.union([ProductOrderByWithRelationInputSchema_1.ProductOrderByWithRelationInputSchema.array(), ProductOrderByWithRelationInputSchema_1.ProductOrderByWithRelationInputSchema]).optional(),
    cursor: ProductWhereUniqueInputSchema_1.ProductWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([ProductScalarFieldEnumSchema_1.ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema_1.ProductScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.default = exports.ProductFindFirstArgsSchema;
//# sourceMappingURL=ProductFindFirstArgsSchema.js.map