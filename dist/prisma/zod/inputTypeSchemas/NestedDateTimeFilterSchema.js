"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeFilterSchema = void 0;
const zod_1 = require("zod");
exports.NestedDateTimeFilterSchema = zod_1.z.object({
    equals: zod_1.z.coerce.date().optional(),
    in: zod_1.z.coerce.date().array().optional(),
    notIn: zod_1.z.coerce.date().array().optional(),
    lt: zod_1.z.coerce.date().optional(),
    lte: zod_1.z.coerce.date().optional(),
    gt: zod_1.z.coerce.date().optional(),
    gte: zod_1.z.coerce.date().optional(),
    not: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema)]).optional(),
}).strict();
exports.default = exports.NestedDateTimeFilterSchema;
//# sourceMappingURL=NestedDateTimeFilterSchema.js.map