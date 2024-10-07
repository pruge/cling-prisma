"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSelectSchema = void 0;
const zod_1 = require("zod");
exports.ProductSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    tag: zod_1.z.boolean().optional(),
    variable: zod_1.z.boolean().optional(),
    installed: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
}).strict();
exports.default = exports.ProductSelectSchema;
//# sourceMappingURL=ProductSelectSchema.js.map