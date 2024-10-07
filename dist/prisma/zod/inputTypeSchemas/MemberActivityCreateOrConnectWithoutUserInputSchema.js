"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityCreateOrConnectWithoutUserInputSchema = void 0;
const zod_1 = require("zod");
const MemberActivityWhereUniqueInputSchema_1 = require("./MemberActivityWhereUniqueInputSchema");
const MemberActivityCreateWithoutUserInputSchema_1 = require("./MemberActivityCreateWithoutUserInputSchema");
const MemberActivityUncheckedCreateWithoutUserInputSchema_1 = require("./MemberActivityUncheckedCreateWithoutUserInputSchema");
exports.MemberActivityCreateOrConnectWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => MemberActivityCreateWithoutUserInputSchema_1.MemberActivityCreateWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityUncheckedCreateWithoutUserInputSchema_1.MemberActivityUncheckedCreateWithoutUserInputSchema)]),
}).strict();
exports.default = exports.MemberActivityCreateOrConnectWithoutUserInputSchema;
//# sourceMappingURL=MemberActivityCreateOrConnectWithoutUserInputSchema.js.map