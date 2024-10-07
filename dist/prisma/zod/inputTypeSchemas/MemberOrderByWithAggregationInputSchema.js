"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberOrderByWithAggregationInputSchema = void 0;
const zod_1 = require("zod");
const SortOrderSchema_1 = require("./SortOrderSchema");
const MemberCountOrderByAggregateInputSchema_1 = require("./MemberCountOrderByAggregateInputSchema");
const MemberMaxOrderByAggregateInputSchema_1 = require("./MemberMaxOrderByAggregateInputSchema");
const MemberMinOrderByAggregateInputSchema_1 = require("./MemberMinOrderByAggregateInputSchema");
exports.MemberOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    tag: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    role: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => MemberCountOrderByAggregateInputSchema_1.MemberCountOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => MemberMaxOrderByAggregateInputSchema_1.MemberMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => MemberMinOrderByAggregateInputSchema_1.MemberMinOrderByAggregateInputSchema).optional()
}).strict();
exports.default = exports.MemberOrderByWithAggregationInputSchema;
//# sourceMappingURL=MemberOrderByWithAggregationInputSchema.js.map