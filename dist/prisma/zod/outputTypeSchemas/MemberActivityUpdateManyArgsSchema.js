"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityUpdateManyArgsSchema = void 0;
const zod_1 = require("zod");
const MemberActivityUpdateManyMutationInputSchema_1 = require("../inputTypeSchemas/MemberActivityUpdateManyMutationInputSchema");
const MemberActivityUncheckedUpdateManyInputSchema_1 = require("../inputTypeSchemas/MemberActivityUncheckedUpdateManyInputSchema");
const MemberActivityWhereInputSchema_1 = require("../inputTypeSchemas/MemberActivityWhereInputSchema");
exports.MemberActivityUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([MemberActivityUpdateManyMutationInputSchema_1.MemberActivityUpdateManyMutationInputSchema, MemberActivityUncheckedUpdateManyInputSchema_1.MemberActivityUncheckedUpdateManyInputSchema]),
    where: MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema.optional(),
}).strict();
exports.default = exports.MemberActivityUpdateManyArgsSchema;
//# sourceMappingURL=MemberActivityUpdateManyArgsSchema.js.map