"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFilterSchema = void 0;
const zod_1 = require("zod");
const QueryModeSchema_1 = require("./QueryModeSchema");
const NestedStringFilterSchema_1 = require("./NestedStringFilterSchema");
exports.StringFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => QueryModeSchema_1.QueryModeSchema).optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => NestedStringFilterSchema_1.NestedStringFilterSchema)]).optional(),
}).strict();
exports.default = exports.StringFilterSchema;
//# sourceMappingURL=StringFilterSchema.js.map