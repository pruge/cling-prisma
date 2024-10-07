"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleFilterSchema = void 0;
const zod_1 = require("zod");
const RoleSchema_1 = require("./RoleSchema");
exports.NestedEnumRoleFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => RoleSchema_1.RoleSchema).optional(),
    in: zod_1.z.lazy(() => RoleSchema_1.RoleSchema).array().optional(),
    notIn: zod_1.z.lazy(() => RoleSchema_1.RoleSchema).array().optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => RoleSchema_1.RoleSchema), zod_1.z.lazy(() => exports.NestedEnumRoleFilterSchema)]).optional(),
}).strict();
exports.default = exports.NestedEnumRoleFilterSchema;
//# sourceMappingURL=NestedEnumRoleFilterSchema.js.map