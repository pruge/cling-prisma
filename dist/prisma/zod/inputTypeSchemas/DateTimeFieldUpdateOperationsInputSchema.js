"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeFieldUpdateOperationsInputSchema = void 0;
const zod_1 = require("zod");
exports.DateTimeFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.coerce.date().optional()
}).strict();
exports.default = exports.DateTimeFieldUpdateOperationsInputSchema;
//# sourceMappingURL=DateTimeFieldUpdateOperationsInputSchema.js.map