"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityUpdateManyWithWhereWithoutUserInputSchema = void 0;
const zod_1 = require("zod");
const MemberActivityScalarWhereInputSchema_1 = require("./MemberActivityScalarWhereInputSchema");
const MemberActivityUpdateManyMutationInputSchema_1 = require("./MemberActivityUpdateManyMutationInputSchema");
const MemberActivityUncheckedUpdateManyWithoutUserInputSchema_1 = require("./MemberActivityUncheckedUpdateManyWithoutUserInputSchema");
exports.MemberActivityUpdateManyWithWhereWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MemberActivityScalarWhereInputSchema_1.MemberActivityScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => MemberActivityUpdateManyMutationInputSchema_1.MemberActivityUpdateManyMutationInputSchema), zod_1.z.lazy(() => MemberActivityUncheckedUpdateManyWithoutUserInputSchema_1.MemberActivityUncheckedUpdateManyWithoutUserInputSchema)]),
}).strict();
exports.default = exports.MemberActivityUpdateManyWithWhereWithoutUserInputSchema;
//# sourceMappingURL=MemberActivityUpdateManyWithWhereWithoutUserInputSchema.js.map