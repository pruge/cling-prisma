"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedUuidFilterSchema = void 0;
const zod_1 = require("zod");
exports.NestedUuidFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedUuidFilterSchema)]).optional(),
}).strict();
exports.default = exports.NestedUuidFilterSchema;
//# sourceMappingURL=NestedUuidFilterSchema.js.map