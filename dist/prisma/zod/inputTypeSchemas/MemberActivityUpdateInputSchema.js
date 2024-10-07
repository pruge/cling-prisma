"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityUpdateInputSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInputSchema_1 = require("./StringFieldUpdateOperationsInputSchema");
const MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema_1 = require("./MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema");
exports.MemberActivityUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => StringFieldUpdateOperationsInputSchema_1.StringFieldUpdateOperationsInputSchema)]).optional(),
    user: zod_1.z.lazy(() => MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema_1.MemberUpdateOneRequiredWithoutMemberActivityNestedInputSchema).optional()
}).strict();
exports.default = exports.MemberActivityUpdateInputSchema;
//# sourceMappingURL=MemberActivityUpdateInputSchema.js.map