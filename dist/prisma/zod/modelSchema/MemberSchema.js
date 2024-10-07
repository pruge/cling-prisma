"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSchema = void 0;
const zod_1 = require("zod");
const RoleSchema_1 = require("../inputTypeSchemas/RoleSchema");
/////////////////////////////////////////
// MEMBER SCHEMA
/////////////////////////////////////////
exports.MemberSchema = zod_1.z.object({
    role: RoleSchema_1.RoleSchema,
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    tag: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date(),
    updatedAt: zod_1.z.coerce.date(),
});
exports.default = exports.MemberSchema;
//# sourceMappingURL=MemberSchema.js.map