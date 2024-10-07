"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityOrderByWithAggregationInputSchema = void 0;
const zod_1 = require("zod");
const SortOrderSchema_1 = require("./SortOrderSchema");
const MemberActivityCountOrderByAggregateInputSchema_1 = require("./MemberActivityCountOrderByAggregateInputSchema");
const MemberActivityMaxOrderByAggregateInputSchema_1 = require("./MemberActivityMaxOrderByAggregateInputSchema");
const MemberActivityMinOrderByAggregateInputSchema_1 = require("./MemberActivityMinOrderByAggregateInputSchema");
exports.MemberActivityOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => MemberActivityCountOrderByAggregateInputSchema_1.MemberActivityCountOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => MemberActivityMaxOrderByAggregateInputSchema_1.MemberActivityMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => MemberActivityMinOrderByAggregateInputSchema_1.MemberActivityMinOrderByAggregateInputSchema).optional()
}).strict();
exports.default = exports.MemberActivityOrderByWithAggregationInputSchema;
//# sourceMappingURL=MemberActivityOrderByWithAggregationInputSchema.js.map