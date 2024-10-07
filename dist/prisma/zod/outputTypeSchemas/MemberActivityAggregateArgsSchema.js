"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityAggregateArgsSchema = void 0;
const zod_1 = require("zod");
const MemberActivityWhereInputSchema_1 = require("../inputTypeSchemas/MemberActivityWhereInputSchema");
const MemberActivityOrderByWithRelationInputSchema_1 = require("../inputTypeSchemas/MemberActivityOrderByWithRelationInputSchema");
const MemberActivityWhereUniqueInputSchema_1 = require("../inputTypeSchemas/MemberActivityWhereUniqueInputSchema");
exports.MemberActivityAggregateArgsSchema = zod_1.z.object({
    where: MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema.optional(),
    orderBy: zod_1.z.union([MemberActivityOrderByWithRelationInputSchema_1.MemberActivityOrderByWithRelationInputSchema.array(), MemberActivityOrderByWithRelationInputSchema_1.MemberActivityOrderByWithRelationInputSchema]).optional(),
    cursor: MemberActivityWhereUniqueInputSchema_1.MemberActivityWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.default = exports.MemberActivityAggregateArgsSchema;
//# sourceMappingURL=MemberActivityAggregateArgsSchema.js.map