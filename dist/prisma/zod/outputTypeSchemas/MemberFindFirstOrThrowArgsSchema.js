"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberFindFirstOrThrowArgsSchema = exports.MemberSelectSchema = void 0;
const zod_1 = require("zod");
const MemberIncludeSchema_1 = require("../inputTypeSchemas/MemberIncludeSchema");
const MemberWhereInputSchema_1 = require("../inputTypeSchemas/MemberWhereInputSchema");
const MemberOrderByWithRelationInputSchema_1 = require("../inputTypeSchemas/MemberOrderByWithRelationInputSchema");
const MemberWhereUniqueInputSchema_1 = require("../inputTypeSchemas/MemberWhereUniqueInputSchema");
const MemberScalarFieldEnumSchema_1 = require("../inputTypeSchemas/MemberScalarFieldEnumSchema");
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
exports.MemberFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.MemberSelectSchema.optional(),
    include: MemberIncludeSchema_1.MemberIncludeSchema.optional(),
    where: MemberWhereInputSchema_1.MemberWhereInputSchema.optional(),
    orderBy: zod_1.z.union([MemberOrderByWithRelationInputSchema_1.MemberOrderByWithRelationInputSchema.array(), MemberOrderByWithRelationInputSchema_1.MemberOrderByWithRelationInputSchema]).optional(),
    cursor: MemberWhereUniqueInputSchema_1.MemberWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([MemberScalarFieldEnumSchema_1.MemberScalarFieldEnumSchema, MemberScalarFieldEnumSchema_1.MemberScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.default = exports.MemberFindFirstOrThrowArgsSchema;
//# sourceMappingURL=MemberFindFirstOrThrowArgsSchema.js.map