"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberUncheckedCreateWithoutMemberActivityInputSchema = void 0;
const zod_1 = require("zod");
const RoleSchema_1 = require("./RoleSchema");
exports.MemberUncheckedCreateWithoutMemberActivityInputSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    tag: zod_1.z.string(),
    role: zod_1.z.lazy(() => RoleSchema_1.RoleSchema).optional(),
    createdAt: zod_1.z.coerce.date().optional(),
    updatedAt: zod_1.z.coerce.date().optional()
}).strict();
exports.default = exports.MemberUncheckedCreateWithoutMemberActivityInputSchema;
//# sourceMappingURL=MemberUncheckedCreateWithoutMemberActivityInputSchema.js.map