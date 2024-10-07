"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberDeleteManyArgsSchema = void 0;
const zod_1 = require("zod");
const MemberWhereInputSchema_1 = require("../inputTypeSchemas/MemberWhereInputSchema");
exports.MemberDeleteManyArgsSchema = zod_1.z.object({
    where: MemberWhereInputSchema_1.MemberWhereInputSchema.optional(),
}).strict();
exports.default = exports.MemberDeleteManyArgsSchema;
//# sourceMappingURL=MemberDeleteManyArgsSchema.js.map