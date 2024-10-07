"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityUpdateManyMutationInputSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInputSchema_1 = require("./StringFieldUpdateOperationsInputSchema");
exports.MemberActivityUpdateManyMutationInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.default = exports.MemberActivityUpdateManyMutationInputSchema;
//# sourceMappingURL=MemberActivityUpdateManyMutationInputSchema.js.map