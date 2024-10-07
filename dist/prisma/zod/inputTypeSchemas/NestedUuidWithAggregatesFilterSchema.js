"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedUuidWithAggregatesFilterSchema = void 0;
const zod_1 = require("zod");
const NestedIntFilterSchema_1 = require("./NestedIntFilterSchema");
const NestedStringFilterSchema_1 = require("./NestedStringFilterSchema");
exports.NestedUuidWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedUuidWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => NestedIntFilterSchema_1.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => NestedStringFilterSchema_1.NestedStringFilterSchema).optional(),
    _max: zod_1.z.lazy(() => NestedStringFilterSchema_1.NestedStringFilterSchema).optional()
}).strict();
exports.default = exports.NestedUuidWithAggregatesFilterSchema;
//# sourceMappingURL=NestedUuidWithAggregatesFilterSchema.js.map