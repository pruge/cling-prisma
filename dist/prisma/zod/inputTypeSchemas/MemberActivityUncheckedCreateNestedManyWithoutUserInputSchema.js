"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityUncheckedCreateNestedManyWithoutUserInputSchema = void 0;
const zod_1 = require("zod");
const MemberActivityCreateWithoutUserInputSchema_1 = require("./MemberActivityCreateWithoutUserInputSchema");
const MemberActivityUncheckedCreateWithoutUserInputSchema_1 = require("./MemberActivityUncheckedCreateWithoutUserInputSchema");
const MemberActivityCreateOrConnectWithoutUserInputSchema_1 = require("./MemberActivityCreateOrConnectWithoutUserInputSchema");
const MemberActivityCreateManyUserInputEnvelopeSchema_1 = require("./MemberActivityCreateManyUserInputEnvelopeSchema");
const MemberActivityWhereUniqueInputSchema_1 = require("./MemberActivityWhereUniqueInputSchema");
exports.MemberActivityUncheckedCreateNestedManyWithoutUserInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MemberActivityCreateWithoutUserInputSchema_1.MemberActivityCreateWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityCreateWithoutUserInputSchema_1.MemberActivityCreateWithoutUserInputSchema).array(), zod_1.z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema_1.MemberActivityUncheckedCreateWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema_1.MemberActivityUncheckedCreateWithoutUserInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MemberActivityCreateOrConnectWithoutUserInputSchema_1.MemberActivityCreateOrConnectWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityCreateOrConnectWithoutUserInputSchema_1.MemberActivityCreateOrConnectWithoutUserInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => MemberActivityCreateManyUserInputEnvelopeSchema_1.MemberActivityCreateManyUserInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema), zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.default = exports.MemberActivityUncheckedCreateNestedManyWithoutUserInputSchema;
//# sourceMappingURL=MemberActivityUncheckedCreateNestedManyWithoutUserInputSchema.js.map