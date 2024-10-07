"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductGroupByArgsSchema = void 0;
const zod_1 = require("zod");
const ProductWhereInputSchema_1 = require("../inputTypeSchemas/ProductWhereInputSchema");
const ProductOrderByWithAggregationInputSchema_1 = require("../inputTypeSchemas/ProductOrderByWithAggregationInputSchema");
const ProductScalarFieldEnumSchema_1 = require("../inputTypeSchemas/ProductScalarFieldEnumSchema");
const ProductScalarWhereWithAggregatesInputSchema_1 = require("../inputTypeSchemas/ProductScalarWhereWithAggregatesInputSchema");
exports.ProductGroupByArgsSchema = zod_1.z.object({
    where: ProductWhereInputSchema_1.ProductWhereInputSchema.optional(),
    orderBy: zod_1.z.union([ProductOrderByWithAggregationInputSchema_1.ProductOrderByWithAggregationInputSchema.array(), ProductOrderByWithAggregationInputSchema_1.ProductOrderByWithAggregationInputSchema]).optional(),
    by: ProductScalarFieldEnumSchema_1.ProductScalarFieldEnumSchema.array(),
    having: ProductScalarWhereWithAggregatesInputSchema_1.ProductScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.default = exports.ProductGroupByArgsSchema;
//# sourceMappingURL=ProductGroupByArgsSchema.js.map