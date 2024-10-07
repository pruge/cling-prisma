"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityScalarWhereInputSchema = void 0;
const zod_1 = require("zod");
const UuidFilterSchema_1 = require("./UuidFilterSchema");
const StringFilterSchema_1 = require("./StringFilterSchema");
exports.MemberActivityScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MemberActivityScalarWhereInputSchema), zod_1.z.lazy(() => exports.MemberActivityScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.MemberActivityScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MemberActivityScalarWhereInputSchema), zod_1.z.lazy(() => exports.MemberActivityScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilterSchema_1.UuidFilterSchema), zod_1.z.string()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => StringFilterSchema_1.StringFilterSchema), zod_1.z.string()]).optional(),
}).strict();
exports.default = exports.MemberActivityScalarWhereInputSchema;
//# sourceMappingURL=MemberActivityScalarWhereInputSchema.js.map