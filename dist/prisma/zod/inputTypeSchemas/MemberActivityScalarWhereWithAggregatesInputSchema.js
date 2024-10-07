"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityScalarWhereWithAggregatesInputSchema = void 0;
const zod_1 = require("zod");
const UuidWithAggregatesFilterSchema_1 = require("./UuidWithAggregatesFilterSchema");
const StringWithAggregatesFilterSchema_1 = require("./StringWithAggregatesFilterSchema");
exports.MemberActivityScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MemberActivityScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.MemberActivityScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.MemberActivityScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MemberActivityScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.MemberActivityScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidWithAggregatesFilterSchema_1.UuidWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilterSchema_1.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
}).strict();
exports.default = exports.MemberActivityScalarWhereWithAggregatesInputSchema;
//# sourceMappingURL=MemberActivityScalarWhereWithAggregatesInputSchema.js.map