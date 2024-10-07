"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberUpsertWithoutMemberActivityInputSchema = void 0;
const zod_1 = require("zod");
const MemberUpdateWithoutMemberActivityInputSchema_1 = require("./MemberUpdateWithoutMemberActivityInputSchema");
const MemberUncheckedUpdateWithoutMemberActivityInputSchema_1 = require("./MemberUncheckedUpdateWithoutMemberActivityInputSchema");
const MemberCreateWithoutMemberActivityInputSchema_1 = require("./MemberCreateWithoutMemberActivityInputSchema");
const MemberUncheckedCreateWithoutMemberActivityInputSchema_1 = require("./MemberUncheckedCreateWithoutMemberActivityInputSchema");
const MemberWhereInputSchema_1 = require("./MemberWhereInputSchema");
exports.MemberUpsertWithoutMemberActivityInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => MemberUpdateWithoutMemberActivityInputSchema_1.MemberUpdateWithoutMemberActivityInputSchema), zod_1.z.lazy(() => MemberUncheckedUpdateWithoutMemberActivityInputSchema_1.MemberUncheckedUpdateWithoutMemberActivityInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => MemberCreateWithoutMemberActivityInputSchema_1.MemberCreateWithoutMemberActivityInputSchema), zod_1.z.lazy(() => MemberUncheckedCreateWithoutMemberActivityInputSchema_1.MemberUncheckedCreateWithoutMemberActivityInputSchema)]),
    where: zod_1.z.lazy(() => MemberWhereInputSchema_1.MemberWhereInputSchema).optional()
}).strict();
exports.default = exports.MemberUpsertWithoutMemberActivityInputSchema;
//# sourceMappingURL=MemberUpsertWithoutMemberActivityInputSchema.js.map