"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityFindUniqueOrThrowArgsSchema = exports.MemberActivitySelectSchema = void 0;
const zod_1 = require("zod");
const MemberActivityIncludeSchema_1 = require("../inputTypeSchemas/MemberActivityIncludeSchema");
const MemberActivityWhereUniqueInputSchema_1 = require("../inputTypeSchemas/MemberActivityWhereUniqueInputSchema");
const MemberArgsSchema_1 = require("../outputTypeSchemas/MemberArgsSchema");
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
exports.MemberActivitySelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    userId: zod_1.z.boolean().optional(),
    user: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => MemberArgsSchema_1.MemberArgsSchema)]).optional(),
}).strict();
exports.MemberActivityFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.MemberActivitySelectSchema.optional(),
    include: MemberActivityIncludeSchema_1.MemberActivityIncludeSchema.optional(),
    where: MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema,
}).strict();
exports.default = exports.MemberActivityFindUniqueOrThrowArgsSchema;
//# sourceMappingURL=MemberActivityFindUniqueOrThrowArgsSchema.js.map