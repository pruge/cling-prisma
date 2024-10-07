"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSchema = void 0;
const zod_1 = require("zod");
exports.RoleSchema = zod_1.z.enum(['admin', 'member', 'guest']);
exports.default = exports.RoleSchema;
//# sourceMappingURL=RoleSchema.js.map