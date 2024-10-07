"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema = void 0;
const zod_1 = require("zod");
const MemberCreateWithoutMemberActivityInputSchema_1 = require("./MemberCreateWithoutMemberActivityInputSchema");
const MemberUncheckedCreateWithoutMemberActivityInputSchema_1 = require("./MemberUncheckedCreateWithoutMemberActivityInputSchema");
const MemberCreateOrConnectWithoutMemberActivityInputSchema_1 = require("./MemberCreateOrConnectWithoutMemberActivityInputSchema");
const MemberUpsertWithoutMemberActivityInputSchema_1 = require("./MemberUpsertWithoutMemberActivityInputSchema");
const MemberWhereUniqueInputSchema_1 = require("./MemberWhereUniqueInputSchema");
const MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema_1 = require("./MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema");
const MemberUpdateWithoutMemberActivityInputSchema_1 = require("./MemberUpdateWithoutMemberActivityInputSchema");
const MemberUncheckedUpdateWithoutMemberActivityInputSchema_1 = require("./MemberUncheckedUpdateWithoutMemberActivityInputSchema");
exports.MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MemberCreateWithoutMemberActivityInputSchema_1.MemberCreateWithoutMemberActivityInputSchema), zod_1.z.lazy(() => MemberUncheckedCreateWithoutMemberActivityInputSchema_1.MemberUncheckedCreateWithoutMemberActivityInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => MemberCreateOrConnectWithoutMemberActivityInputSchema_1.MemberCreateOrConnectWithoutMemberActivityInputSchema).optional(),
    upsert: zod_1.z.lazy(() => MemberUpsertWithoutMemberActivityInputSchema_1.MemberUpsertWithoutMemberActivityInputSchema).optional(),
    connect: zod_1.z.lazy(() => MemberWhereUniqueInputSchema_1.MemberWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema_1.MemberUpdateToOneWithWhereWithoutMemberActivityInputSchema), zod_1.z.lazy(() => MemberUpdateWithoutMemberActivityInputSchema_1.MemberUpdateWithoutMemberActivityInputSchema), zod_1.z.lazy(() => MemberUncheckedUpdateWithoutMemberActivityInputSchema_1.MemberUncheckedUpdateWithoutMemberActivityInputSchema)]).optional(),
}).strict();
exports.default = exports.MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema;
//# sourceMappingURL=MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema.js.map