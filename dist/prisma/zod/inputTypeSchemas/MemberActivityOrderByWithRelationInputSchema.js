"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityOrderByWithRelationInputSchema = void 0;
const zod_1 = require("zod");
const SortOrderSchema_1 = require("./SortOrderSchema");
const MemberOrderByWithRelationInputSchema_1 = require("./MemberOrderByWithRelationInputSchema");
exports.MemberActivityOrderByWithRelationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => SortOrderSchema_1.SortOrderSchema).optional(),
    user: zod_1.z.lazy(() => MemberOrderByWithRelationInputSchema_1.MemberOrderByWithRelationInputSchema).optional()
}).strict();
exports.default = exports.MemberActivityOrderByWithRelationInputSchema;
//# sourceMappingURL=MemberActivityOrderByWithRelationInputSchema.js.map