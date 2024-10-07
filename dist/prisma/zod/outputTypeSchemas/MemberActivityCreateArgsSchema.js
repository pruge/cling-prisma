"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityCreateArgsSchema = exports.MemberActivitySelectSchema = void 0;
const zod_1 = require("zod");
const MemberActivityIncludeSchema_1 = require("../inputTypeSchemas/MemberActivityIncludeSchema");
const MemberActivityCreateInputSchema_1 = require("../inputTypeSchemas/MemberActivityCreateInputSchema");
const MemberActivityUncheckedCreateInputSchema_1 = require("../inputTypeSchemas/MemberActivityUncheckedCreateInputSchema");
const MemberArgsSchema_1 = require("../outputTypeSchemas/MemberArgsSchema");
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
exports.MemberActivitySelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    userId: zod_1.z.boolean().optional(),
    user: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => MemberArgsSchema_1.MemberArgsSchema)]).optional(),
}).strict();
exports.MemberActivityCreateArgsSchema = zod_1.z.object({
    select: exports.MemberActivitySelectSchema.optional(),
    include: MemberActivityIncludeSchema_1.MemberActivityIncludeSchema.optional(),
    data: zod_1.z.union([MemberActivityCreateInputSchema_1.MemberActivityCreateInputSchema, MemberActivityUncheckedCreateInputSchema_1.MemberActivityUncheckedCreateInputSchema]),
}).strict();
exports.default = exports.MemberActivityCreateArgsSchema;
//# sourceMappingURL=MemberActivityCreateArgsSchema.js.map