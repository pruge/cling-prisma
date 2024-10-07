"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityCreateManyAndReturnArgsSchema = void 0;
const zod_1 = require("zod");
const MemberActivityCreateManyInputSchema_1 = require("../inputTypeSchemas/MemberActivityCreateManyInputSchema");
exports.MemberActivityCreateManyAndReturnArgsSchema = zod_1.z.object({
    data: zod_1.z.union([MemberActivityCreateManyInputSchema_1.MemberActivityCreateManyInputSchema, MemberActivityCreateManyInputSchema_1.MemberActivityCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.default = exports.MemberActivityCreateManyAndReturnArgsSchema;
//# sourceMappingURL=MemberActivityCreateManyAndReturnArgsSchema.js.map