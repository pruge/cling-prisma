"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberCreateOrConnectWithoutMemberActivityInputSchema = void 0;
const zod_1 = require("zod");
const MemberWhereUniqueInputSchema_1 = require("./MemberWhereUniqueInputSchema");
const MemberCreateWithoutMemberActivityInputSchema_1 = require("./MemberCreateWithoutMemberActivityInputSchema");
const MemberUncheckedCreateWithoutMemberActivityInputSchema_1 = require("./MemberUncheckedCreateWithoutMemberActivityInputSchema");
exports.MemberCreateOrConnectWithoutMemberActivityInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MemberWhereUniqueInputSchema_1.MemberWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => MemberCreateWithoutMemberActivityInputSchema_1.MemberCreateWithoutMemberActivityInputSchema), zod_1.z.lazy(() => MemberUncheckedCreateWithoutMemberActivityInputSchema_1.MemberUncheckedCreateWithoutMemberActivityInputSchema)]),
}).strict();
exports.default = exports.MemberCreateOrConnectWithoutMemberActivityInputSchema;
//# sourceMappingURL=MemberCreateOrConnectWithoutMemberActivityInputSchema.js.map