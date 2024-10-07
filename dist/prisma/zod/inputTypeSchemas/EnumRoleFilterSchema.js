"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleFilterSchema = void 0;
const zod_1 = require("zod");
const RoleSchema_1 = require("./RoleSchema");
const NestedEnumRoleFilterSchema_1 = require("./NestedEnumRoleFilterSchema");
exports.EnumRoleFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => RoleSchema_1.RoleSchema).optional(),
    in: zod_1.z.lazy(() => RoleSchema_1.RoleSchema).array().optional(),
    notIn: zod_1.z.lazy(() => RoleSchema_1.RoleSchema).array().optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => RoleSchema_1.RoleSchema), zod_1.z.lazy(() => NestedEnumRoleFilterSchema_1.NestedEnumRoleFilterSchema)]).optional(),
}).strict();
exports.default = exports.EnumRoleFilterSchema;
//# sourceMappingURL=EnumRoleFilterSchema.js.map