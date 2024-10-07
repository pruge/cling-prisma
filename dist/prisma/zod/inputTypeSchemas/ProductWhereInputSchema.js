"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereInputSchema = void 0;
const zod_1 = require("zod");
const UuidFilterSchema_1 = require("./UuidFilterSchema");
const StringFilterSchema_1 = require("./StringFilterSchema");
const DateTimeFilterSchema_1 = require("./DateTimeFilterSchema");
exports.ProductWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ProductWhereInputSchema), zod_1.z.lazy(() => exports.ProductWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ProductWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ProductWhereInputSchema), zod_1.z.lazy(() => exports.ProductWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilterSchema_1.UuidFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
    tag: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
    variable: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
    installed: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilterSchema_1.DateTimeFilterSchema), zod_1.z.coerce.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilterSchema_1.DateTimeFilterSchema), zod_1.z.coerce.date()]).optional(),
}).strict();
exports.default = exports.ProductWhereInputSchema;
//# sourceMappingURL=ProductWhereInputSchema.js.map