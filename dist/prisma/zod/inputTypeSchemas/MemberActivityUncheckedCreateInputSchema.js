"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityUncheckedCreateInputSchema = void 0;
const zod_1 = require("zod");
exports.MemberActivityUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    userId: zod_1.z.string()
}).strict();
exports.default = exports.MemberActivityUncheckedCreateInputSchema;
//# sourceMappingURL=MemberActivityUncheckedCreateInputSchema.js.map