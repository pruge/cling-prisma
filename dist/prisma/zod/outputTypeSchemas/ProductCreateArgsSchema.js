"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateArgsSchema = exports.ProductSelectSchema = void 0;
const zod_1 = require("zod");
const ProductCreateInputSchema_1 = require("../inputTypeSchemas/ProductCreateInputSchema");
const ProductUncheckedCreateInputSchema_1 = require("../inputTypeSchemas/ProductUncheckedCreateInputSchema");
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
exports.ProductSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    tag: zod_1.z.boolean().optional(),
    variable: zod_1.z.boolean().optional(),
    installed: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
}).strict();
exports.ProductCreateArgsSchema = zod_1.z.object({
    select: exports.ProductSelectSchema.optional(),
    data: zod_1.z.union([ProductCreateInputSchema_1.ProductCreateInputSchema, ProductUncheckedCreateInputSchema_1.ProductUncheckedCreateInputSchema]),
}).strict();
exports.default = exports.ProductCreateArgsSchema;
//# sourceMappingURL=ProductCreateArgsSchema.js.map