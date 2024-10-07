"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberGroupByArgsSchema = void 0;
const zod_1 = require("zod");
const MemberWhereInputSchema_1 = require("../inputTypeSchemas/MemberWhereInputSchema");
const MemberOrderByWithAggregationInputSchema_1 = require("../inputTypeSchemas/MemberOrderByWithAggregationInputSchema");
const MemberScalarFieldEnumSchema_1 = require("../inputTypeSchemas/MemberScalarFieldEnumSchema");
const MemberScalarWhereWithAggregatesInputSchema_1 = require("../inputTypeSchemas/MemberScalarWhereWithAggregatesInputSchema");
exports.MemberGroupByArgsSchema = zod_1.z.object({
    where: MemberWhereInputSchema_1.MemberWhereInputSchema.optional(),
    orderBy: zod_1.z.union([MemberOrderByWithAggregationInputSchema_1.MemberOrderByWithAggregationInputSchema.array(), MemberOrderByWithAggregationInputSchema_1.MemberOrderByWithAggregationInputSchema]).optional(),
    by: MemberScalarFieldEnumSchema_1.MemberScalarFieldEnumSchema.array(),
    having: MemberScalarWhereWithAggregatesInputSchema_1.MemberScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.default = exports.MemberGroupByArgsSchema;
//# sourceMappingURL=MemberGroupByArgsSchema.js.map