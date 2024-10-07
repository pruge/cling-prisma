"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberCountOutputTypeSelectSchema = void 0;
const zod_1 = require("zod");
exports.MemberCountOutputTypeSelectSchema = zod_1.z.object({
    MemberActivity: zod_1.z.boolean().optional(),
}).strict();
exports.default = exports.MemberCountOutputTypeSelectSchema;
//# sourceMappingURL=MemberCountOutputTypeSelectSchema.js.map