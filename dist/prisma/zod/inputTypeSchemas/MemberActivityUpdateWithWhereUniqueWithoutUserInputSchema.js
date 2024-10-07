"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema = void 0;
const zod_1 = require("zod");
const MemberActivityWhereUniqueInputSchema_1 = require("./MemberActivityWhereUniqueInputSchema");
const MemberActivityUpdateWithoutUserInputSchema_1 = require("./MemberActivityUpdateWithoutUserInputSchema");
const MemberActivityUncheckedUpdateWithoutUserInputSchema_1 = require("./MemberActivityUncheckedUpdateWithoutUserInputSchema");
exports.MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => MemberActivityUpdateWithoutUserInputSchema_1.MemberActivityUpdateWithoutUserInputSchema), zod_1.z.lazy(() => MemberActivityUncheckedUpdateWithoutUserInputSchema_1.MemberActivityUncheckedUpdateWithoutUserInputSchema)]),
}).strict();
exports.default = exports.MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema;
//# sourceMappingURL=MemberActivityUpdateWithWhereUniqueWithoutUserInputSchema.js.map