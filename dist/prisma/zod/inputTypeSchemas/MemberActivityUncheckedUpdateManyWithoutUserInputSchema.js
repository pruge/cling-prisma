"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityUncheckedUpdateManyWithoutUserInputSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInputSchema_1 = require("./StringFieldUpdateOperationsInputSchema");
exports.MemberActivityUncheckedUpdateManyWithoutUserInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.default = exports.MemberActivityUncheckedUpdateManyWithoutUserInputSchema;
//# sourceMappingURL=MemberActivityUncheckedUpdateManyWithoutUserInputSchema.js.map