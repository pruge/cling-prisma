"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFieldUpdateOperationsInputSchema = void 0;
const zod_1 = require("zod");
exports.StringFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.string().optional()
}).strict();
exports.default = exports.StringFieldUpdateOperationsInputSchema;
//# sourceMappingURL=StringFieldUpdateOperationsInputSchema.js.map