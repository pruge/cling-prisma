"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityCreateWithoutUserInputSchema = void 0;
const zod_1 = require("zod");
exports.MemberActivityCreateWithoutUserInputSchema = zod_1.z.object({
    id: zod_1.z.string().optional()
}).strict();
exports.default = exports.MemberActivityCreateWithoutUserInputSchema;
//# sourceMappingURL=MemberActivityCreateWithoutUserInputSchema.js.map