"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityArgsSchema = void 0;
const zod_1 = require("zod");
const MemberActivitySelectSchema_1 = require("../inputTypeSchemas/MemberActivitySelectSchema");
const MemberActivityIncludeSchema_1 = require("../inputTypeSchemas/MemberActivityIncludeSchema");
exports.MemberActivityArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => MemberActivitySelectSchema_1.MemberActivitySelectSchema).optional(),
    include: zod_1.z.lazy(() => MemberActivityIncludeSchema_1.MemberActivityIncludeSchema).optional(),
}).strict();
exports.default = exports.MemberActivityArgsSchema;
//# sourceMappingURL=MemberActivityArgsSchema.js.map