"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivitySchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// MEMBER ACTIVITY SCHEMA
/////////////////////////////////////////
exports.MemberActivitySchema = zod_1.z.object({
    id: zod_1.z.string(),
    userId: zod_1.z.string(),
});
exports.default = exports.MemberActivitySchema;
//# sourceMappingURL=MemberActivitySchema.js.map