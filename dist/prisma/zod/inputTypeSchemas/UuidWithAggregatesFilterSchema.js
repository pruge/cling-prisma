"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidWithAggregatesFilterSchema = void 0;
const zod_1 = require("zod");
const QueryModeSchema_1 = require("./QueryModeSchema");
const NestedUuidWithAggregatesFilterSchema_1 = require("./NestedUuidWithAggregatesFilterSchema");
const NestedIntFilterSchema_1 = require("./NestedIntFilterSchema");
const NestedStringFilterSchema_1 = require("./NestedStringFilterSchema");
exports.UuidWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => QueryModeSchema_1.QueryModeSchema).optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => NestedUuidWithAggregatesFilterSchema_1.NestedUuidWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => NestedIntFilterSchema_1.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => NestedStringFilterSchema_1.NestedStringFilterSchema).optional(),
    _max: zod_1.z.lazy(() => NestedStringFilterSchema_1.NestedStringFilterSchema).optional()
}).strict();
exports.default = exports.UuidWithAggregatesFilterSchema;
//# sourceMappingURL=UuidWithAggregatesFilterSchema.js.map