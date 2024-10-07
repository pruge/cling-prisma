"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDeleteManyArgsSchema = void 0;
const zod_1 = require("zod");
const ProductWhereInputSchema_1 = require("../inputTypeSchemas/ProductWhereInputSchema");
exports.ProductDeleteManyArgsSchema = zod_1.z.object({
    where: ProductWhereInputSchema_1.ProductWhereInputSchema.optional(),
}).strict();
exports.default = exports.ProductDeleteManyArgsSchema;
//# sourceMappingURL=ProductDeleteManyArgsSchema.js.map