"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRelationFilterSchema = void 0;
const zod_1 = require("zod");
const MemberWhereInputSchema_1 = require("./MemberWhereInputSchema");
exports.MemberRelationFilterSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => MemberWhereInputSchema_1.MemberWhereInputSchema).optional(),
    isNot: zod_1.z.lazy(() => MemberWhereInputSchema_1.MemberWhereInputSchema).optional()
}).strict();
exports.default = exports.MemberRelationFilterSchema;
//# sourceMappingURL=MemberRelationFilterSchema.js.map