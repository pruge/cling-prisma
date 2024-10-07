"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityFindManyArgsSchema = exports.MemberActivitySelectSchema = void 0;
const zod_1 = require("zod");
const MemberActivityIncludeSchema_1 = require("../inputTypeSchemas/MemberActivityIncludeSchema");
const MemberActivityWhereInputSchema_1 = require("../inputTypeSchemas/MemberActivityWhereInputSchema");
const MemberActivityOrderByWithRelationInputSchema_1 = require("../inputTypeSchemas/MemberActivityOrderByWithRelationInputSchema");
const MemberActivityWhereUniqueInputSchema_1 = require("../inputTypeSchemas/MemberActivityWhereUniqueInputSchema");
const MemberActivityScalarFieldEnumSchema_1 = require("../inputTypeSchemas/MemberActivityScalarFieldEnumSchema");
const MemberArgsSchema_1 = require("../outputTypeSchemas/MemberArgsSchema");
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
exports.MemberActivitySelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    userId: zod_1.z.boolean().optional(),
    user: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => MemberArgsSchema_1.MemberArgsSchema)]).optional(),
}).strict();
exports.MemberActivityFindManyArgsSchema = zod_1.z.object({
    select: exports.MemberActivitySelectSchema.optional(),
    include: MemberActivityIncludeSchema_1.MemberActivityIncludeSchema.optional(),
    where: MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema.optional(),
    orderBy: zod_1.z.union([MemberActivityOrderByWithRelationInputSchema_1.MemberActivityOrderByWithRelationInputSchema.array(), MemberActivityOrderByWithRelationInputSchema_1.MemberActivityOrderByWithRelationInputSchema]).optional(),
    cursor: MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([MemberActivityScalarFieldEnumSchema_1.MemberActivityScalarFieldEnumSchema, MemberActivityScalarFieldEnumSchema_1.MemberActivityScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.default = exports.MemberActivityFindManyArgsSchema;
//# sourceMappingURL=MemberActivityFindManyArgsSchema.js.map