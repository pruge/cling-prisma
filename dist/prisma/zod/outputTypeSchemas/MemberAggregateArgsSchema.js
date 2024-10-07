"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberAggregateArgsSchema = void 0;
const zod_1 = require("zod");
const MemberWhereInputSchema_1 = require("../inputTypeSchemas/MemberWhereInputSchema");
const MemberOrderByWithRelationInputSchema_1 = require("../inputTypeSchemas/MemberOrderByWithRelationInputSchema");
const MemberWhereUniqueInputSchema_1 = require("../inputTypeSchemas/MemberWhereUniqueInputSchema");
exports.MemberAggregateArgsSchema = zod_1.z.object({
    where: MemberWhereInputSchema_1.MemberWhereInputSchema.optional(),
    orderBy: zod_1.z.union([MemberOrderByWithRelationInputSchema_1.MemberOrderByWithRelationInputSchema.array(), MemberOrderByWithRelationInputSchema_1.MemberOrderByWithRelationInputSchema]).optional(),
    cursor: MemberWhereUniqueInputSchema_1.MemberWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.default = exports.MemberAggregateArgsSchema;
//# sourceMappingURL=MemberAggregateArgsSchema.js.map