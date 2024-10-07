"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductScalarWhereWithAggregatesInputSchema = void 0;
const zod_1 = require("zod");
const UuidWithAggregatesFilterSchema_1 = require("./UuidWithAggregatesFilterSchema");
const StringWithAggregatesFilterSchema_1 = require("./StringWithAggregatesFilterSchema");
const DateTimeWithAggregatesFilterSchema_1 = require("./DateTimeWithAggregatesFilterSchema");
exports.ProductScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ProductScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.ProductScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ProductScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ProductScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.ProductScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidWithAggregatesFilterSchema_1.UuidWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilterSchema_1.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    tag: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilterSchema_1.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    variable: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilterSchema_1.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    installed: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilterSchema_1.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilterSchema_1.DateTimeWithAggregatesFilterSchema), zod_1.z.coerce.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilterSchema_1.DateTimeWithAggregatesFilterSchema), zod_1.z.coerce.date()]).optional(),
}).strict();
exports.default = exports.ProductScalarWhereWithAggregatesInputSchema;
//# sourceMappingURL=ProductScalarWhereWithAggregatesInputSchema.js.map