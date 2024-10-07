"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAggregateArgsSchema = void 0;
const zod_1 = require("zod");
const ProductWhereInputSchema_1 = require("../inputTypeSchemas/ProductWhereInputSchema");
const ProductOrderByWithRelationInputSchema_1 = require("../inputTypeSchemas/ProductOrderByWithRelationInputSchema");
const ProductWhereUniqueInputSchema_1 = require("../inputTypeSchemas/ProductWhereUniqueInputSchema");
exports.ProductAggregateArgsSchema = zod_1.z.object({
    where: ProductWhereInputSchema_1.ProductWhereInputSchema.optional(),
    orderBy: zod_1.z.union([ProductOrderByWithRelationInputSchema_1.ProductOrderByWithRelationInputSchema.array(), ProductOrderByWithRelationInputSchema_1.ProductOrderByWithRelationInputSchema]).optional(),
    cursor: ProductWhereUniqueInputSchema_1.ProductWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.default = exports.ProductAggregateArgsSchema;
//# sourceMappingURL=ProductAggregateArgsSchema.js.map