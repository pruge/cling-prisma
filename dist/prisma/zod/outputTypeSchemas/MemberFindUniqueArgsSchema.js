"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberFindUniqueArgsSchema = exports.MemberSelectSchema = void 0;
const zod_1 = require("zod");
const MemberIncludeSchema_1 = require("../inputTypeSchemas/MemberIncludeSchema");
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
exports.MemberFindUniqueArgsSchema = zod_1.z.object({
    select: exports.MemberSelectSchema.optional(),
    include: MemberIncludeSchema_1.MemberIncludeSchema.optional(),
    where: MemberWhereUniqueInputSchema_1.MemberWhereUniqueInputSchema,
}).strict();
exports.default = exports.MemberFindUniqueArgsSchema;
//# sourceMappingURL=MemberFindUniqueArgsSchema.js.map