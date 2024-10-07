"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivitySelectSchema = void 0;
const zod_1 = require("zod");
const MemberArgsSchema_1 = require("../outputTypeSchemas/MemberArgsSchema");
exports.MemberActivitySelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    userId: zod_1.z.boolean().optional(),
    user: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => MemberArgsSchema_1.MemberArgsSchema)]).optional(),
}).strict();
exports.default = exports.MemberActivitySelectSchema;
//# sourceMappingURL=MemberActivitySelectSchema.js.map