"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberActivityCreateInputSchema = void 0;
const zod_1 = require("zod");
const MemberCreateNestedOneWithoutMemberActivityInputSchema_1 = require("./MemberCreateNestedOneWithoutMemberActivityInputSchema");
exports.MemberActivityCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    user: zod_1.z.lazy(() => MemberCreateNestedOneWithoutMemberActivityInputSchema_1.MemberCreateNestedOneWithoutMemberActivityInputSchema)
}).strict();
exports.default = exports.MemberActivityCreateInputSchema;
//# sourceMappingURL=MemberActivityCreateInputSchema.js.map