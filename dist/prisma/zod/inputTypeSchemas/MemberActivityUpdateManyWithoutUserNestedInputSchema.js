"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityUpdateManyWithoutUserNestedInputSchema = void 0;
const zod_1 = require("zod");
const MemberActivityCreateWithoutUserInputSchema_1 = require("./MemberActivityCreateWithoutUserInputSchema");
const MemberActivityUncheckedCreateWithoutUserInputSchema_1 = require("./MemberActivityUncheckedCreateWithoutUserInputSchema");
const MemberActivityCreateOrConnectWithoutUserInputSchema_1 = require("./MemberActivityCreateOrConnectWithoutUserInputSchema");
const MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema_1 = require("./MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema");
const MemberActivityCreateManyUserInputEnvelopeSchema_1 = require("./MemberActivityCreateManyUserInputEnvelopeSchema");
const MemberActivityWhereUniqueInputSchema_1 = require("./MemberActivityWhereUniqueInputSchema");
const MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema_1 = require("./MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema");
const MemberActivityUpdateManyWithWhereWithoutUserInputSchema_1 = require("./MemberActivityUpdateManyWithWhereWithoutUserInputSchema");
const MemberActivityScalarWhereInputSchema_1 = require("./MemberActivityScalarWhereInputSchema");
exports.MemberActivityUpdateManyWithoutUserNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MemberActivityCreateWithoutUserInputSchema_1.MemberActivityCreateWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityCreateWithoutUserInputSchema_1.MemberActivityCreateWithoutUserInputSchema).array(), zod_1.z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema_1.MemberActivityUncheckedCreateWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema_1.MemberActivityUncheckedCreateWithoutUserInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MemberActivityCreateOrConnectWithoutUserInputSchema_1.MemberActivityCreateOrConnectWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityCreateOrConnectWithoutUserInputSchema_1.MemberActivityCreateOrConnectWithoutUserInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema_1.MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema_1.MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => MemberActivityCreateManyUserInputEnvelopeSchema_1.MemberActivityCreateManyUserInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema), zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema), zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema), zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema), zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema_1.MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema_1.MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => MemberActivityUpdateManyWithWhereWithoutUserInputSchema_1.MemberActivityUpdateManyWithWhereWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityUpdateManyWithWhereWithoutUserInputSchema_1.MemberActivityUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => MemberActivityScalarWhereInputSchema_1.MemberActivityScalarWhereInputSchema), zod_1.z.lazy(() => MemberActivityScalarWhereInputSchema_1.MemberActivityScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.default = exports.MemberActivityUpdateManyWithoutUserNestedInputSchema;
//# sourceMappingURL=MemberActivityUpdateManyWithoutUserNestedInputSchema.js.map