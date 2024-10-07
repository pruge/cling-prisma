"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberWhereUniqueInputSchema = void 0;
const zod_1 = require("zod");
const MemberWhereInputSchema_1 = require("./MemberWhereInputSchema");
const StringFilterSchema_1 = require("./StringFilterSchema");
const EnumRoleFilterSchema_1 = require("./EnumRoleFilterSchema");
const RoleSchema_1 = require("./RoleSchema");
const DateTimeFilterSchema_1 = require("./DateTimeFilterSchema");
const MemberActivityListRelationFilterSchema_1 = require("./MemberActivityListRelationFilterSchema");
exports.MemberWhereUniqueInputSchema = zod_1.z.union([
    zod_1.z.object({
        id: zod_1.z.string(),
        email: zod_1.z.string()
    }),
    zod_1.z.object({
        id: zod_1.z.string(),
    }),
    zod_1.z.object({
        email: zod_1.z.string(),
    }),
])
    .and(zod_1.z.object({
    id: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    AND: zod_1.z.union([zod_1.z.lazy(() => MemberWhereInputSchema_1.MemberWhereInputSchema), zod_1.z.lazy(() => MemberWhereInputSchema_1.MemberWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => MemberWhereInputSchema_1.MemberWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => MemberWhereInputSchema_1.MemberWhereInputSchema), zod_1.z.lazy(() => MemberWhereInputSchema_1.MemberWhereInputSchema).array()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
    tag: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => EnumRoleFilterSchema_1.EnumRoleFilterSchema), zod_1.z.lazy(() => RoleSchema_1.RoleSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilterSchema_1.DateTimeFilterSchema), zod_1.z.coerce.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilterSchema_1.DateTimeFilterSchema), zod_1.z.coerce.date()]).optional(),
    MemberActivity: zod_1.z.lazy(() => MemberActivityListRelationFilterSchema_1.MemberActivityListRelationFilterSchema).optional()
}).strict());
exports.default = exports.MemberWhereUniqueInputSchema;
//# sourceMappingURL=MemberWhereUniqueInputSchema.js.map