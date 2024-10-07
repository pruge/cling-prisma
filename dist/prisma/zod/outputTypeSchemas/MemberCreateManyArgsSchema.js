"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberCreateManyArgsSchema = void 0;
const zod_1 = require("zod");
const MemberCreateManyInputSchema_1 = require("../inputTypeSchemas/MemberCreateManyInputSchema");
exports.MemberCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([MemberCreateManyInputSchema_1.MemberCreateManyInputSchema, MemberCreateManyInputSchema_1.MemberCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.default = exports.MemberCreateManyArgsSchema;
//# sourceMappingURL=MemberCreateManyArgsSchema.js.map