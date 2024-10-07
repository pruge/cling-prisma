"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityOrderByRelationAggregateInputSchema = void 0;
const zod_1 = require("zod");
const SortOrderSchema_1 = require("./SortOrderSchema");
exports.MemberActivityOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional()
}).strict();
exports.default = exports.MemberActivityOrderByRelationAggregateInputSchema;
//# sourceMappingURL=MemberActivityOrderByRelationAggregateInputSchema.js.map