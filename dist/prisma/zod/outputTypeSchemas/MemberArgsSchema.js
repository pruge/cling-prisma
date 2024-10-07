"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberArgsSchema = void 0;
const zod_1 = require("zod");
const MemberSelectSchema_1 = require("../inputTypeSchemas/MemberSelectSchema");
const MemberIncludeSchema_1 = require("../inputTypeSchemas/MemberIncludeSchema");
exports.MemberArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => MemberSelectSchema_1.MemberSelectSchema).optional(),
    include: zod_1.z.lazy(() => MemberIncludeSchema_1.MemberIncludeSchema).optional(),
}).strict();
exports.default = exports.MemberArgsSchema;
//# sourceMappingURL=MemberArgsSchema.js.map