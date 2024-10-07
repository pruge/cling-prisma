"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberCreateManyAndReturnArgsSchema = void 0;
const zod_1 = require("zod");
const MemberCreateManyInputSchema_1 = require("../inputTypeSchemas/MemberCreateManyInputSchema");
exports.MemberCreateManyAndReturnArgsSchema = zod_1.z.object({
    data: zod_1.z.union([MemberCreateManyInputSchema_1.MemberCreateManyInputSchema, MemberCreateManyInputSchema_1.MemberCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.default = exports.MemberCreateManyAndReturnArgsSchema;
//# sourceMappingURL=MemberCreateManyAndReturnArgsSchema.js.map