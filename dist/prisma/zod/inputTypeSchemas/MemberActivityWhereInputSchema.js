"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityWhereInputSchema = void 0;
const zod_1 = require("zod");
const UuidFilterSchema_1 = require("./UuidFilterSchema");
const StringFilterSchema_1 = require("./StringFilterSchema");
const MemberRelationFilterSchema_1 = require("./MemberRelationFilterSchema");
const MemberWhereInputSchema_1 = require("./MemberWhereInputSchema");
exports.MemberActivityWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MemberActivityWhereInputSchema), zod_1.z.lazy(() => exports.MemberActivityWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.MemberActivityWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MemberActivityWhereInputSchema), zod_1.z.lazy(() => exports.MemberActivityWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilterSchema_1.UuidFilterSchema), zod_1.z.string()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
    user: zod_1.z.union([zod_1.z.lazy(() => MemberRelationFilterSchema_1.MemberRelationFilterSchema), zod_1.z.lazy(() => MemberWhereInputSchema_1.MemberWhereInputSchema)]).optional(),
}).strict();
exports.default = exports.MemberActivityWhereInputSchema;
//# sourceMappingURL=MemberActivityWhereInputSchema.js.map