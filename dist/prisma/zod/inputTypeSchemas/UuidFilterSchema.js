"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidFilterSchema = void 0;
const zod_1 = require("zod");
const QueryModeSchema_1 = require("./QueryModeSchema");
const NestedUuidFilterSchema_1 = require("./NestedUuidFilterSchema");
exports.UuidFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => QueryModeSchema_1.QueryModeSchema).optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => NestedUuidFilterSchema_1.NestedUuidFilterSchema)]).optional(),
}).strict();
exports.default = exports.UuidFilterSchema;
//# sourceMappingURL=UuidFilterSchema.js.map