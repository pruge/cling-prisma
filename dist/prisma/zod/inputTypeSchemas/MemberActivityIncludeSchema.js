"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityIncludeSchema = void 0;
const zod_1 = require("zod");
const MemberArgsSchema_1 = require("../outputTypeSchemas/MemberArgsSchema");
exports.MemberActivityIncludeSchema = zod_1.z.object({
    user: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => MemberArgsSchema_1.MemberArgsSchema)]).optional(),
}).strict();
exports.default = exports.MemberActivityIncludeSchema;
//# sourceMappingURL=MemberActivityIncludeSchema.js.map