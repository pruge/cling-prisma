"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyArgsSchema = void 0;
const zod_1 = require("zod");
const ProductUpdateManyMutationInputSchema_1 = require("../inputTypeSchemas/ProductUpdateManyMutationInputSchema");
const ProductUncheckedUpdateManyInputSchema_1 = require("../inputTypeSchemas/ProductUncheckedUpdateManyInputSchema");
const ProductWhereInputSchema_1 = require("../inputTypeSchemas/ProductWhereInputSchema");
exports.ProductUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([ProductUpdateManyMutationInputSchema_1.ProductUpdateManyMutationInputSchema, ProductUncheckedUpdateManyInputSchema_1.ProductUncheckedUpdateManyInputSchema]),
    where: ProductWhereInputSchema_1.ProductWhereInputSchema.optional(),
}).strict();
exports.default = exports.ProductUpdateManyArgsSchema;
//# sourceMappingURL=ProductUpdateManyArgsSchema.js.map