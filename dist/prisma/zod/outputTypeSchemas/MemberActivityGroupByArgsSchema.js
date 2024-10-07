"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityGroupByArgsSchema = void 0;
const zod_1 = require("zod");
const MemberActivityWhereInputSchema_1 = require("../inputTypeSchemas/MemberActivityWhereInputSchema");
const MemberActivityOrderByWithAggregationInputSchema_1 = require("../inputTypeSchemas/MemberActivityOrderByWithAggregationInputSchema");
const MemberActivityScalarFieldEnumSchema_1 = require("../inputTypeSchemas/MemberActivityScalarFieldEnumSchema");
const MemberActivityScalarWhereWithAggregatesInputSchema_1 = require("../inputTypeSchemas/MemberActivityScalarWhereWithAggregatesInputSchema");
exports.MemberActivityGroupByArgsSchema = zod_1.z.object({
    where: MemberActivityWhereInputSchema_1.MemberActivityWhereInputSchema.optional(),
    orderBy: zod_1.z.union([MemberActivityOrderByWithAggregationInputSchema_1.MemberActivityOrderByWithAggregationInputSchema.array(), MemberActivityOrderByWithAggregationInputSchema_1.MemberActivityOrderByWithAggregationInputSchema]).optional(),
    by: MemberActivityScalarFieldEnumSchema_1.MemberActivityScalarFieldEnumSchema.array(),
    having: MemberActivityScalarWhereWithAggregatesInputSchema_1.MemberActivityScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.default = exports.MemberActivityGroupByArgsSchema;
//# sourceMappingURL=MemberActivityGroupByArgsSchema.js.map