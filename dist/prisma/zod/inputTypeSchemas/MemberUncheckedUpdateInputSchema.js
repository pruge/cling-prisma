"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberUncheckedUpdateInputSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInputSchema_1 = require("./StringFieldUpdateOperationsInputSchema");
const RoleSchema_1 = require("./RoleSchema");
const EnumRoleFieldUpdateOperationsInputSchema_1 = require("./EnumRoleFieldUpdateOperationsInputSchema");
const DateTimeFieldUpdateOperationsInputSchema_1 = require("./DateTimeFieldUpdateOperationsInputSchema");
const MemberActivityUncheckedUpdateManyWithoutUserNestedInputSchema_1 = require("./MemberActivityUncheckedUpdateManyWithoutUserNestedInputSchema");
exports.MemberUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
    tag: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => RoleSchema_1.RoleSchema), zod_1.z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema_1.EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInputSchema_1.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInputSchema_1.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    MemberActivity: zod_1.z.lazy(() => MemberActivityUncheckedUpdateManyWithoutUserNestedInputSchema_1.MemberActivityUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();
exports.default = exports.MemberUncheckedUpdateInputSchema;
//# sourceMappingURL=MemberUncheckedUpdateInputSchema.js.map