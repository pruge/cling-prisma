"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateInputSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInputSchema_1 = require("./StringFieldUpdateOperationsInputSchema");
const DateTimeFieldUpdateOperationsInputSchema_1 = require("./DateTimeFieldUpdateOperationsInputSchema");
exports.ProductUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
    tag: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
    variable: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
    installed: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInputSchema_1.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInputSchema_1.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.default = exports.ProductUpdateInputSchema;
//# sourceMappingURL=ProductUpdateInputSchema.js.map