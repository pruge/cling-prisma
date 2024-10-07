"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberUpdateManyArgsSchema = void 0;
const zod_1 = require("zod");
const MemberUpdateManyMutationInputSchema_1 = require("../inputTypeSchemas/MemberUpdateManyMutationInputSchema");
const MemberUncheckedUpdateManyInputSchema_1 = require("../inputTypeSchemas/MemberUncheckedUpdateManyInputSchema");
const MemberWhereInputSchema_1 = require("../inputTypeSchemas/MemberWhereInputSchema");
exports.MemberUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([MemberUpdateManyMutationInputSchema_1.MemberUpdateManyMutationInputSchema, MemberUncheckedUpdateManyInputSchema_1.MemberUncheckedUpdateManyInputSchema]),
    where: MemberWhereInputSchema_1.MemberWhereInputSchema.optional(),
}).strict();
exports.default = exports.MemberUpdateManyArgsSchema;
//# sourceMappingURL=MemberUpdateManyArgsSchema.js.map