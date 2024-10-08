"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedIntFilterSchema = void 0;
const zod_1 = require("zod");
exports.NestedIntFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntFilterSchema)]).optional(),
}).strict();
exports.default = exports.NestedIntFilterSchema;
//# sourceMappingURL=NestedIntFilterSchema.js.map