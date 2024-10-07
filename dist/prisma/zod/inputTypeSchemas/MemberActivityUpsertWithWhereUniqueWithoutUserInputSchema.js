"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema = void 0;
const zod_1 = require("zod");
const MemberActivityWhereUniqueInputSchema_1 = require("./MemberActivityWhereUniqueInputSchema");
const MemberActivityUpdateWithoutUserInputSchema_1 = require("./MemberActivityUpdateWithoutUserInputSchema");
const MemberActivityUncheckedUpdateWithoutUserInputSchema_1 = require("./MemberActivityUncheckedUpdateWithoutUserInputSchema");
const MemberActivityCreateWithoutUserInputSchema_1 = require("./MemberActivityCreateWithoutUserInputSchema");
const MemberActivityUncheckedCreateWithoutUserInputSchema_1 = require("./MemberActivityUncheckedCreateWithoutUserInputSchema");
exports.MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => MemberActivityUpdateWithoutUserInputSchema_1.MemberActivityUpdateWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityUncheckedUpdateWithoutUserInputSchema_1.MemberActivityUncheckedUpdateWithoutUserInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => MemberActivityCreateWithoutUserInputSchema_1.MemberActivityCreateWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema_1.MemberActivityUncheckedCreateWithoutUserInputSchema)]),
}).strict();
exports.default = exports.MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema;
//# sourceMappingURL=MemberActivityUpsertWithWhereUniqueWithoutUserInputSchema.js.map