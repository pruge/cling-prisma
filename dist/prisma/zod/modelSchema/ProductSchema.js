"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////
exports.ProductSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    tag: zod_1.z.string(),
    variable: zod_1.z.string(),
    installed: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date(),
    updatedAt: zod_1.z.coerce.date(),
});
exports.default = exports.ProductSchema;
//# sourceMappingURL=ProductSchema.js.map