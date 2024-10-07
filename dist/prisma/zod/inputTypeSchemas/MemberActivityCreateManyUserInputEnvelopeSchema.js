"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityCreateManyUserInputEnvelopeSchema = void 0;
const zod_1 = require("zod");
const MemberActivityCreateManyUserInputSchema_1 = require("./MemberActivityCreateManyUserInputSchema");
exports.MemberActivityCreateManyUserInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => MemberActivityCreateManyUserInputSchema_1.MemberActivityCreateManyUserInputSchema), zod_1.z.lazy(() => MemberActivityCreateManyUserInputSchema_1.MemberActivityCreateManyUserInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.default = exports.MemberActivityCreateManyUserInputEnvelopeSchema;
//# sourceMappingURL=MemberActivityCreateManyUserInputEnvelopeSchema.js.map