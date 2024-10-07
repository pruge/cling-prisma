"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeWithAggregatesFilterSchema = void 0;
const zod_1 = require("zod");
const NestedIntFilterSchema_1 = require("./NestedIntFilterSchema");
const NestedDateTimeFilterSchema_1 = require("./NestedDateTimeFilterSchema");
exports.NestedDateTimeWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.coerce.date().optional(),
    in: zod_1.z.coerce.date().array().optional(),
    notIn: zod_1.z.coerce.date().array().optional(),
    lt: zod_1.z.coerce.date().optional(),
    lte: zod_1.z.coerce.date().optional(),
    gt: zod_1.z.coerce.date().optional(),
    gte: zod_1.z.coerce.date().optional(),
    not: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => NestedIntFilterSchema_1.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => NestedDateTimeFilterSchema_1.NestedDateTimeFilterSchema).optional(),
    _max: zod_1.z.lazy(() => NestedDateTimeFilterSchema_1.NestedDateTimeFilterSchema).optional()
}).strict();
exports.default = exports.NestedDateTimeWithAggregatesFilterSchema;
//# sourceMappingURL=NestedDateTimeWithAggregatesFilterSchema.js.map