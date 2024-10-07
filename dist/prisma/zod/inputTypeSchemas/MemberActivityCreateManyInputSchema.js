"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityCreateManyInputSchema = void 0;
const zod_1 = require("zod");
exports.MemberActivityCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    userId: zod_1.z.string()
}).strict();
exports.default = exports.MemberActivityCreateManyInputSchema;
//# sourceMappingURL=MemberActivityCreateManyInputSchema.js.map