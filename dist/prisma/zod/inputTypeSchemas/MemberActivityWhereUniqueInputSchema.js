"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityWhereUniqueInputSchema = void 0;
const zod_1 = require("zod");
const MemberActivityWhereInputSchema_1 = require("./MemberActivityWhereInputSchema");
const StringFilterSchema_1 = require("./StringFilterSchema");
const MemberRelationFilterSchema_1 = require("./MemberRelationFilterSchema");
const MemberWhereInputSchema_1 = require("./MemberWhereInputSchema");
exports.MemberActivityWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.string()
})
    .and(zod_1.z.object({
    id: zod_1.z.string().optional(),
    AND: zod_1.z.union([zod_1.z.lazy(() => MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema), zod_1.z.lazy(() => MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema), zod_1.z.lazy(() => MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema).array()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
    user: zod_1.z.union([zod_1.z.lazy(() => MemberRelationFilterSchema_1.MemberRelationFilterSchema), zod_1.z.lazy(() => MemberWhereInputSchema_1.MemberWhereInputSchema)]).optional(),
}).strict());
exports.default = exports.MemberActivityWhereUniqueInputSchema;
//# sourceMappingURL=MemberActivityWhereUniqueInputSchema.js.map