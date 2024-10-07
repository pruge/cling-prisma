"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMinOrderByAggregateInputSchema = void 0;
const zod_1 = require("zod");
const SortOrderSchema_1 = require("./SortOrderSchema");
exports.ProductMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    tag: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    variable: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    installed: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional()
}).strict();
exports.default = exports.ProductMinOrderByAggregateInputSchema;
//# sourceMappingURL=ProductMinOrderByAggregateInputSchema.js.map