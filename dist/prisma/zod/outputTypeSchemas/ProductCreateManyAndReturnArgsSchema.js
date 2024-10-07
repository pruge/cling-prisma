"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyAndReturnArgsSchema = void 0;
const zod_1 = require("zod");
const ProductCreateManyInputSchema_1 = require("../inputTypeSchemas/ProductCreateManyInputSchema");
exports.ProductCreateManyAndReturnArgsSchema = zod_1.z.object({
    data: zod_1.z.union([ProductCreateManyInputSchema_1.ProductCreateManyInputSchema, ProductCreateManyInputSchema_1.ProductCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.default = exports.ProductCreateManyAndReturnArgsSchema;
//# sourceMappingURL=ProductCreateManyAndReturnArgsSchema.js.map