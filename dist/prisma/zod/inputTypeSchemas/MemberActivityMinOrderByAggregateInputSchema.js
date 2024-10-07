"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityMinOrderByAggregateInputSchema = void 0;
const zod_1 = require("zod");
const SortOrderSchema_1 = require("./SortOrderSchema");
exports.MemberActivityMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional()
}).strict();
exports.default = exports.MemberActivityMinOrderByAggregateInputSchema;
//# sourceMappingURL=MemberActivityMinOrderByAggregateInputSchema.js.map