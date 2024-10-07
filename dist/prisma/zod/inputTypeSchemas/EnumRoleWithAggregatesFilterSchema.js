"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleWithAggregatesFilterSchema = void 0;
const zod_1 = require("zod");
const RoleSchema_1 = require("./RoleSchema");
const NestedEnumRoleWithAggregatesFilterSchema_1 = require("./NestedEnumRoleWithAggregatesFilterSchema");
const NestedIntFilterSchema_1 = require("./NestedIntFilterSchema");
const NestedEnumRoleFilterSchema_1 = require("./NestedEnumRoleFilterSchema");
exports.EnumRoleWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => RoleSchema_1.RoleSchema).optional(),
    in: zod_1.z.lazy(() => RoleSchema_1.RoleSchema).array().optional(),
    notIn: zod_1.z.lazy(() => RoleSchema_1.RoleSchema).array().optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => RoleSchema_1.RoleSchema), zod_1.z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema_1.NestedEnumRoleWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => NestedIntFilterSchema_1.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => NestedEnumRoleFilterSchema_1.NestedEnumRoleFilterSchema).optional(),
    _max: zod_1.z.lazy(() => NestedEnumRoleFilterSchema_1.NestedEnumRoleFilterSchema).optional()
}).strict();
exports.default = exports.EnumRoleWithAggregatesFilterSchema;
//# sourceMappingURL=EnumRoleWithAggregatesFilterSchema.js.map