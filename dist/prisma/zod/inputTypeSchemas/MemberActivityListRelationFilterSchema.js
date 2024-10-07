"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityListRelationFilterSchema = void 0;
const zod_1 = require("zod");
const MemberActivityWhereInputSchema_1 = require("./MemberActivityWhereInputSchema");
exports.MemberActivityListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema).optional()
}).strict();
exports.default = exports.MemberActivityListRelationFilterSchema;
//# sourceMappingURL=MemberActivityListRelationFilterSchema.js.map