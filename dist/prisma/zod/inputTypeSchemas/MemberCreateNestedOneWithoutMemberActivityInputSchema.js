"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberCreateNestedOneWithoutMemberActivityInputSchema = void 0;
const zod_1 = require("zod");
const MemberCreateWithoutMemberActivityInputSchema_1 = require("./MemberCreateWithoutMemberActivityInputSchema");
const MemberUncheckedCreateWithoutMemberActivityInputSchema_1 = require("./MemberUncheckedCreateWithoutMemberActivityInputSchema");
const MemberCreateOrConnectWithoutMemberActivityInputSchema_1 = require("./MemberCreateOrConnectWithoutMemberActivityInputSchema");
const MemberWhereUniqueInputSchema_1 = require("./MemberWhereUniqueInputSchema");
exports.MemberCreateNestedOneWithoutMemberActivityInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MemberCreateWithoutMemberActivityInputSchema_1.MemberCreateWithoutMemberActivityInputSchema), zod_1.z.lazy(() => MemberUncheckedCreateWithoutMemberActivityInputSchema_1.MemberUncheckedCreateWithoutMemberActivityInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => MemberCreateOrConnectWithoutMemberActivityInputSchema_1.MemberCreateOrConnectWithoutMemberActivityInputSchema).optional(),
    connect: zod_1.z.lazy(() => MemberWhereUniqueInputSchema_1.MemberWhereUniqueInputSchema).optional()
}).strict();
exports.default = exports.MemberCreateNestedOneWithoutMemberActivityInputSchema;
//# sourceMappingURL=MemberCreateNestedOneWithoutMemberActivityInputSchema.js.map