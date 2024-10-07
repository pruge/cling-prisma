"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberScalarWhereWithAggregatesInputSchema = void 0;
const zod_1 = require("zod");
const StringWithAggregatesFilterSchema_1 = require("./StringWithAggregatesFilterSchema");
const EnumRoleWithAggregatesFilterSchema_1 = require("./EnumRoleWithAggregatesFilterSchema");
const RoleSchema_1 = require("./RoleSchema");
const DateTimeWithAggregatesFilterSchema_1 = require("./DateTimeWithAggregatesFilterSchema");
exports.MemberScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MemberScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.MemberScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.MemberScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MemberScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.MemberScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilterSchema_1.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilterSchema_1.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilterSchema_1.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    tag: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilterSchema_1.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => EnumRoleWithAggregatesFilterSchema_1.EnumRoleWithAggregatesFilterSchema), zod_1.z.lazy(() => RoleSchema_1.RoleSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilterSchema_1.DateTimeWithAggregatesFilterSchema), zod_1.z.coerce.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilterSchema_1.DateTimeWithAggregatesFilterSchema), zod_1.z.coerce.date()]).optional(),
}).strict();
exports.default = exports.MemberScalarWhereWithAggregatesInputSchema;
//# sourceMappingURL=MemberScalarWhereWithAggregatesInputSchema.js.map