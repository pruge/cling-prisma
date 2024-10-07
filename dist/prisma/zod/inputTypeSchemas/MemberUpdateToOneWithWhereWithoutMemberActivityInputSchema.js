"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema = void 0;
const zod_1 = require("zod");
const MemberWhereInputSchema_1 = require("./MemberWhereInputSchema");
const MemberUpdateWithoutMemberActivityInputSchema_1 = require("./MemberUpdateWithoutMemberActivityInputSchema");
const MemberUncheckedUpdateWithoutMemberActivityInputSchema_1 = require("./MemberUncheckedUpdateWithoutMemberActivityInputSchema");
exports.MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MemberWhereInputSchema_1.MemberWhereInputSchema).optional(),
    data: zod_1.z.union([zod_1.z.lazy(() => MemberUpdateWithoutMemberActivityInputSchema_1.MemberUpdateWithoutMemberActivityInputSchema), zod_1.z.lazy(() => MemberUncheckedUpdateWithoutMemberActivityInputSchema_1.MemberUncheckedUpdateWithoutMemberActivityInputSchema)]),
}).strict();
exports.default = exports.MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema;
//# sourceMappingURL=MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema.js.map