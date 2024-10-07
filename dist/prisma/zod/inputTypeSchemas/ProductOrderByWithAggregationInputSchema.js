"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderByWithAggregationInputSchema = void 0;
const zod_1 = require("zod");
const SortOrderSchema_1 = require("./SortOrderSchema");
const ProductCountOrderByAggregateInputSchema_1 = require("./ProductCountOrderByAggregateInputSchema");
const ProductMaxOrderByAggregateInputSchema_1 = require("./ProductMaxOrderByAggregateInputSchema");
const ProductMinOrderByAggregateInputSchema_1 = require("./ProductMinOrderByAggregateInputSchema");
exports.ProductOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    tag: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    variable: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    installed: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => ProductCountOrderByAggregateInputSchema_1.ProductCountOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => ProductMaxOrderByAggregateInputSchema_1.ProductMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => ProductMinOrderByAggregateInputSchema_1.ProductMinOrderByAggregateInputSchema).optional()
}).strict();
exports.default = exports.ProductOrderByWithAggregationInputSchema;
//# sourceMappingURL=ProductOrderByWithAggregationInputSchema.js.map