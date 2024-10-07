"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityUpdateArgsSchema = exports.MemberActivitySelectSchema = void 0;
const zod_1 = require("zod");
const MemberActivityIncludeSchema_1 = require("../inputTypeSchemas/MemberActivityIncludeSchema");
const MemberActivityUpdateInputSchema_1 = require("../inputTypeSchemas/MemberActivityUpdateInputSchema");
const MemberActivityUncheckedUpdateInputSchema_1 = require("../inputTypeSchemas/MemberActivityUncheckedUpdateInputSchema");
const MemberActivityWhereUniqueInputSchema_1 = require("../inputTypeSchemas/MemberActivityWhereUniqueInputSchema");
const MemberArgsSchema_1 = require("../outputTypeSchemas/MemberArgsSchema");
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
exports.MemberActivitySelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    userId: zod_1.z.boolean().optional(),
    user: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => MemberArgsSchema_1.MemberArgsSchema)]).optional(),
}).strict();
exports.MemberActivityUpdateArgsSchema = zod_1.z.object({
    select: exports.MemberActivitySelectSchema.optional(),
    include: MemberActivityIncludeSchema_1.MemberActivityIncludeSchema.optional(),
    data: zod_1.z.union([MemberActivityUpdateInputSchema_1.MemberActivityUpdateInputSchema, MemberActivityUncheckedUpdateInputSchema_1.MemberActivityUncheckedUpdateInputSchema]),
    where: MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema,
}).strict();
exports.default = exports.MemberActivityUpdateArgsSchema;
//# sourceMappingURL=MemberActivityUpdateArgsSchema.js.map