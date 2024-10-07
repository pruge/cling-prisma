"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberUpdateArgsSchema = exports.MemberSelectSchema = void 0;
const zod_1 = require("zod");
const MemberIncludeSchema_1 = require("../inputTypeSchemas/MemberIncludeSchema");
const MemberUpdateInputSchema_1 = require("../inputTypeSchemas/MemberUpdateInputSchema");
const MemberUncheckedUpdateInputSchema_1 = require("../inputTypeSchemas/MemberUncheckedUpdateInputSchema");
const MemberWhereUniqueInputSchema_1 = require("../inputTypeSchemas/MemberWhereUniqueInputSchema");
const MemberActivityFindManyArgsSchema_1 = require("../outputTypeSchemas/MemberActivityFindManyArgsSchema");
const MemberCountOutputTypeArgsSchema_1 = require("../outputTypeSchemas/MemberCountOutputTypeArgsSchema");
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
exports.MemberSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    email: zod_1.z.boolean().optional(),
    tag: zod_1.z.boolean().optional(),
    role: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
    MemberActivity: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => MemberActivityFindManyArgsSchema_1.MemberActivityFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => MemberCountOutputTypeArgsSchema_1.MemberCountOutputTypeArgsSchema)]).optional(),
}).strict();
exports.MemberUpdateArgsSchema = zod_1.z.object({
    select: exports.MemberSelectSchema.optional(),
    include: MemberIncludeSchema_1.MemberIncludeSchema.optional(),
    data: zod_1.z.union([MemberUpdateInputSchema_1.MemberUpdateInputSchema, MemberUncheckedUpdateInputSchema_1.MemberUncheckedUpdateInputSchema]),
    where: MemberWhereUniqueInputSchema_1.MemberWhereUniqueInputSchema,
}).strict();
exports.default = exports.MemberUpdateArgsSchema;
//# sourceMappingURL=MemberUpdateArgsSchema.js.map