"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereUniqueInputSchema = void 0;
const zod_1 = require("zod");
const ProductWhereInputSchema_1 = require("./ProductWhereInputSchema");
const StringFilterSchema_1 = require("./StringFilterSchema");
const DateTimeFilterSchema_1 = require("./DateTimeFilterSchema");
exports.ProductWhereUniqueInputSchema = zod_1.z.union([
    zod_1.z.object({
        id: zod_1.z.string(),
        tag: zod_1.z.string()
    }),
    zod_1.z.object({
        id: zod_1.z.string(),
    }),
    zod_1.z.object({
        tag: zod_1.z.string(),
    }),
])
    .and(zod_1.z.object({
    id: zod_1.z.string().optional(),
    tag: zod_1.z.string().optional(),
    AND: zod_1.z.union([zod_1.z.lazy(() => ProductWhereInputSchema_1.ProductWhereInputSchema), zod_1.z.lazy(() => ProductWhereInputSchema_1.ProductWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => ProductWhereInputSchema_1.ProductWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => ProductWhereInputSchema_1.ProductWhereInputSchema), zod_1.z.lazy(() => ProductWhereInputSchema_1.ProductWhereInputSchema).array()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
    variable: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
    installed: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilterSchema_1.DateTimeFilterSchema), zod_1.z.coerce.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilterSchema_1.DateTimeFilterSchema), zod_1.z.coerce.date()]).optional(),
}).strict());
exports.default = exports.ProductWhereUniqueInputSchema;
//# sourceMappingURL=ProductWhereUniqueInputSchema.js.map