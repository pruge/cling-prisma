"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyInputSchema = void 0;
const zod_1 = require("zod");
exports.ProductCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    tag: zod_1.z.string(),
    variable: zod_1.z.string().optional(),
    installed: zod_1.z.string().optional(),
    createdAt: zod_1.z.coerce.date().optional(),
    updatedAt: zod_1.z.coerce.date().optional()
}).strict();
exports.default = exports.ProductCreateManyInputSchema;
//# sourceMappingURL=ProductCreateManyInputSchema.js.map