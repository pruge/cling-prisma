"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.MemberScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'email', 'tag', 'role', 'createdAt', 'updatedAt']);
exports.default = exports.MemberScalarFieldEnumSchema;
//# sourceMappingURL=MemberScalarFieldEnumSchema.js.map