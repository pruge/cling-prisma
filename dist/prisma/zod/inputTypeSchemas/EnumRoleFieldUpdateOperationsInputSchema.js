"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleFieldUpdateOperationsInputSchema = void 0;
const zod_1 = require("zod");
const RoleSchema_1 = require("./RoleSchema");
exports.EnumRoleFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.lazy(() => RoleSchema_1.RoleSchema).optional()
}).strict();
exports.default = exports.EnumRoleFieldUpdateOperationsInputSchema;
//# sourceMappingURL=EnumRoleFieldUpdateOperationsInputSchema.js.map